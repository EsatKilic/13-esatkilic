import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyText = ({ children, style = {} }) => {
    return <Text style={[styles.defaultStyle, style]}>{children}</Text>;
  };
  
  export default MyText;
  
  const styles = StyleSheet.create({
    defaultStyle: { fontFamily: "DMSans-Regular", fontSize: 16 },
  });