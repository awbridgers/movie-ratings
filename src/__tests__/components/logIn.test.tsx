import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import LogIn from '../../components/logIn';
import {AuthContext} from '../../firebase/authProvider';
import firebase from 'firebase/app';
import {auth} from '../../firebase/config';
import {BrowserRouter as Router} from 'react-router-dom';

const props: {back: () => void; type: 'in' | 'out'} = {
  back: jest.fn(),
  type: 'in',
};
const renderComp = (properties: typeof props) => {
  render(
    <Router>
      <LogIn {...properties} />
    </Router>
  );
};

describe('LogIn Component', () => {
  it('should render ', () => {
    renderComp({...props});
    expect(screen.getByRole('heading', {name: 'Login'})).toBeInTheDocument();
  });
  it('should log in', async () => {
    const spy = jest
      .spyOn(auth, 'signInWithEmailAndPassword')
      .mockResolvedValue({} as firebase.auth.UserCredential);
    renderComp({...props});
    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');
    const submit = screen.getByRole('button', {name:'Login'})
    fireEvent.change(email, {target: {value: 'test@test.com'}});
    fireEvent.change(password, {target: {value: 'qazzaq'}});
    fireEvent.click(submit);
    expect(spy).toHaveBeenCalledWith('test@test.com', 'qazzaq');
    await waitFor(() => expect(props.back).toHaveBeenCalled());
  });
  it('should catch error on login',async()=>{
    const spy = jest
    .spyOn(auth, 'signInWithEmailAndPassword')
    .mockRejectedValue({message:'wrong pass'});
    renderComp({...props});
    const submit = screen.getByRole('button', {name:'Login'})
    fireEvent.click(submit);
    await waitFor(()=>expect(screen.getByText('Login Failed: wrong pass')).toBeInTheDocument())
  })
  it('should show log out if type is logout', () => {
    renderComp({...props, type: 'out'});
    expect(screen.getByText('Sign Out Successful!')).toBeInTheDocument();
  })
  
});
