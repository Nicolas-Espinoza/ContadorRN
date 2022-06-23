import React, { useState } from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet } from "react-native"
import Fab from "../components/Fab";

export const ContadorScreen = () => {
    const [contador, setContador] = useState(0);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Contador: {contador}
            </Text>
            <Fab
                title="+1"
                onPress={() => setContador(contador + 1)}
                position="br"
            />
            <Fab
                title="-1"
                onPress={() => setContador(contador - 1)}
                position="bl"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        color: 'black'
    },

})

export default ContadorScreen;