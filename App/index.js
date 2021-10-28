import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import Row from './components/Row';
import Button from './components/Button';

export default function App() {
  const [ currVal, setCurrVal ] = useState("0");
  const [ operator, setOperator ] = useState(null);
  const [ prevVal, setPrevVal ] = useState(null);

  //concatenação -- ajeitar essa parte
  const pressButton = (type, value) => {
    if(type === "number") {
        setCurrVal(currVal + value);
    } 

    if(type === "operator") {
        setOperator(value);
        setPrevVal(currVal);
        setCurrVal("0");
    }

    if(type === "clear") {
        setCurrVal("0");
        setOperator(null);
        setPrevVal(null);
    }

    if(type === "posneg") {
        setCurrVal(`${parseFloat(currVal) * -1}`);
    }

    if(type === "percentage") {
        setCurrVal(`${parseFloat(currVal) * 0.01}`);
    }

    if(type === "equal") {
        const current = parseFloat(currVal);
        const previous = parseFloat(prevVal);

        if(operator === "+") {
            setCurrVal(previous + current);
            setOperator(null);
            setPrevVal(null);
        }

        if(operator === "/") {
            setCurrVal(previous / current);
            setOperator(null);
            setPrevVal(null);
        }

        if(operator === "-") {
            setCurrVal(previous - current);
            setOperator(null);
            setPrevVal(null);
        }

        if(operator === "*") {
            setCurrVal(previous * current);
            setOperator(null);
            setPrevVal(null);
        }
    }

  }

  return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <SafeAreaView>
      <Text style={styles.value}>{currVal}</Text>
      <Row>
          <Button text="C" theme="secondary" onPress={() => pressButton("clear")} />
          <Button text="+/-" theme="secondary" onPress={() => pressButton("posneg")} />
          <Button text="%" theme="secondary" onPress={() => pressButton("percentage")} />
          <Button text="/" theme="bold" onPress={() => pressButton("operator","/")} />
      </Row>
      <Row>
          <Button text="7" onPress={() => pressButton("number",7)} />
          <Button text="8" onPress={() => pressButton("number",8)} />
          <Button text="9" onPress={() => pressButton("number",9)} />
          <Button text="x" theme="bold" onPress={() => pressButton("operator","*")} />
      </Row>
      <Row>
          <Button text="4" onPress={() => pressButton("number",4)} />
          <Button text="5" onPress={() => pressButton("number",5)} />
          <Button text="6" onPress={() => pressButton("number",6)} />
          <Button text="-" theme="bold" onPress={() => pressButton("operator","-")} />
      </Row>
      <Row>
          <Button text="1" onPress={() => pressButton("number",1)} />
          <Button text="2" onPress={() => pressButton("number",2)} />
          <Button text="3" onPress={() => pressButton("number",3)} />
          <Button text="+" theme="bold" onPress={() => pressButton("operator","+")} />
      </Row>
      <Row>
          <Button text="0" size="double" onPress={() => pressButton("number",0)} />
          <Button text="." onPress={() => pressButton("number",".")} />
          <Button text="=" theme="bold" onPress={() => pressButton("equal")} />
      </Row>
    </SafeAreaView>
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
      fontSize: 80,
      textAlign: "right",
      marginRight: 20,
      marginBottom: 10
  }
});