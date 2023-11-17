// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import HomeScreen from '../screens/HomeScreen';

// const TopBar = () => {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Uygulama Adı</Text>
//       </View>
//     );
//   };
  
//   const styles = StyleSheet.create({
//     container: {
//       backgroundColor: 'blue', // Arka plan rengi
//       height: 60, // Yükseklik
//       justifyContent: 'center', // İçeriği dikeyde ortala
//     },
//     title: {
//       color: 'white', // Metin rengi
//       fontSize: 20, // Metin boyutu
//       textAlign: 'center', // Metin ortala
//     },
//   });
  
//   export default TopBar;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

const TopBar = () => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      
      <Tab.Navigator>
        <Tab.Screen name="hopi" component={HopiScreen} />
        <Tab.Screen name="hopishop" component={HopiShopScreen} />
      </Tab.Navigator>
    </View>
    </SafeAreaView>
  );
};

const HopiScreen = () => {
  // hopi ekranının içeriği
  return (
    <View>
    
    </View>
  );
};

const HopiShopScreen = () => {
  // hopishop ekranının içeriği
  return (
    <View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    height: 60,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default TopBar;
