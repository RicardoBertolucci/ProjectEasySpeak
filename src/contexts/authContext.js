import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const checkUserToken = async () => {
      try {
        const token = await localStorage.getItem('token');
        if (token) {
          setAuth({ token });
        }
      } catch (error) {
        console.error('Erro ao verificar o token do usuário:', error);
      }
    };

    checkUserToken();
  }, []);

  const signIn = (token, role) => {
    try {
      localStorage.setItem('token', token);
      localStorage.setItem('role', 'Paciente');
      setAuth({ token });
    } catch (e) {
      
    }
  };

  const signOut = async (token, role) => {
    try {
      await localStorage.removeItem('token', token);
      await localStorage.removeItem('role', 'Fonb');
      setAuth(null);
    } catch (e) {
      console.error('Erro ao remover token', e); 
    }
  };

  return (
    <AuthContext.Provider value={{ auth, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

