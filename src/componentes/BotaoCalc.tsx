import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './tema';

interface Props {
    texto: string;
    cor?: string;
    igualado?: boolean;

}

export const BotaoCalc = ({texto, cor = '#202020', igualado =false}: Props) => {
    return (
        <View style={{
            ...styles.butao,
            backgroundColor: cor, 
            height: 80,
            width: 80,
            borderRadius: 100,
            justifyContent: 'center', 
            marginHorizontal: 10,
        }}> 
            <Text style={{
                ...styles.butaoTexto,
                color: (cor === '#989898') ? 'black' : 'white',
                padding: 10,
                fontSize: 30,
                fontWeight: '300'
                }}> {texto}</Text>
        </View>

    )
}
