import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class SignupScreen extends Component {
  constructor(){
    super()
    this.state={
      emailId : '',
      password: '',
      confirmPassword : '',
      firstName : '',
      lastName : ''
    }
  }

  

  userSignUp = (emailId, password, confirmPassword) =>{
    if(password != confirmPassword){
      return Alert.alert('Password mismatch')
    }
    else{
    firebase.auth().createUserWithEmailAndPassword(emailId, password)
    .then((response)=>{
      return Alert.alert("User Added Successfully")
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    });
  }
  }


  render(){
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.loginBox}
          placeholder="First Name"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
        />

        <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="Last Name"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              lastName: text
            })
          }}
        />
        <TextInput
          style={styles.loginBox}
          placeholder={"IloveSharing@example.com"}
         
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
          placeholder={"password"}
          
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
        <TextInput
          style={styles.loginBox}
          placeholder={"confirm password"}
         
          secureTextEntry = {true}
          onChangeText={(text)=>{
            this.setState({
              confirmPassword: text
            })
          }}
        />
          <TouchableOpacity
            style={styles.button}
            onPress={()=>{
              this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)
              this.props.navigation.navigate('Login')
            }}
            >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F8BE85'
  },
  title :{
    fontSize:65,
    fontWeight:'300',
    paddingBottom:30,
    color : '#ff3d00'
  },
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
