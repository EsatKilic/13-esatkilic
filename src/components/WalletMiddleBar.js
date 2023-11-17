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

const WalletMiddleBar = () => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      
      <Tab.Navigator>
        <Tab.Screen name="PARACIK" component={Paracik} />
        <Tab.Screen name="HEDİYE PARACIK" component={HediyeParacik} />
        <Tab.Screen name="AKARYAKIT PARACIK" component={AkaryakitParacik} />
      </Tab.Navigator>
    </View>
    </SafeAreaView>
  );
};

const Paracik = () => {
  // hopi ekranının içeriği
  return (
    <View>
    
    </View>
  );
};

const HediyeParacik = () => {
  // hopishop ekranının içeriği
  return (
    <View>
      
    </View>
  );
};

const AkaryakitParacik = () => {
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

export default WalletMiddleBar;
