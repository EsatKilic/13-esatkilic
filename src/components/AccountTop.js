import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';


const AccountTop = () => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.text}>Hesabım</Text>
      <View style={styles.iconright}>
      <Ionicons name="settings-sharp" size={24} color="black" />
      </View>
    </View>
    <View style={styles.container2}>
    <Image style={styles.pic} source={require("../../assets/profileicon.png")} />
    <Text style={styles.text2}>Murat Esat KILIÇ</Text>
    <FontAwesome name="pencil" size={24} color="black" />
    </View>
    </SafeAreaView>
  );
};

export default AccountTop;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between', // "iconright" View'ı en sağa çekmek için
    alignItems: 'center',
    padding: 16,
    paddingVertical: 16,
    borderWidth: 0.2,
    borderColor: 'cream',
  },
  text: {
    // "Tüm Teklifleri Gör" yazısının stil ayarları
  },
  iconright: {
    // "iconright" View'ının stil ayarları
  },
  pic:{
    height: 50,
    width : 50,
    padding: 16,

  },
  text2:{
    padding: 16,
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
});
