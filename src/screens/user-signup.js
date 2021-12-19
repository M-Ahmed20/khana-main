import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { style } from "styled-system";
import Logo from '../../assets/LogoKhanaSabkliye.png'

import { auth, createUserWithEmailAndPassword} from '../configs/firebase'
 
export default function UserSignup({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function authUser(){
  try {
    await createUserWithEmailAndPassword(auth, email, password);
} catch (e) {
    console.log(e)
}
}

 
  return (
    <View style={styles.container}>
      <Image source={Logo} style={{width: 120, height: 120}} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
  
      <TouchableOpacity style={styles.loginBtn} onPress={()=>{
          authUser();
      }}>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>
        
    <Text style={styles.new_user}>Already have an account? 
      <TouchableOpacity onPress={()=>{
          navigation.navigate('UserLogin')
      }}>
        <Text style={{color: '#89C343'}}> Login</Text>
      </TouchableOpacity>
      </Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
      marginTop: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 20,
    marginTop: 10
  },
 
  inputView: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    width: "80%",
    height: 45,
    marginBottom: 20,
    // alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    // marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 10,
  },
  new_user: {
    height: 30,
    marginTop: 10,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#89C343",
  },
  loginText: {
    color: "#fff",
    fontWeight: "bold",
    
  }
});