import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

type ButtonProps = {
    text: string,
    onPress: () => void
};

export const Button = ({ text, onPress }: ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

Button.defaultProps = {
    text: "Press",
    onPress: () => {console.log("works")}
};

const styles = StyleSheet.create({
    button: {
        height: 50,
        borderRadius: 30,
        backgroundColor: "#295FED",
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 20,
        color: "#FFF"
    }
});
