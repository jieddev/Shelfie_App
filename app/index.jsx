import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'
import Logo from '../assets/img/Ormoc_Logo-removebg-preview.png'
    
const Home = () => {
  return (
    <View style={styles.container}>

      <Image source={Logo} style={styles.img} />

      <Text style={styles.title}>Mobikad</Text>
      <Text>A Tricycle-hailing app for Ormoc City</Text>

      <Link href="/about">Go to About Page</Link>
      <Link href="/GPS/location">Go to Location Page</Link>
    
    
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        marginVertical: 20,
        width: 150,
        height: 150,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    }
})