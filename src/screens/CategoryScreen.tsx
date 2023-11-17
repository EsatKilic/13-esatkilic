import React from 'react';
import { View, Text } from 'react-native';
import MiniCategories from '../components/MiniCategories';
import CategoryTopBar from '../components/CategoryTopBar';
import SeePrices from '../components/SeePrices';
import Sections from '../components/Sections';

const CategoryScreen = ({ navigation }) => {
  return (
    <View>
     
      
      <CategoryTopBar />
      <SeePrices />
      <Sections />
      
     
    </View>
  );
};

export default CategoryScreen;
