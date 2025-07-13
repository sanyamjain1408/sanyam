// src/context/LoginModalContext.jsx
import React, { createContext, useContext, useState } from 'react';

const LoginModalContext = createContext();

export const LoginModalProvider = ({ children }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <LoginModalContext.Provider value={{ isLoginOpen, setIsLoginOpen }}>
      {children}
    </LoginModalContext.Provider>
  );
};

export const useLoginModal = () => useContext(LoginModalContext);
