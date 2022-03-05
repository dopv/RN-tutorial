import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Root from './src/navigation/Root';

export default function App() {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Root/>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  
});
