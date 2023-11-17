import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TopBar from '../components/TopBar'
import NameBar from '../components/NameBar'
import Cards from '../components/Cards'
import Ads from '../components/Ads'
import MiniCategories from '../components/MiniCategories'
import SearchBar from '../components/SearchBar'

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Navigation:', navigation); // Eklenen satır
    if (navigation) {
      navigation.navigate('SearchScreen');
    }
    // Diğer işlemleri buraya ekleyebilirsiniz
  };

  return (
    <ScrollView>
        <TopBar />
        <SearchBar onSearch={handleSearch} navigation={navigation} />

        <NameBar />
        <Cards navigation={navigation}/>
        <Ads />
        <MiniCategories navigation={navigation} />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
