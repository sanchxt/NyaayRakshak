import React, { createContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    async function loadUserDetails() {
      const storedDetails = await SecureStore.getItemAsync('userDetails');
      if (storedDetails) {
        setUserDetails(JSON.parse(storedDetails));
      }
    }

    loadUserDetails();
  }, []);

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
