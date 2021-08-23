import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import AuthProvider from '../../firebase/authProvider';
import { AuthContext } from '../../firebase/authProvider';
import firebase from 'firebase/app'


describe('Auth Provider', () => {
  it('should create the context', () => {
    const Test = ()=>{
      const context = useContext(AuthContext);
      return (
        <h1>{context!.uid}</h1>
      )
    }
    render(<AuthContext.Provider value = {{uid:'123456'} as firebase.User}>
      <Test/>
    </AuthContext.Provider>);
    expect(screen.getByText('123456')).toBeInTheDocument();
  })
    
});