import ChangeProfileInfo from '../../components/changeProfileInfo';
import firebase from 'firebase/app';
import {MovieContext} from '../../types';
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
  Screen,
  queries,
} from '@testing-library/react';
import AddRating from '../../components/addRating';
import {AuthContext} from '../../firebase/authProvider';
import {db} from '../../firebase/config';
import {FirebaseContext} from '../../firebase/provider';

//mocks
const mockCred = jest.fn();
const mockReAuth = jest.fn();
const mockUpdateEmail = jest.fn();
const mockUpdate = jest.fn();
const mockUpdateProfile = jest.fn();
const mockUpdatePassword = jest.fn();
const mockDelete = jest.fn();
//mock Modules
jest.mock('firebase/app', () => ({
  ...jest.requireActual('firebase/app'),
  auth: {
    EmailAuthProvider: {
      credential: jest.fn().mockReturnValue({name: 'test'}),
    },
  },
}));
jest.mock('../../firebase/config', () => ({
  db: {
    ref: () => ({
      update: mockUpdate,
    }),
  },
}));

//props and context
interface Props {
  type: 'Password' | 'Email' | 'Name' | 'Delete';
  currentEmail: string;
  currentName: string;
  back: () => void;
}
const props: Props = {
  type: 'Password',
  currentEmail: 'test@test.com',
  currentName: 'TestName',
  back: jest.fn(),
};
const val: MovieContext = {
  movie: [],
  viewer: [],
  userMovie: [
    {name: 'Test Movie', score: 10, id: 'id'},
    {name: 'Test Movie 2', score: 5, id: 'id'},
  ],
  displayName: 'TestName',
};
const user = {
  uid: '123456',
  reauthenticateWithCredential: mockReAuth,
  updateEmail: mockUpdateEmail,
  updateProfile: mockUpdateProfile,
  updatePassword: mockUpdatePassword,
  delete: mockDelete
} as unknown as firebase.User;

const renderComp = (
  props: Props,
  FBuser: firebase.User | null,
  db: MovieContext
) => {
  render(
    <AuthContext.Provider value={FBuser}>
      <FirebaseContext.Provider value={db}>
        <ChangeProfileInfo {...props} />
      </FirebaseContext.Provider>
    </AuthContext.Provider>
  );
};
const getInputs = (
  screen: Screen<typeof queries>,
  label: string,
  button: string
) => {
  const input = screen.getByLabelText(label);
  const submit = screen.getByRole('button', {name: button});
  return [input, submit];
};

