import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Row from './components/Row';
import Button from './components/Button';

export default function App() {

  return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <View>
      <Text style={styles.value}>75</Text>
      <Row>
          <Button text="C" theme="secondary" onPress={() => alert('Eita')} />
          <Button text="+/-" theme="secondary" onPress={() => alert('Eita')} />
          <Button text="%" theme="secondary" onPress={() => alert('Eita')} />
          <Button text="/" theme="bold" onPress={() => alert('Eita')}/>
      </Row>
      <Row>
          <Button text="7" onPress={() => alert('Eita')} />
          <Button text="8" onPress={() => alert('Eita')} />
          <Button text="9" onPress={() => alert('Eita')} />
          <Button text="x" theme="bold" onPress={() => alert('Eita')} />
      </Row>
      <Row>
          <Button text="4" onPress={() => alert('Eita')} />
          <Button text="5" onPress={() => alert('Eita')} />
          <Button text="6" onPress={() => alert('Eita')} />
          <Button text="-" theme="bold" onPress={() => alert('Eita')} />
      </Row>
      <Row>
          <Button text="1" onPress={() => alert('Eita')} />
          <Button text="2" onPress={() => alert('Eita')} />
          <Button text="3" onPress={() => alert('Eita')} />
          <Button text="+" theme="bold" onPress={() => alert('Eita')} />
      </Row>
      <Row>
          <Button text="0" size="double" onPress={() => alert('Eita')} />
          <Button text="." onPress={() => alert('Eita')} />
          <Button text="=" theme="bold" onPress={() => alert('Eita')} />
      </Row>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: "flex-end",
  },
  value: {
      color: "#fff",
      fontSize: 100,
      textAlign: "right",
      marginRight: 20,
      marginBottom: 10
  }
});
