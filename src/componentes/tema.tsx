import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    fundo: {
        flex: 1,
        backgroundColor: 'black',
    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
    },

    caluladoraContainer:{
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'flex-end',
    },
    resultadoMenor: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right',
    
    },

    butao: {
        height: 80,
        width: 80,
        backgroundColor: '#202020',
        borderRadius: 100,
        justifyContent: 'center', 
        marginHorizontal: 10
    },

    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10

    },

    butaoTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300'


    },
    butaoMaior: {
        width: 160
    }

});
