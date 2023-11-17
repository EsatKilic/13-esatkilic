import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';
import React from 'react';

const MiniCategories = ({ navigation }) => {
  const navigateToCategoryScreen = () => {
    // CategoryScreen sayfasına yönlendirme işlemi
    navigation.navigate('CategoryScreen');
  };

  return (
    <View style={styles.container}>
      <Text >Sevebileceğin Kategoriler</Text>
      <TouchableOpacity onPress={() => navigateToCategoryScreen()}>
        <View style={styles.imageContainer}>
          <Image style={styles.image1} source={require("../../assets/giyim.png")} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToCategoryScreen()}>
        <View style={styles.imageContainer}>
          <Image style={styles.image2} source={require("../../assets/ayakkabi.png")} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MiniCategories;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Elemanları yatayda sırala
  },
  // text: {

  // },
  imageContainer: {
    height: 100,
    width: 100,
    margin: 10, // Resimler arasında boşluk bırakmak için
  },
  image1: {
    flex: 1, // Resmi genişletir
    width: null, // Resmin genişliği null olarak ayarlanır
    height: 50, // Resmin yüksekliği null olarak ayarlanır
  },
  image2: {
    flex: 1, // Resmi genişletir
    width: null, // Resmin genişliği null olarak ayarlanır
    height: 50, // Resmin yüksekliği null olarak ayarlanır
  },
});
