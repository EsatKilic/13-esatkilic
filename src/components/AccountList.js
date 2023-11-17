import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const AccountList = () => {
  return (
    <View>
        <View style={styles.line}></View>
        <View style={styles.left}>
        <View style={styles.icon}>
        <MaterialCommunityIcons name="bell-ring" size={24} color="black" />
      <Text>Bildirimlerim</Text>
      </View>
      <View style={styles.right}>
      <Text style={styles.seven}>7</Text>
      <AntDesign name="right" size={24} color="black" />
      </View>
      </View>
      <View style={styles.line}></View>
      <View style={styles.left}>
      <View style={styles.icon2}>
      <FontAwesome name="star" size={24} color="black" />
      <Text>Listelerim</Text>
      </View>
      <View style={styles.right}>
      <AntDesign name="right" size={24} color="black" />
      </View>
      </View>
      <View style={styles.line}></View>
      <View style={styles.left}>
      <View style={styles.icon3}>
      <FontAwesome name="phone" size={24} color="black" />
      <Text>Müşteri Hizmetleri</Text>
      </View>
      <View style={styles.right}>
      <AntDesign name="right" size={24} color="black" />
      </View>
      </View>
      <View style={styles.line}></View>
    </View>
  )
}

export default AccountList

const styles = StyleSheet.create({
    icon:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    icon2:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon3:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        height: 1,
        backgroundColor: 'gray',
        marginVertical: 10, // Üst ve alt boşlukları ayarlar
      },
      left:{
        padding:5,
        flexDirection: 'row',
      },
      right:{
        flexDirection: 'row',
        position: 'absolute',
        right: 10, 
        alignItems: 'center',
      },
      seven:{
        backgroundColor: 'dodgerblue',
        borderRadius: 40,
        padding: 16,
        color: "white",
        fontSize: 8, // Yazı boyutunu ayarlar
        
      },
    
})