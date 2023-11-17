import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WalletBar from '../components/WalletBar'
import WalletTop from '../components/WalletTop'
import WalletMiddleBar from '../components/WalletMiddleBar'

const WalletScreen = () => {
  return (
    <View>
      <WalletBar />
      <WalletTop />
     
    </View>
  )
}

export default WalletScreen

const styles = StyleSheet.create({})