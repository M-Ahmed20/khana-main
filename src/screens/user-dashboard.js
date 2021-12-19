import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native'
import { signOut, auth } from '../configs/firebase'

export default function UserDashboard({ navigation }) {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutBtn} onPress={async () => {
        await signOut(auth)
      }}>
        <Text style={{color: '#fff'}}>Logout</Text>
      </TouchableOpacity>
      <Text style={styles.pendingPost}>No Pending Request</Text>

      <TouchableOpacity style={styles.applyBtn} onPress={async () => {
        console.log('Simple Button pressed')
        navigation.navigate('Apply for Food')
      }}>
        <Text style={{color: '#fff'}}>Apply for Food</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 30
    // justifyContent: "center",
  },
  logoutBtn: {
    width: 70,
    borderRadius: 5,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    backgroundColor: "#89C343",
    alignSelf: 'flex-end'
  },
  applyBtn:{
    width: "50%",
    borderRadius: 5,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#89C343",
  },
  pendingPost: {
    fontWeight: 'bold',
    color: '#89C343',
    fontSize: 20,
    marginTop: 120,
    marginBottom: 30
  },
});