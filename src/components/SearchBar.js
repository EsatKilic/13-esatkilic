// SearchBar.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity,Text } from 'react-native';

const SearchBar = ({ onSearch, navigation }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
    // SearchScreen ekranına geçiş yap
    navigation.navigate('SearchScreen');
  };

  return (
    <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Ara..."
      value={searchText}
      onChangeText={(text) => setSearchText(text)}
    />
    <TouchableOpacity
      style={styles.button}
      onPress={handleSearch}
    >
      <Text style={styles.buttonText}>Ara</Text>
    </TouchableOpacity>
  </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: 'deeppink',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
  },
  
});

export default SearchBar;