describe('ChangeProfileInfo', () => {
  beforeEach(() => {
    mockReAuth.mockResolvedValue({user});
    mockUpdateEmail.mockResolvedValue(true);
    mockUpdate.mockResolvedValue(true);
    mockUpdateProfile.mockResolvedValue(true);
    mockUpdatePassword.mockResolvedValue(true);
    mockDelete.mockResolvedValue(true);
  });
  describe('layout', () => {
    it('should render password', () => {
      renderComp(props, user, val);
      expect(screen.getByText('Change Password')).toBeInTheDocument();
      expect(screen.getByLabelText('Current Password')).toBeInTheDocument();
      expect(screen.getByText('Submit')).toBeInTheDocument();
    });
    it('should render email', () => {
      const newProps: Props = {...props, type: 'Email'};
      renderComp(newProps, user, val);
      expect(screen.getByLabelText('Current Email:')).toBeInTheDocument();
      expect(screen.getByText('Change Email')).toBeInTheDocument();
      expect(screen.getByText('Submit')).toBeInTheDocument();
    });
    it('should render name', () => {
      const newProps: Props = {...props, type: 'Name'};
      renderComp(newProps, user, val);
      expect(screen.getByLabelText('Current Name:')).toBeInTheDocument();
      expect(screen.getByText('Submit')).toBeInTheDocument();
      expect(screen.getByText('Change Name')).toBeInTheDocument();
    });
    it('should render delete', () => {
      const newProps: Props = {...props, type: 'Delete'};
      renderComp(newProps, user, val);
      expect(
        screen.getByRole('heading', {name: 'Delete Account'})
      ).toBeInTheDocument();
      expect(
        screen.getByLabelText(/enter 'delete' to delete your account./i)
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', {name: 'Delete Account'})
      ).toBeInTheDocument();
    });
  });
  describe('Functionality', () => {
    let input:HTMLElement, submit:HTMLElement
    describe('Change Email', () => {
      beforeEach(() => {
        renderComp({...props, type: 'Email'}, user, val);
        input = screen.getByLabelText('New Email');
        submit = screen.getByRole('button',{name:'Submit'})
      });
      it('should show errors in reauth cred', async () => {
        mockReAuth.mockRejectedValueOnce({message: 'Error!'});
        fireEvent.change(input, {target: {value: 'newName'}});
        fireEvent.click(submit);
        await waitFor(() =>
          expect(screen.getByText('Error!')).toBeInTheDocument()
        );
      });
      it('should show errors in update email', async () => {
        mockUpdateEmail.mockRejectedValueOnce({message: 'Error!'});
        fireEvent.change(input, {target: {value: 'newName'}});
        fireEvent.click(submit);
        await waitFor(() =>
          expect(screen.getByText('Error!')).toBeInTheDocument()
        );
      });
      it('should change the email', async () => {
        fireEvent.change(input, {target: {value: 'newName'}});
        fireEvent.click(submit);
        await waitFor(() =>
          expect(screen.getByText('Success!')).toBeInTheDocument()
        );
      });
    });
    describe('change Name', () => {
      beforeEach(() => {
        renderComp({...props, type: 'Name'}, user, val);
        input = screen.getByLabelText('New Name');
        submit = screen.getByRole('button',{name: 'Submit'})
      });
      it('should show error if Name is <3 char', () => {
        fireEvent.change(input, {target: {value: 'ab'}});
        fireEvent.click(submit);
        expect(
          screen.getByText('Name must be at least 3 characters.')
        ).toBeInTheDocument();
      });
      it('should show error if Name contains number or char', () => {
        fireEvent.change(input, {target: {value: 'abcd1'}});
        fireEvent.click(submit);
        expect(
          screen.getByText('Name can only contain letters.')
        ).toBeInTheDocument();
      });
      it('should not allow name to be more than 12 char', () => {
        fireEvent.change(input, {target: {value: 'abcdefghijklmnop'}});
        expect(input).toHaveAttribute('value', '');
      });
      it('should catch error on update db name change', async () => {
        mockUpdate.mockRejectedValueOnce({message: 'This is an error!'});
        fireEvent.change(input, {target: {value: 'newName'}});
        fireEvent.click(submit);
        expect(mockUpdate).toHaveBeenCalled();
        await waitFor(() =>
          expect(screen.getByText('This is an error!')).toBeInTheDocument()
        );
      });
      it('should catch errors on update display name in profile', async () => {
        mockUpdateProfile.mockRejectedValue({message: 'This is an error!'});
        fireEvent.change(input, {target: {value: 'newName'}});
        fireEvent.click(submit);
        await waitFor(() => expect(mockUpdateProfile).toHaveBeenCalled());
        await waitFor(() =>
          expect(screen.getByText('This is an error!')).toBeInTheDocument()
        );
      });
      it('should update the display name in each movie and the user', async () => {
        fireEvent.change(input, {target: {value: 'newName'}});
        fireEvent.click(submit);
        expect(mockUpdate).toHaveBeenCalledWith({
          'movies/Test Movie/ratings/123456/displayName': 'newName',
          'movies/Test Movie 2/ratings/123456/displayName': 'newName',
          'users/123456/displayName': 'newName'
        });
        await waitFor(()=>expect(mockUpdateProfile).toHaveBeenCalledWith({displayName: 'newName'}));
      });
    });
    describe('Update Password', () => {
      let confirmPass:HTMLElement;
      let currentPass:HTMLElement;
      beforeEach(() => {
        renderComp({...props, type: 'Password'},user,val);
        input = screen.getByLabelText('New Password');
        confirmPass = screen.getByLabelText('Confirm New Password');
        currentPass = screen.getByLabelText('Current Password')
        submit = screen.getByRole('button', {name:'Submit'})
      });
      it('should show error if passwords do not match',  () => {
        fireEvent.change(input, {target:{value: 'newPass'}});
        fireEvent.change(confirmPass, {target: {value: 'notNewPass'}});
        fireEvent.click(submit);
        expect(screen.getByText('Passwords do not match')).toBeInTheDocument();
      })
      it('should catch error on reAuth', async () => {
        mockReAuth.mockRejectedValueOnce({message:'Error!'})
        fireEvent.change(input, {target:{value: 'newPass'}});
        fireEvent.change(confirmPass, {target: {value: 'newPass'}});
        fireEvent.click(submit);
        await waitFor(()=>expect(screen.getByText('Error!')).toBeInTheDocument());
      });
      it('should catch error on update password', async () => {
        mockUpdatePassword.mockRejectedValueOnce({message: 'Error!'})
        fireEvent.change(input, {target:{value: 'newPass'}});
        fireEvent.change(confirmPass, {target: {value: 'newPass'}});
        fireEvent.click(submit);
        await waitFor(()=>expect(screen.getByText('Error!')).toBeInTheDocument());
      })
      it('update password', async () => {
        fireEvent.change(input, {target:{value: 'newPass'}});
        fireEvent.change(confirmPass, {target: {value: 'newPass'}});
        fireEvent.click(submit);
        await waitFor(()=>expect(screen.getByText('Success!')).toBeInTheDocument());
      });
    });
    describe('Delete function', () => {
      beforeEach(() => {
        renderComp({...props, type: 'Delete'}, user, val);
        input = screen.getByLabelText(/Enter 'DELETE' to delete your account./i)
        submit = screen.getByRole('button', {name:'Delete Account'});
      });
      it('should do nothing if DELETE is not typed',  () => {
        fireEvent.change(input, {target:{value:'Del'}});
        fireEvent.click(submit);
        expect(mockReAuth).not.toHaveBeenCalled();
        expect(mockUpdate).not.toHaveBeenCalled();
      })
      it('should catch error on reAuth', async () => {
        mockReAuth.mockRejectedValueOnce({message:'Error!'})
        fireEvent.change(input, {target:{value:'DELETE'}});
        fireEvent.click(submit);
        await waitFor(()=>expect(screen.getByText('Error!')).toBeInTheDocument())
      })
      it('should catch error on update', async () => {
        mockUpdate.mockRejectedValueOnce({message:'Error!'})
        fireEvent.change(input, {target:{value:'DELETE'}});
        fireEvent.click(submit);
        await waitFor(()=>expect(screen.getByText('Error!')).toBeInTheDocument())
      })
      it('should catch error on delete user', async () => {
        mockDelete.mockRejectedValueOnce({message:'Error!'})
        fireEvent.change(input, {target:{value:'DELETE'}});
        fireEvent.click(submit);
        await waitFor(()=>expect(screen.getByText('Error!')).toBeInTheDocument())
      })
      it('should delete the users data', async () => {
        fireEvent.change(input, {target:{value:'DELETE'}});
        fireEvent.click(submit);
        await waitFor(()=>expect(mockUpdate).toHaveBeenCalledWith({
          'movies/Test Movie/ratings/123456':null,
          'movies/Test Movie 2/ratings/123456':null,
          'users/123456': null
        }))
      })
      it('should delete the users account', async () => {
        fireEvent.change(input, {target:{value:'DELETE'}});
        fireEvent.click(submit);
        await waitFor(()=>expect(mockDelete).toHaveBeenCalled())
        await waitFor(()=>expect(screen.getByText('Success!')).toBeInTheDocument())
      })
      
    });
  });
});
