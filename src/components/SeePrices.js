import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const SeePrices = () => {
  return (
    <TouchableOpacity>
    <View style={styles.container}>
      <Ionicons name="pricetag-outline" size={24} color="black" />
      <Text style={styles.text}>Tüm Teklifleri Gör</Text>
      <View style={styles.iconright}>
        <AntDesign name="right" size={24} color="black" />
      </View>
    </View>
    </TouchableOpacity>
  );
}

export default SeePrices;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between', // "iconright" View'ı en sağa çekmek için
    alignItems: 'center',
    padding: 16,
    paddingVertical: 16,
    borderWidth: 0.2,
    borderColor: 'cream',
  },
  text: {
    // "Tüm Teklifleri Gör" yazısının stil ayarları
  },
  iconright: {
    // "iconright" View'ının stil ayarları
  }
});
