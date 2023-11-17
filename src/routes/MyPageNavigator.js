// @ts-ignore
import { StyleSheet, Text, View } from 'react-native'
// @ts-ignore
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import QrScreen from '../screens/QrScreen';
import WalletScreen from '../screens/WalletScreen';
import ProfileScreen from '../screens/ProfileScreen';
// @ts-ignore
import MiniCategories from '../components/MiniCategories';


const Tab = createMaterialBottomTabNavigator();

const MyPageNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName;

        if (route.name === 'Ana Sayfa') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Kategoriler') {
          iconName = focused ? 'view-list' : 'view-list-outline';
        } else if (route.name === 'Qr Kodum') {
            iconName = focused ? 'qrcode' : 'qrcode-scan';
        } else if (route.name === 'Cüzdanım') {
          iconName = focused ? 'wallet' : 'wallet-outline';
        } else if (route.name === 'Hesabım') {
          iconName = focused ? 'account' : 'account-outline';
        }

        // Return your custom tab bar icon here
        return (
         
          // @ts-ignore
          <MaterialCommunityIcons name={iconName} size={24} color={focused ? 'blue' : 'gray'} />
        );
      },
    })}
    // @ts-ignore
    tabBarOptions={{
      activeTintColor: 'blue', // Seçili sekmenin rengi
      inactiveTintColor: 'gray', // Seçili olmayan sekmelerin rengi
    }}
  >
    <Tab.Screen name="Ana Sayfa" component={HomeScreen} />
    <Tab.Screen name="Kategoriler" component={CategoryScreen} />
    <Tab.Screen name="Qr Kodum" component={QrScreen} />
    <Tab.Screen name="Cüzdanım" component={WalletScreen} />
    <Tab.Screen name="Hesabım" component={ProfileScreen} />
  </Tab.Navigator>
);
};

export default MyPageNavigator;