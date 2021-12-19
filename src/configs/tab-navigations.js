import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import UserLogin from '../screens/user-login';
import ManagerLogin from '../screens/manager-login';
import UserSignup from '../screens/user-signup'
import UserDashboard from '../screens/user-dashboard'
import { onAuthStateChanged, auth } from '../configs/firebase';
import ManagerDashboard from '../screens/manager-dashboard';
import ApplyForFood from '../screens/apply-for-food';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();




function UserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='UserLogin' component={UserLogin} options={{
        title: 'UserLogin',
        headerShown: false
      }} />
      <Stack.Screen name='User Signup' component={UserSignup} options={{
        title: 'User Signup',
        headerShown: false
      }} />
    </Stack.Navigator>
  )
}


export default function TabNavigations() {
  const [user, setUser] = useState('')
  onAuthStateChanged(auth, (user)=>{
    if(user){
      setUser(user.uid)
    }else{
      setUser('')
    }
  })

  return (
    <NavigationContainer>
       {
                user ? (
                    <Stack.Navigator>
                        <Stack.Screen name="User Dashboard" component={UserDashboard} options={{headerShown: false}} />
                        <Stack.Screen name="Manager Dashboard" component={ManagerDashboard} options={{headerShown: false}} />
                        <Stack.Screen name="Apply for Food" component={ApplyForFood} options={{headerShown: false}} />
                    </Stack.Navigator>
                ) : (        
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'User Login') {
              iconName = focused ? 'people' : 'people-outline';
            } else if (route.name === 'Manager Login') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'User Dashboard') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#89C343',
          tabBarInactiveTintColor: 'gray',
        })}
      >
            <Tab.Screen name='User Login' component={UserStack} options={{
              title: 'UserLogin',
              headerShown: false
            }} />
    
            <Tab.Screen name='Manager Login' component={ManagerLogin} options={{
              title: 'Manager Login',
              headerShown: false
            }} />
      </Tab.Navigator>)}
    </NavigationContainer>
  )
}
