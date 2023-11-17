import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchScreen from '../screens/SearchScreen';
import KampanyalarScreen from '../screens/KampanyalarScreen';

const Tab = createMaterialTopTabNavigator();

const SearchTopBar = () => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      
      <Tab.Navigator>
        <Tab.Screen name="teklifler" component={Teklifler} />
        <Tab.Screen name="markalar" component={Markalar} />
      </Tab.Navigator>
    </View>
    </SafeAreaView>
  );
};

const Teklifler = () => {

  return (
    <View>
    <KampanyalarScreen/>
    </View>
  );
};

const Markalar = () => {
  
  return (
    <View>
      <SearchScreen/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    height:100,
    justifyContent: 'center',
    alignItems:'center',
    flex: 0, 
  },
  title: {
    color: 'pink',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default SearchTopBar;