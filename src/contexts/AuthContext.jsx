/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserLogged, putAccessToken } from '../utils/api/network-data';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [initializing, seInitializing] = useState(true);

  const loginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setIsAuthenticated(data);
  };

  useEffect(() => {
    const fetchUserLogged = async () => {
      const { data } = await getUserLogged();
      setIsAuthenticated(data);
      seInitializing(false);
    };

    fetchUserLogged();
  }, []);

  const logout = async () => {
    setIsAuthenticated(null);
    putAccessToken('');

    navigate('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        initializing,
        loginSuccess,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
