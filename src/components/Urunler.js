import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';


const Tab = createMaterialTopTabNavigator();

const Urunler = () => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      
      <Tab.Navigator>
        <Tab.Screen name="SearchScreen" component={SearchScreen} />
        <Tab.Screen name="KampanyalarScreen" component={KampanyalarScreen} />
      </Tab.Navigator>
    </View>
    </SafeAreaView>
  );
};

const SearchScreen = () => {
  // hopi ekranının içeriği
  return (
    <View>
    
    </View>
  );
};

const KampanyalarScreen = () => {
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

export default Urunler;