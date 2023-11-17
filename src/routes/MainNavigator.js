import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import QrScreen from '../screens/QrScreen';
import WalletScreen from '../screens/WalletScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WelcomeScreen from '../screens/WelcomeScreen'; 
import EmailLoginScreen from '../screens/EmailLoginScreen';
import PasswordLoginScreen from '../screens/PasswordLoginScreen';
import SearchScreen from '../screens/SearchScreen';
import KampanyalarScreen from '../screens/KampanyalarScreen';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainNavigator = () => {

  
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="EmailLogin" component={EmailLoginScreen}  />
      <Stack.Screen name="PasswordLogin" component={PasswordLoginScreen} />
      <Stack.Screen name="Home" component={MyPageNavigator} options={{ headerShown: false }}/>
      <Stack.Screen name="SearchScreen">
  {() => <SearchScreen />}
</Stack.Screen>
      <Stack.Screen name="KampanyalarScreen">
  {() => <KampanyalarScreen />}
</Stack.Screen>
    </Stack.Navigator>
  );
};

const MyPageNavigator = () => {
  return (
    <Tab.Navigator
     
    >
      <Tab.Screen name="Ana Sayfa" component={HomeScreen} />
      <Tab.Screen name="Kategoriler" component={CategoryScreen} />
      <Tab.Screen name="Qr Kodum" component={QrScreen} />
      <Tab.Screen name="Cüzdanım" component={WalletScreen} />
      <Tab.Screen name="Hesabım" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator; 
