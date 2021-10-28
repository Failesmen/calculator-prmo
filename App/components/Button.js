import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

//Viabilizando e aplicando os temas nos botãos primarios(cinzas), secundários(mais escuro)

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  //Botão do Zero

  if(size == "double") {
    buttonStyles.push(styles.buttonDouble)
  }

  //Aplicação de estilo para os botões de outras cores, vermelho e cinza claro

  if(theme == "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if(theme == "bold") {
    buttonStyles.push(styles.buttonBold);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
        <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>

)};

//Estilo dos butaozinhos
// paleta de cores: https://color.adobe.com/pt/create/color-wheel

const styles = StyleSheet.create({
    text: {
        color: "#fff",
        fontSize: 25
    },
    textSecondary: {
        color: "#060606"
    },
    button: {
        backgroundColor: "#333333",
        flex: 1,
        height: buttonWidth - 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: buttonWidth,
        margin: 5
    },
    buttonDouble: {
        width: screen.width / 2 -10,
        flex: 0,
        alignItems: "flex-start",
        paddingLeft: 40
    },
    buttonSecondary: {
        backgroundColor: "#a6a6a6"
    },
    buttonBold: {
        backgroundColor: "#F53D35"
    },


})