import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            {/*RELATIVA*/}
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
        </View>
    )
}
//position absolute es para que se desplase de acuerdo al padre
//position relative es para posicionarse de acuerdo en que parte quedo el objeto
//...StyleSheet.absoluteFillObject es para estirar un elemento en toda la pantalla
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        top: 110,
        left: 50
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white'
    }
});