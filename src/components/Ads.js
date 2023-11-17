import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Ads = () => {
  return (
    <Image style={styles.container} source={require("../../assets/ads.png")} />
  );
};

export default Ads

const styles = StyleSheet.create({
    container:{
        height: 200,
      width: 390,
    }
})