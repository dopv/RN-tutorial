import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../../utils/AuthContext';

const HomeScreen = (props) => {
    const {navigation} = props;
    const {signOut} = useContext(AuthContext);
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={()=> signOut()}>
          <Text>go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})