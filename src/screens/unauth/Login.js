import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native'
import React, { useState, useContext } from 'react'
import { HOME_SCREEN } from '../../navigation/ScreenName';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {AuthContext} from '../../utils/AuthContext';
// import background from '../';
// const background = require('')

export default function Login(props) {
    const { navigation } = props;
    const {signIn} = useContext(AuthContext) // call value of Context

    const [account, setAccount] = useState({email: '', password: ''});

    const onSignIn =() => {
        signIn({username: "username", password: "password"});
    }
  return (
    <ImageBackground style={{flex: 1}} source={require('../../assets/images/background.jpg')}>
    <ScrollView style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center',marginTop: 100}}>
        <Text style={styles.txtHeader}>Hello</Text>
        <Text style={styles.contentHeader}>Sign in to your account</Text>
      </View>
      <View style={{marginTop: 30, paddingHorizontal: 20}}>
        <View style={styles.inputView}>
            <Icon name="person-outline" size={25} color='white' style={{flex: 1}} />
            <TextInput
                style={styles.inputText}
                // value={account.email}
                placeholder="Type..."
                placeholderTextColor={"#fffA"}
        />
        </View>

        <View style={styles.inputView}>
            <Icon name="lock-closed-outline" size={25} color='white' style={{flex: 1}} />
            <TextInput
                style={styles.inputText}
                // value={account.password}
                placeholder="Type..."
                secureTextEntry={true}
                placeholderTextColor={"#fffA"}
        />
        </View>
        <View style={{flexDirection : 'row-reverse'}}>
            <TouchableOpacity>
                <Text style={styles.forgotLink}>Forgot the password?</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: 20,flexDirection: 'row-reverse', paddingHorizontal: 20}}>
          <TouchableOpacity onPress={onSignIn}>
              <View style={{flexDirection : 'row', alignItems: 'center'}}>
                  <Text style={{fontSize: 18, color: 'white'}}>Sign In</Text>
                  <View style={{backgroundColor: 'tomato', padding: 5, borderRadius: 5, marginLeft: 10}}>
                      <Icon name="arrow-forward-outline" size={20} color="#fff" />
                  </View>

              </View>
          </TouchableOpacity>
      </View>
      <View style={styles.registerView}>
          <Text style={{color: 'white'}}>Don't have an account? </Text>
          <TouchableOpacity>
              <Text style={{color: '#3DE3F2',fontStyle: 'italic', textDecorationLine: 'underline'}}>Create</Text>
          </TouchableOpacity>
      </View>

    </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff'
    },
    txtHeader: {
        fontSize: 40,
        fontWeight: '400',
        color: '#fff'
    },
    contentHeader: {
        fontSize: 18,
        color: '#fff'
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#fff'
        borderRadius: 25,
        // borderWidth: 1,
        marginTop: 10,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#fffA',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    inputText: {
        // backgroundColor: 'tomato',
        height: 50,
        width: '100%',
        marginLeft: 10,
        flex: 9,
        color: 'white'
    },
    forgotLink: {
        color: '#fff', 
        fontSize: 12, 
        marginTop: 10, 
        fontStyle: 'italic', 
        textDecorationLine: 'underline'
    },
    registerView:{
       marginTop: 40,
       flexDirection: 'row',
       justifyContent: 'center',
    }
})