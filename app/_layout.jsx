import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Colors } from '../constants/Colors'

const RootLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <Stack screenOptions={{
      headerStyle: {backgroundColor: theme.navBackground},
      headerTintColor: theme.title,
      headerTitleStyle: {fontWeight: 'bold'},
    }}>  
      <Stack.Screen name="index" options={{title : 'Home'}} />
      <Stack.Screen name="about" options={{title : 'About'}} />
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})