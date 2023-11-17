import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'

const WalletBar = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AntDesign name="questioncircleo" size={24} color="black" />
        <Text style={styles.walletText}>Cüzdanım</Text>
        <Text style={styles.historyText}>İşlem Geçmişi</Text>
      </View>
    </SafeAreaView>
  )
}

export default WalletBar

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    paddingVertical: 16,
    borderWidth: 0.2,
    borderColor: 'cream',
    alignItems: 'center', // Dikey hizalama (ikon, "Cüzdanım", "İşlem Geçmişi" ortalanır)
  },
  walletText: {
    marginLeft: 10, // İkon ile "Cüzdanım" arasındaki boşluğu ayarlar
  },
  historyText: {
    marginLeft: 'auto', // "İşlem Geçmişi" yazısını en sağa taşır
  }
})
