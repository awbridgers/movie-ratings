import React, {useContext} from 'react';
import {Redirect, Route, RouteProps} from 'react-router-dom';
import {AuthContext} from '../firebase/authProvider';

interface props {
  children: React.ReactNode;
}

const ProtectedRoute = ({children, ...rest}: RouteProps) => {
  const authenticated = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={() => (authenticated ? children : <Redirect to="/" />)}
    ></Route>
  );
};


export default ProtectedRoute;