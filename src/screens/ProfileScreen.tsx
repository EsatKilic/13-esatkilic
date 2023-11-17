import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AccountTop from '../components/AccountTop'
import AccountList from '../components/AccountList'

const ProfileScreen = () => {
  return (
    <View>
    <AccountTop />
    <AccountList />
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})