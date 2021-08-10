import React from 'react';
import {IRating, MovieContext} from '../../types';
import firebase from 'firebase/app';
import 'firebase/database';
import AddRating from '../../components/addRating';
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import {AuthContext} from '../../firebase/authProvider';
import {FirebaseContext} from '../../firebase/provider';

const mockUpdate = jest.fn();
jest.mock('../../firebase/config', () => ({
  db: {
    ref: () => ({
      update: mockUpdate,
    }),
  },
}));

interface Props {
  title: string;
  back: () => void;
  userScore: IRating | undefined;
  deleteRating: boolean;
}

const props = {
  title: 'Test Movie',
  back: jest.fn(),
  userScore: {name: 'user', score: 6.9, id: '123456'},
  deleteRating: false,
};
const val: MovieContext = {
  movie: [],
  viewer: [],
  userMovie: [],
  displayName: 'TestName',
};
const user = {uid: '123456'} as firebase.User;

const renderComp = (
  props: Props,
  FBuser: firebase.User | null,
  db: MovieContext
) => {
  render(
    <AuthContext.Provider value={FBuser}>
      <FirebaseContext.Provider value={db}>
        <AddRating {...props} />
      </FirebaseContext.Provider>
    </AuthContext.Provider>
  );
};

describe('addRating component', () => {
  describe('render conditionals', () => {
    it('should render without crashing', () => {
      renderComp(props, user, val);
      expect(screen.getByText('Edit Rating')).toBeInTheDocument();
    });
    it('should display current score and edit info if score exists', () => {
      renderComp(props, user, val);
      expect(screen.getByText('Edit Rating')).toBeInTheDocument();
      const input = screen.getByLabelText('Current Rating:');
      expect(input).toHaveAttribute('value', '6.9/10');
      expect(screen.getByText(/Edit your rating/i)).toBeInTheDocument();
      expect(screen.getByLabelText('Rating:')).toBeInTheDocument();
      expect(screen.queryByText('Delete')).not.toBeInTheDocument();
    });
    it('should not display current score or edit info if user has no score', () => {
      const newProps = {...props, userScore: undefined};
      renderComp(newProps, user, val);
      expect(screen.getByText('Add Rating')).toBeInTheDocument();
      expect(
        screen.queryByLabelText('Current Rating:')
      ).not.toBeInTheDocument();
      expect(screen.getByText(/Add your rating for/i)).toBeInTheDocument();
      expect(screen.getByLabelText('Rating:')).toBeInTheDocument();
      expect(screen.queryByText('Delete')).not.toBeInTheDocument();
    });
    it('should display the submit button if it is not the delete version', () => {
      renderComp(props, user, val);
      const buttons = screen.getByTestId('buttons');
      expect(within(buttons).getByText('Submit')).toBeInTheDocument();
      expect(within(buttons).getByText('Back')).toBeInTheDocument();
      expect(within(buttons).queryByText('Delete')).not.toBeInTheDocument();
    });
    it('should show the delete formatting if it is a delete', () => {
      const newProps = {...props, deleteRating: true};
      renderComp(newProps, user, val);
      expect(screen.getByText('Delete Rating')).toBeInTheDocument();
      expect(
        screen.getByText(/Are you sure you want to delete your rating/i)
      ).toBeInTheDocument();
      expect(
        within(screen.getByTestId('buttons')).getByText('Delete')
      ).toBeInTheDocument();
      expect(screen.queryByText('Submit')).not.toBeInTheDocument();
      expect(screen.queryByLabelText('Rating:')).not.toBeInTheDocument();
    });
  });
  describe.only('submit functionallity', () => {
    describe('edit/add rating', () => {
      beforeEach(() => {
        jest.resetAllMocks();
      });
      it('should show error if input is not between 0 and 10', () => {
        mockUpdate.mockResolvedValue(true);
        renderComp(props, user, val);
        const input = screen.getByLabelText('Rating:');
        const submit = screen.getByText('Submit');
        fireEvent.click(submit);
        expect(
          screen.getByText('Please enter a number between 0-10.')
        ).toBeInTheDocument();
        fireEvent.change(input, {target: {value: '112'}});
        fireEvent.click(submit);
        expect(
          screen.getByText('Please enter a number between 0-10.')
        ).toBeInTheDocument();
        fireEvent.change(input, {target: {value: '-1'}});
        fireEvent.click(submit);
        expect(
          screen.getByText('Please enter a number between 0-10.')
        ).toBeInTheDocument();
      });
      it('should catch and display update errors', async () => {
        mockUpdate.mockRejectedValue({message: 'This is an error'});
        renderComp(props, user, val);
        const input = screen.getByLabelText('Rating:');
        const submit = screen.getByText('Submit');
        fireEvent.change(input, {target: {value: '6'}});
        fireEvent.click(submit);
        const error = await screen.findByText('This is an error');
        expect(error).toBeInTheDocument();
      });
      it('should update the database if there are no errors', async () => {
        mockUpdate.mockResolvedValue(true);
        renderComp(props, user, val);
        const input = screen.getByLabelText('Rating:');
        const submit = screen.getByText('Submit');
        fireEvent.change(input, {target: {value: '6'}});
        fireEvent.click(submit);
        const success = await screen.findByText('Success!');
        expect(success).toBeInTheDocument();
        expect(mockUpdate).toHaveBeenCalledWith({
          'movies/Test Movie/ratings/123456': {
            displayName: 'TestName',
            score: 6,
          },
          'users/123456/ratings/Test Movie': 6,
        });
      });
    });
    describe('delete a rating', () => {
      it('should catch and display errors', async () => {
        const log = jest.spyOn(console, 'log');
        mockUpdate.mockRejectedValue({message: 'This is an error'});
        const newProps = {...props, deleteRating: true};
        renderComp(newProps, user, val);
        const button = within(screen.getByTestId('buttons')).getByText(
          'Delete'
        );
        fireEvent.click(button);
        await waitFor(() => expect(log).toHaveBeenCalledWith('This is an error'));
      });
      it('should delete the ratings', async () => {
        mockUpdate.mockResolvedValue(true);
        const newProps = {...props, deleteRating: true};
        renderComp(newProps, user, val);
        const button = within(screen.getByTestId('buttons')).getByText(
          'Delete'
        );
        fireEvent.click(button);
        await waitFor(() => {
          expect(screen.getByText('Success!')).toBeInTheDocument();
          expect(mockUpdate).toHaveBeenCalledWith({
            'movies/Test Movie/ratings/123456': null,
            'users/123456/ratings/Test Movie': null,
          });
        });
      });
    });
  });
});
