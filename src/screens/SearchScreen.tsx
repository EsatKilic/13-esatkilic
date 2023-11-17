import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Text,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../services/firebase';
import Urunler from '../components/Urunler';
import SearchTopBar from '../components/SearchTopBar';
import { SafeAreaView } from 'react-native-safe-area-context';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);
  const [sortByModalVisible, setSortByModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState('asc');

  const handleSearch = async () => {
    try {
      const productsCollection = collection(db, 'products');
      const productsQuery = query(productsCollection, orderBy('title'));

      const productsSnapshot = await getDocs(productsQuery);
      const productsList = [];
      productsSnapshot.forEach((doc) => {
        productsList.push(doc.data());
      });
      setProducts(productsList);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSortBy = (order) => {
    setSortBy(order);
    setSortByModalVisible(false);
  };

  const renderSortByModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={sortByModalVisible}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Sırala</Text>
          <TouchableOpacity
            style={styles.modalOption}
            onPress={() => handleSortBy('asc')}
          >
            <Text>Fiyata Göre Artan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalOption}
            onPress={() => handleSortBy('desc')}
          >
            <Text>Fiyata Göre Azalan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalOption}
            onPress={() => setSortByModalVisible(false)}
          >
            <Text style={{ color: 'red' }}>İptal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return (
   
    <SafeAreaView style={styles.container}>
      {/* <Urunler /> */}
      <SearchTopBar />
      <TextInput
        style={styles.input}
        placeholder="Ara..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <Button title="Ara" onPress={handleSearch} style={styles.arabutton} />
      <TouchableOpacity
        style={styles.sortByButton}
        onPress={() => setSortByModalVisible(true)}
      >
        <Text>Sırala</Text>
      </TouchableOpacity>
      <Text style={styles.resultCount}>
        Toplam {products.length} ürün bulundu.
      </Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text>{item.title}</Text>
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.imgfire}
            />
            {/* Diğer özellikleri de ekle */}
          </View>
        )}
      />
      {renderSortByModal()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    
  },
  arabutton: {
    width: '80%',
    backgroundColor: 'deeppink',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  sortByButton: {
    width: '80%',
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  resultCount: {
    marginBottom: 10,
  },
  productItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 10,
  },
  imgfire: {
    width: 20,    // İstenilen genişlik değeri
    height: 20,   // İstenilen yükseklik değeri
    alignSelf: 'flex-start',  // Sola yasla
    borderRadius: 5,  // İstenilen köşe yuvarlama değeri
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalOption: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default SearchScreen;
