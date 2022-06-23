import React from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

//importamos para las dimensiones
import { Dimensions } from 'react-native';

//const { width, height } = Dimensions.get('window');
//para las dimensiones reales de tam a tiempo real es mejor usar el hook
//el anterior sirve solo para casos estaticos

export const DimensionScreen = () => {

    //hook que sirve para las dimensiones en tiempo real
    const { width, height } = useWindowDimensions();
    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.cajaMorada,
                    width: width * 0.5 //50% de la pantalla
                }}></View>
                <View style={styles.cajaNaranja}></View>
                <Text>
                    W: {width} ,
                    H: {height}
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: 'red'
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        //width: '50%',
        height: '50%'
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B'
    }
});