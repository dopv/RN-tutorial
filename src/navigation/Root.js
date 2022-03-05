import { View, Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';


export default function Root() {
  return (
    <NavigationContainer>
        <StackNavigator/>
    </NavigationContainer>
  )
}