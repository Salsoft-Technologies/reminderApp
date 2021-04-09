import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import MyStack from './src/navigation/MyStack';
import MyDrawer from './src/navigation/MyDrawer';
import Credentials from './src/navigation/Credentials';


import {AuthContext} from './src/navigation/AuthProvider';
import auth from '@react-native-firebase/auth';
import { useState, useEffect, useContext } from 'react';



function App() {
  const {user, setUser} = useContext(AuthContext);
  const {initializing, setInitializing} = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if(initializing) setInitializing(false);
  }

  useEffect(()=> {
    // GoogleSignin.configure({
    //   webClientId: '456505895258-fq05ojnbdu0jr1ds0vl3a520v002nqgc.apps.googleusercontent.com',
    // });
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    
    return subscriber;
    
  }, [])

  return (
    <NavigationContainer>
    {
      user ? <MyDrawer/> :  <Credentials/>
    }
   
    </NavigationContainer>
 
  );
}
export default App;
