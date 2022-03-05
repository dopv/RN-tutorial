import { View, Text } from 'react-native'
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/unauth/Login';
import { HOME_SCREEN, LOGIN_SCREEN } from './ScreenName';
import HomeScreen from '../screens/auth/home/HomeScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    const [token, setToken] = useState(null);
  return (
    <>
       <Stack.Navigator screenOptions={{ headerShown: false}}>
            {
                !token ? 
                <>
                    <Stack.Screen name={LOGIN_SCREEN} component={Login} />
                </>
                : 
                <>
                    <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
                </>
            }
       </Stack.Navigator>
    </>
  )
}