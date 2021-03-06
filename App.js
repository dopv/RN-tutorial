import { StatusBar } from 'expo-status-bar';
import React, { useMemo, useReducer } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Root from './src/navigation/Root';
import { AuthContext } from './src/utils/AuthContext';
import {SafeAreaProvider} from 'react-native-safe-area-context'


export default function App() {
  const [state, dispatch] = useReducer((prevState, action)=>{
    switch (action.type) {
      case "SIGN_IN":
        return {
          ...prevState,
          userToken: action.token,
          user: action.user,
          isSignOut: false
        }
      case "SIGN_OUT": 
        return {
          ...prevState,
          userToken: null,
          user: {},
          isSignOut: true
        }
      default:
        break;
    }
  }, 
  {
    userToken: null,
    user: {},
    isSignOut: true,
  })

  const authContext = useMemo(() => ({
    signIn: async () => {
      let token = "token";
      let user = {
        name: "Do Pham",
      }
      setTimeout(()=>{
        dispatch({type: "SIGN_IN", token,user})
      }, 2000)
    },
    signOut: async () => {
      dispatch("SIGN_OUT")
    }
  }), [])

  return (
    <>
      <AuthContext.Provider value={{...state, ...authContext}}>
        <SafeAreaProvider style={{flex: 1}}>
          <Root/>
        </SafeAreaProvider>
      </AuthContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({
  
});
