import React from "react";
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View, Platform } from "react-native";

interface Props {
    title: string;
    onPress: () => void;
    position?: 'br' | 'bl';
}

export const Fab = ({ title, onPress, position = 'br' }: Props) => {

    const ios = () => {
        return (
            <View style={position === 'bl' ? styles.buttonAlignLeft : styles.buttonAlignRight}>
                <TouchableOpacity
                    onPress={onPress}
                    activeOpacity={0.8}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>{title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    const android = () => {
        return (
            <View style={position === 'bl' ? styles.buttonAlignLeft : styles.buttonAlignRight}>
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
    return Platform.OS === 'android' ? android() : ios()
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    buttonAlignRight: {
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    buttonAlignLeft: {
        position: 'absolute',
        bottom: 25,
        left: 25
    }
})
export default Fab;