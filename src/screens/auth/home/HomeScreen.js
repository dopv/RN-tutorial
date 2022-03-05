import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = (props) => {
    const {navigation} = props;
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Text>go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})