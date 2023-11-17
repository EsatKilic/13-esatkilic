import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

const WalletTop = () => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      
      <Tab.Navigator>
        <Tab.Screen name="Paracık Bakiye" component={ParacikBakiye} />
        <Tab.Screen name="TL Bakiye" component={TLBakiye} />
        <Tab.Screen name="Kartlarım" component={Kartlarim} />
      </Tab.Navigator>
    </View>
    </SafeAreaView>
  );
};

const ParacikBakiye = () => {

  return (
   
    <View style={styles.contpara}>
    <Text style={styles.paracik}>TOPLAM PARACIK</Text>
    <View>
    <Text style={styles.tl}>201,50</Text>
    </View>
    <View style={styles.container2}>
    <Text >1,50</Text>
   
    <Text >200,00</Text>
    
    <Text >0,00</Text>
    
    </View>
    <View style={styles.container2}>
    <Text >PARACIK</Text>
    <Text >HEDİYE PARACIK</Text>
    <Text >AKARYAKIT PARACIK</Text>
    </View>
    <View style={styles.gonder}>
    <Text >PARACIK GÖNDER</Text>
    </View>
    </View>
   
  );
};

const TLBakiye = () => {
  
  return (
    <View style={styles.centeredContainer}>
      <Image style={styles.pic} source={require("../../assets/cuzdankart.png")} />
    </View>
  );
};

const Kartlarim = () => {
  
    return (
      <View>
        <Image style={styles.pic} source={require("../../assets/soncuzdan.png")} />
        <Text  style={styles.pic3}>Kredi / Banka Kartlarım</Text>
        <Text  style={styles.pic4}>Masterpass Hesabını İlişkilendir</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
   
    height: 300,
    
    
  },
  title: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "stretch",
  },
  contpara:{
    alignItems: 'center',
    marginBottom : 100,
  },
  gonder:{
    backgroundColor: 'orange', // Arka plan rengi
    borderRadius: 25,
  },
  paracik:{
    alignItems: 'center',
  },
  tl:{
    color:"orange",
  },
  pic:{
   width: 350,
   height:200,
  },
  container2:{
    color: "black",
    flexDirection: 'row', // Metinleri yatayda sıralar
    justifyContent: 'space-between', // Metinler arasında eşit boşluk bırakır
    width: '80%',
  },
  pic3:{
    fontWeight: "bold",
  },
  pic4:{
    backgroundColor: 'dodgerblue', // Arka plan rengi
    borderRadius: 25,
  }
});

export default WalletTop;