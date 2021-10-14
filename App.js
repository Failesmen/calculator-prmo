import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}>
    <Text>Sardonyx Animais</Text>
    
      <Text>Alce</Text>
      <Image source={require('./assets/Alce.jpg')} style={styles.mamiferos}/>
      
      <Text>Baleia Azul</Text>
      <Image source={require('./assets/Baleia_azul.jpg')} style={styles.mamiferos}/>

      <Text>Coala</Text>
      <Image source={require('./assets/coala.jpg')} style={styles.mamiferos}/>

      <Text>Doninha</Text>
      <Image source={require('./assets/Doninha.jpg')} style={styles.mamiferos}/>

      <Text>Esquilo</Text>
      <Image source={require('./assets/Esquilo.jpg')} style={styles.mamiferos}/>

      <Text>Gambá</Text>
      <Image source={require('./assets/Gambá.jpg')} style={styles.mamiferos}/>

      <Text>Panda</Text>
      <Image source={require('./assets/Panda.jpg')} style={styles.mamiferos}/>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },

  mamiferos: {
    width: '100%',
    height: 400,
    marginBottom: 10
  }
});
