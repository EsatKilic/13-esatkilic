import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const NameBar = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box}>
        <MaterialCommunityIcons name="weather-sunny" size={24} color="black" />
      <Text>Merhaba Esat</Text>
    </View>

    <View style={styles.box2}>
  <Text style={styles.paracik} >201.50 Paracık' ın var.</Text>
  <Text>1 Paracık = 1 TL değerinde kullabilirsin.</Text>
  <TouchableOpacity >
      <Text style={styles.underline}>Paracıklarıma Git</Text>
    </TouchableOpacity>
</View>
</View>
  );
};

export default NameBar

const styles = StyleSheet.create({
    container: {
       
        flexDirection: "row",
    },
    box: {
        padding:16,
        flex: 1, // Eşit genişlikte iki kutu yapar
        borderWidth: 0.2, 
        borderRadius: 10, // Kenarları oval yapma
        borderColor: 'cream',
    },
    box2: {
        flex: 2, // Eşit genişlikte iki kutu yapar
        padding: 10, // Kutular arasındaki boşluk
        borderWidth: 0.2, // Kutu kenarlarına sınır ekleme (isteğe bağlı)
        borderRadius: 10, // Kenarları oval yapma
    borderColor: 'cream',
    },
    paracik:{
        color: "gold",
    },
    underline:{
        textDecorationLine: 'underline',
    },
});