import {render, screen, within} from '@testing-library/react';
import {AuthContext} from '../../firebase/authProvider';
import Profile from '../../pages/profile';
import {MovieContext} from '../../types';
import firebase from 'firebase/app';
import {FirebaseContext} from '../../firebase/provider';

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
  it('should show N/A if there are no ratings', () => {
    renderComp(user, {...val, userMovie:[]})
    const highest = screen.getByTestId('highest')
    const lowest = screen.getByTestId('lowest')
    const avg = screen.getByTestId('avg')
    expect(within(highest).getByText('N/A')).toBeInTheDocument();
    expect(within(lowest).getByText('N/A')).toBeInTheDocument();
    expect(within(avg).getByText('N/A')).toBeInTheDocument();
  })
  
});
