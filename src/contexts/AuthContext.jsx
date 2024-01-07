/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authedUser, setAuthedUser] = useState(true);

  return (
    <AuthContext.Provider value={{ authedUser, setAuthedUser }}>
      {children}
    </AuthContext.Provider>
  );
};
