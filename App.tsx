import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { TelaCalculadora } from './src/telas/TelaCalculadora';
import { styles } from './src/componentes/tema';

const App = () => {
    return (
        <SafeAreaView style={styles.fundo}>
            <StatusBar
            backgroundColor="black"
            barStyle="light-content" 
            />
            <TelaCalculadora />
        </SafeAreaView>

    )
}
 

export default App;