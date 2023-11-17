import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Pressable } from 'react-native';
import firebase from 'firebase/app'; 
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from '../services/firebase';

const EmailLoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState("muratesat2812@gmail.com");
  const [password, setPassword] = useState("123456");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        alert(`Giriş başarılı: ${userCredential.user.email}`);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  // const handleSignup = () => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       console.log(userCredential);
  //       auth.languageCode = "tr";
  //       sendEmailVerification(userCredential.user)
  //         .then(() => {
  //           alert(`Doğrulama maili gönderildi: ${userCredential.user.email}`);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //           alert(error);
  //         });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       alert(error);
  //     });
  // };

  // const handleForgetPassword = () => {
  //   sendPasswordResetEmail(auth, email)
  //     .then(() => {
  //       alert(`Parola sıfırlama maili gönderildi: ${email}`);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       alert(error);
  //     });
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>E-posta Adresinizi Girin</Text>
      <TextInput
        style={styles.input}
        placeholder="E-posta Adresi"
      />
       {/* onPress={handleLogin}  */}
      <Pressable style={styles.button} onPress={() => navigation.navigate('PasswordLogin')}>
        <Text style={{ color: 'white' }} >Devam</Text>
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

export default EmailLoginScreen;
