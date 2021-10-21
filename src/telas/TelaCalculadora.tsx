import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../componentes/tema'
import { BotaoCalc } from '../componentes/BotaoCalc'


export const TelaCalculadora = () => {
    return (
        <View style={styles.caluladoraContainer}>
            <Text style={styles.resultadoMenor}>2,000.00</Text>
            <Text style={styles.resultado}>1,000.00</Text>

            <View style={styles.fila}>
                <BotaoCalc texto=" C" cor="#989898" />
                <BotaoCalc texto="+/-" cor="#989898" />
                <BotaoCalc texto="del" cor="#989898" />
                <BotaoCalc texto="  /" cor="#FF3939" />
            </View>
            <View style={styles.fila}>
                <BotaoCalc texto="  7" />
                <BotaoCalc texto="  8"/>
                <BotaoCalc texto="  9" />
                <BotaoCalc texto="  X" cor="#FF3939" />
            </View>
            <View style={styles.fila}>
                <BotaoCalc texto="  4" />
                <BotaoCalc texto="  5"/>
                <BotaoCalc texto="  6" />
                <BotaoCalc texto="  -" cor="#FF3939" />
            </View>
            <View style={styles.fila}>
                <BotaoCalc texto="  0"/>
                <BotaoCalc texto="  ."/>
                <BotaoCalc texto=" =" cor="#FF3939" />
            </View>
            
            
        </View>
    )
}
 
