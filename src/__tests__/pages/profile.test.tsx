import {fireEvent, render, screen, within} from '@testing-library/react';
import {AuthContext} from '../../firebase/authProvider';
import Profile from '../../pages/profile';
import {MovieContext} from '../../types';
import firebase from 'firebase/app';
import {FirebaseContext} from '../../firebase/provider';
import { useRouteMatch } from 'react-router-dom';

const user = {
  uid: '123456',
} as firebase.User;
const val: MovieContext = {
  movie: [],
  viewer: [],
  userMovie: [
    {name: 'Test Movie', score: 10, id: 'id'},
    {name: 'Test Movie 2', score: 5, id: 'id'},
  ],
  displayName: 'TestName',
};

const renderComp = (FBuser: firebase.User, context: MovieContext)=>{
  render(
    <AuthContext.Provider value={FBuser}>
      <FirebaseContext.Provider value={context}>
        <Profile />
      </FirebaseContext.Provider>
    </AuthContext.Provider>
  );
}

describe('Profile Page', () => {
  it('should render without crashing', () => {
    renderComp(user,val);
    expect(screen.getByText('Account Settings')).toBeInTheDocument();
  })
  it('should get the highest and lowest rated', () => {
    renderComp(user,val);
    const highest = screen.getByTestId('highest')
    const lowest = screen.getByTestId('lowest')
    const avg = screen.getByTestId('avg')
    expect(within(highest).getByText('Test Movie (10/10)')).toBeInTheDocument();
    expect(within(lowest).getByText('Test Movie 2 (5/10)')).toBeInTheDocument();
    expect(within(avg).getByText('7.5/10')).toBeInTheDocument();
  })
  it('should get the same highest/lowest if reversed', () => {
    renderComp(user, {...val, userMovie: val.userMovie.reverse()})

    const highest = screen.getByTestId('highest')
    const lowest = screen.getByTestId('lowest')
    const avg = screen.getByTestId('avg')
    expect(within(highest).getByText('Test Movie (10/10)')).toBeInTheDocument();
    expect(within(lowest).getByText('Test Movie 2 (5/10)')).toBeInTheDocument();
    expect(within(avg).getByText('7.5/10')).toBeInTheDocument();

  })
  
  it('should show N/A if there are no ratings', () => {
    renderComp(user, {...val, userMovie:[]})
    const highest = screen.getByTestId('highest')
    const lowest = screen.getByTestId('lowest')
    const avg = screen.getByTestId('avg')
    expect(within(highest).getByText('N/A')).toBeInTheDocument();
    expect(within(lowest).getByText('N/A')).toBeInTheDocument();
    expect(within(avg).getByText('N/A')).toBeInTheDocument();
  })
  it('should show the rating table if there are movies', () => {
    renderComp(user,val);
    expect(screen.getAllByTestId('ratingName')).toHaveLength(2)
  })
  it('should should not show rating table if empty', () => {
    renderComp(user,{...val, userMovie:[]});
    expect(screen.queryByTestId('ratingName')).not.toBeInTheDocument();
  })
  describe('change buttons', () => {
    let email:HTMLElement, name:HTMLElement, pass:HTMLElement;
    beforeEach(() => {
      renderComp(user, val);
      email = within(screen.getByTestId('email')).getByText('Change');
      name = within(screen.getByTestId('name')).getByText('Change');
      pass = within(screen.getByTestId('password')).getByText('Change');
    });
    it('should show change if email button is pressed', () => {
      fireEvent.click(email);
      expect(screen.getByText('Change Email')).toBeInTheDocument();
    })
    it('should show change if name button is pressed', () => {
      fireEvent.click(name);
      expect(screen.getByText('Change Name')).toBeInTheDocument();
    })
    it('should show change if password button is pressed', () => {
      fireEvent.click(pass);
      expect(screen.getByText('Change Password')).toBeInTheDocument();
    })
    it('should run the back function', () => {
      fireEvent.click(name);
      expect(screen.getByText('Change Name')).toBeInTheDocument();

      fireEvent.click(screen.getByText('Back'));
      expect(screen.queryByText('Change Name')).not.toBeInTheDocument();
    })
    it('should press the delete button', () => {
      fireEvent.click(screen.getByText('Delete Account'));
      expect(screen.getByRole('heading', {name: 'Delete Account'})).toBeInTheDocument()
    })
    
    
  })

  
});
