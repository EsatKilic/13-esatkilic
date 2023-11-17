import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, Pressable } from 'react-native';

const PasswordLoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Şifrenizi Girin</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Şifre"
      />
     
       <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={{ color: 'white' }}>Devam</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: '80%',
    backgroundColor: '#FF1493',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
    position: 'absolute',
    bottom: 20, // Ekranın altında
  },
});

export default PasswordLoginScreen;
