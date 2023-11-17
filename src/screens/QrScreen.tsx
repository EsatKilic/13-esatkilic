import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const QrScreen = () => {
  return (
    <SafeAreaView >
    <View style={styles.container}>
    <AntDesign name="questioncircleo" size={24} color="black" />
      <Text>Hopi QR Kodum</Text>
      </View>
      <View style={styles.qr}>
      <Text style={styles.time}>55 saniye</Text>
      <Text>içinde QR kodun yenilenecek</Text>
      <Image style={styles.pic} source={require("../../assets/qr.png")} />
      <View style={styles.copy}>
      <Text>4507 7627 27</Text>
      <Ionicons name="copy-outline" size={24} color="black" />
      </View>
      <Text style={styles.yazi}>QR kodu kasada okutarak veya internet alışverişlerinde altındaki kodu yazarak tekliflerden faydalanabilirsin.</Text>
      <View style={styles.okut}>
      <MaterialIcons name="photo-camera" size={24} color="black" />
      <Text style={styles.okutText}>QR OKUT</Text>
      <FontAwesome5 style={styles.okutsort} name="sort-up" size={24} color="black" />
      </View>
      </View>
    
    </SafeAreaView>
  )
}

export default QrScreen

const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    padding:16,
    paddingVertical: 16,
        borderWidth: 0.2, 
        borderColor: 'cream',
  },
  qr:{
    alignItems: 'center',
  },
  time:{
color: "tomato"
  },
  pic:{
    height: 200,
    width: 200,
    alignItems: 'center',
  },
  copy:{
    flexDirection: "row",
    alignItems: 'center',
  },
  yazi:{
    paddingHorizontal: 16,
  },
  okut:{
    flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'dodgerblue', // Arka plan rengi
  borderRadius: 25, // Oval çevreleme
  padding: 16, // İçeriği çevrelemek için padding ekleyebilirsiniz
  width: 200, // İçeriği genişletmek için gerekirse
  },
  okutText:{
    color: 'white', // Metin rengi
  marginLeft: 8,
  },
  okutsort:{
    justifyContent: 'center',
    
  }
})