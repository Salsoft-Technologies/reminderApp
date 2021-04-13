import React, {useState, createContext, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
            console.log('login successful');
          } catch (e) {
            switch (e.code) {
              case 'auth/wrong-password':
                alert('Incorrect Email or Password');
                
                break;
              case 'auth/user-not-found':
                alert('User does not exist');
                break;
              case 'auth/invalid-email':
                alert('Email does not exist');
                break;
              case 'auth/too-many-requests':
                alert(
                  'User is temporary disabled due to frequent trying to log in',
                );
                break;
            }
            console.log(e);
            alert(e);
          }
        },

        register: async (email, password, name,) => {
          try {
            await auth().createUserWithEmailAndPassword(
              email,
              password,
              name
            );
            console.log('successful');
          } catch (e) {
            switch (e.code) {
              case 'auth/email-already-in-use':
                alert('Email address already exists');
                break;
              case 'auth/invalid-email':
                alert('Invalid Email');
                break;
              case 'auth/weak-password':
                alert('Weak Password is not allowed');
                break;
            }
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
