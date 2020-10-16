import * as React from 'react';
import {Text, View, StyleSheet,TextInput,TouchableOpacity,Alert} from 'react-native';
import firebase from 'firebase';
import db from '../config';
export default class LoginScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            emailId : '',
            password : ''
        }
    }
    userLogin = (emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
          return Alert.alert("Successfully Login")
        })
        .catch((error)=> {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        })
      }
    render(){
        return(
            <View>
          <Text style={styles.title}>Care 2 Share</Text>
        <View style={styles.buttonContainer}>
          <TextInput
          style={styles.loginBox}
          placeholder="IloveSharing@example.com"
          placeholderTextColor = "#ffff"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />

        <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="password"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
          <TouchableOpacity
            style={[styles.button,{marginBottom:20, marginTop:20}]}
            onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)
            this.props.navigation.navigate('Main')
            }}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    loginBox:{
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor : '#ff8a65',
        fontSize: 20,
        margin:10,
        paddingLeft:10
      },
      button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#ff9800",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
      },
      buttonText:{
        color:'#ffff',
        fontWeight:'200',
        fontSize:20
      },
      buttonContainer:{
        flex:1,
        alignItems:'center'
      }
})