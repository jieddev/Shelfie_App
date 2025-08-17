import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const about = () => {
  return (
    <View style={styles.container}>

    <Text style={styles.title}>This is the about page</Text>
    
    <Link href="/">Back to Home</Link>
    </View>
  )
}

export default about

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    }
})