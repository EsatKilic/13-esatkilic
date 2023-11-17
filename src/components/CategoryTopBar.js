import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

const CategoryTopBar = () => {
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
    
    </View>
  );
};

const Markalar = () => {
  
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

export default CategoryTopBar;