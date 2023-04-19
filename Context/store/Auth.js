import React, { useReducer, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-community/async-storage';

import AuthReducers from '../reducers/Auth.reducers';
import { setCurrentUser, SET_CURRENT_USER } from '../actions/Auth.actions';
import AuthGlobal from './AuthGlobal';

const Auth = (props) => {
  const [stateUser, dispatch] = useReducer(AuthReducers, {
    isAuthenticated: null,
    user: {},
  });

  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);

    if (AsyncStorage.jwt) {
      const decoded = AsyncStorage.jwt ? AsyncStorage.jwt : '';

      if (setShowChild) {
        dispatch(setCurrentUser(jwt_decode(decoded)));
      }
    }

    return () => setShowChild(false);
  }, []);

  if (!showChild) {
    return null;
  } else {
    return (
      <AuthGlobal.Provider
        value={{
          stateUser,
          dispatch,
        }}
      >
        {props.children}
      </AuthGlobal.Provider>
    );
  }
};

export default Auth;