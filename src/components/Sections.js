import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Sections = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        <Image style={styles.image} source={require('../../assets/akssection.png')} />
        <Image style={styles.image} source={require('../../assets/ayakkabisection.png')} />
      </View>
      <View style={styles.row}>
        <Image style={styles.image} source={require('../../assets/bebeksection.png')} />
        <Image style={styles.image} source={require('../../assets/booksection.png')} />
      </View>
      <View style={styles.row}>
        <Image style={styles.image} source={require('../../assets/cantasection.png')} />
        <Image style={styles.image} source={require('../../assets/foodsection.png')} />
      </View>
      <View style={styles.row}>
        <Image style={styles.image} source={require('../../assets/giyimsection.png')} />
        <Image style={styles.image} source={require('../../assets/kozsection.png')} />
      </View>
      <View style={styles.row}>
        <Image style={styles.image} source={require('../../assets/sporsection.png')} />
        <Image style={styles.image} source={require('../../assets/techsection.png')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  image: {
    width: '45%',
    height: 110,
  },
});

export default Sections;
