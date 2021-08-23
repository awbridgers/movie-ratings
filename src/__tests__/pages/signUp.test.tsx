import {
  fireEvent,
  render,
  Screen,
  screen,
  waitFor,
} from '@testing-library/react';
import SignUp from '../../pages/SignUp';
import firebase from 'firebase/app';
import {AuthContext} from '../../firebase/authProvider';
import {auth} from '../../firebase/config';


const mockCreate = jest.fn();
const mockUpdateProfile = jest.fn();
const mockSet = jest.fn();
const mockPush = jest.fn();
jest.mock('../../firebase/config', () => ({
  ...jest.requireActual('../../firebase/config'),
  db: {
    ref: () => ({
      child: () => ({
        set: mockSet,
      }),
    }),
  },
}));
jest.mock('react-router-dom',()=>({
  ...jest.requireActual('react-router-dom'),
  useHistory:()=>({
    push: mockPush
  })
}))

const user = {
  uid: '123456',
  updateProfile: mockUpdateProfile,
} as unknown as firebase.User;

const renderComp = (FBuser: firebase.User | null) => {
  render(
    <AuthContext.Provider value={FBuser}>
      <SignUp />
    </AuthContext.Provider>
  );
};
const changeInputs = (
  screen: Screen,
  mail: string,
  display: string,
  password: string,
  cPassword: string
) => {
  //get the inputs
  const email = screen.getByLabelText('Email');
  const name = screen.getByLabelText('Display Name');
  const pass = screen.getByLabelText('Password');
  const cPass = screen.getByLabelText('Confirm Password');
  const btn = screen.getByRole('button');
  //change the inputs
  fireEvent.change(email, {target: {value: mail}});
  fireEvent.change(name, {target: {value: display}});
  fireEvent.change(pass, {target: {value: password}});
  fireEvent.change(cPass, {target: {value: cPassword}});
  fireEvent.click(btn);
};
describe('Sign Up Page', () => {
  beforeEach(() => {
    mockUpdateProfile.mockResolvedValue(true);
    mockSet.mockResolvedValue(true);
    jest
      .spyOn(auth, 'createUserWithEmailAndPassword')
      .mockResolvedValue({user} as firebase.auth.UserCredential);
  });
  it('should render', () => {
    renderComp(user);
    expect(screen.getByText('Join Movie Ratings')).toBeInTheDocument();
  });
  it('should not create if already signed in', () => {
    renderComp(user);
    changeInputs(screen, 'test@test.com', 'Test', 'qazzaq', 'qazzaq');
    expect(screen.getByText('Already Signed In')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Back'));
    expect(screen.queryByText('Already Signed In')).not.toBeInTheDocument();
  });
  it('should return error if passwords do not match', () => {
    renderComp(null);
    changeInputs(screen, 'a@a.com', 'name', 'qazzaq', 'different');
    expect(screen.getByText('Passwords do not match')).toBeInTheDocument();
  });
  it('should not allow name to be over 12 char', () => {
    renderComp(user);
    const input = screen.getByLabelText('Display Name');
    fireEvent.change(input, {target: {value: '123456789012'}});
    expect(input).toHaveProperty('value', '123456789012');
    fireEvent.change(input, {target: {value: '12345678901234'}});
    expect(input).toHaveProperty('value', '123456789012');
  });
  it('should show error if display name is less than 3 characters', () => {
    renderComp(null);
    changeInputs(screen, 'a@a.com', 'na', 'qazzaq', 'qazzaq');
    expect(
      screen.getByText('Display Name must be at least 3 characters')
    ).toBeInTheDocument();
  });
  it('should not allow special characters in name', () => {
    renderComp(null);
    changeInputs(screen, 'a@a.com', 'abcd1', 'qazzaq', 'different');
    expect(
      screen.getByText('Display Name can only be letters')
    ).toBeInTheDocument();
  });
  it('should create the account', async () => {
    renderComp(null);
    changeInputs(screen, 'a@a.com', 'Test', 'qazzaq', 'qazzaq');
    expect(auth.createUserWithEmailAndPassword).toHaveBeenCalledWith('a@a.com', 'qazzaq');
    await waitFor(() =>
      expect(mockUpdateProfile).toHaveBeenCalledWith({displayName: 'Test'})
    );
    await waitFor(() =>
      expect(mockSet).toHaveBeenCalledWith({displayName: 'Test'})
    );
    expect(screen.getByText('Success!')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', {name:'Continue to Home Page'}));
    expect(mockPush).toHaveBeenCalledWith('/')
  });
  it('should not create the user if not returned', async () => {
    jest
      .spyOn(auth, 'createUserWithEmailAndPassword')
      .mockResolvedValue({} as firebase.auth.UserCredential);
    renderComp(null);
    changeInputs(screen, 'a@a.com', 'Test', 'qazzaq', 'qazzaq');
    expect(auth.createUserWithEmailAndPassword).toHaveBeenCalledWith('a@a.com', 'qazzaq');
    await waitFor(() => expect(mockUpdateProfile).not.toHaveBeenCalled());
    await waitFor(() => expect(mockSet).not.toHaveBeenCalled());
    
  });
  it('should catch error on create email', async () => {
    jest
      .spyOn(auth, 'createUserWithEmailAndPassword')
      .mockRejectedValue({message: 'email wrong'});
    renderComp(null);
    changeInputs(screen, 'a@a.com', 'Test', 'qazzaq', 'qazzaq');
    await waitFor(() =>
      expect(screen.getByText('email wrong')).toBeInTheDocument()
    );
  });
  it('should catch error on create password', async () => {
    jest
      .spyOn(auth, 'createUserWithEmailAndPassword')
      .mockRejectedValue({message: 'password wrong'});
    renderComp(null);
    changeInputs(screen, 'a@a.com', 'Test', 'qazzaq', 'qazzaq');
    await waitFor(() =>
      expect(screen.getByText('password wrong')).toBeInTheDocument()
    );
  });
  it('should catch error on update profile', async () => {
    mockUpdateProfile.mockRejectedValueOnce({message:'error'})
    const log = jest.spyOn(console,'log');
    renderComp(null);
    changeInputs(screen, 'a@a.com', 'Test', 'qazzaq', 'qazzaq');
    await waitFor(()=>expect(log).toHaveBeenCalledWith('error'))
  })
  it('should catch error on update', async () => {
    mockSet.mockRejectedValueOnce({message:'error'})
    const log = jest.spyOn(console,'log');
    renderComp(null);
    changeInputs(screen, 'a@a.com', 'Test', 'qazzaq', 'qazzaq');
    await waitFor(()=>expect(log).toHaveBeenCalledWith('error'))
  })
  
  
});
