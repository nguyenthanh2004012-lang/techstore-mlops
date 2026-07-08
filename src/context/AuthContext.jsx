import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockAuth } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mocking auth state observer
    setCurrentUser(mockAuth.currentUser);
    setLoading(false);
  }, []);

  const login = (email, password) => {
    return mockAuth.signInWithEmailAndPassword(email, password).then(res => {
      setCurrentUser(res.user);
      return res.user;
    });
  };

  const logout = () => {
    return mockAuth.signOut().then(() => {
      setCurrentUser(null);
    });
  };

  const value = {
    currentUser,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
