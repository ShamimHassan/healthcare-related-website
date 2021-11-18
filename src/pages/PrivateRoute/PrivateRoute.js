import React from 'react';
import { Container } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading} = useAuth();
    if(isLoading){
        return (
            <Container>
                <h2>Loading...</h2>
            </Container>
        )
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
            
    );
};

export default PrivateRoute;