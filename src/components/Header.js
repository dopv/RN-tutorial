import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Header as HeaderRNE} from 'react-native-elements'

const Header = (props) => {
    const {containerStyle, ...rest} = props;
  return (
    <HeaderRNE
        backgroundColor={"transparent"}
        {...rest}
        containerStyle={[styles.header, containerStyle]}
    />
  )
}

export default Header

const styles = StyleSheet.create({
    header: {

    }
})