import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigator from './src/routes/MainNavigator'; // Değişiklik burada
import { Provider } from 'react-redux';
import store from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <MainNavigator /> 
    </NavigationContainer>
    </Provider>
  );
}
