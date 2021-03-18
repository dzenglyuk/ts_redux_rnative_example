import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type TextFieldProps = {
    placeholder: string;
    isSecure: boolean;
    value: string;
    onChangeText: (value: string) => void;
};

export const TextField = ({
    placeholder,
    isSecure,
    value,
    onChangeText,
}: TextFieldProps) => {
    const [isPassword, setIsPassword] = useState(false);

    useEffect(() => {
        setIsPassword(isSecure);
    }, []);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textFiled}
                placeholder={placeholder}
                onChangeText={onChangeText}
                secureTextEntry={isPassword}
                autoCapitalize="none"
                value={value}
            />
            {isSecure && (
                <TouchableOpacity
                    style={styles.showButton}
                    onPress={() => setIsPassword((isPassword) => !isPassword)}
                >
                    <Ionicons
                        name={isPassword ? "md-eye" : "md-eye-off"}
                        size={24}
                        color="black"
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

TextField.defaultProps = {
    placeholder: "Text...",
    isSecure: false,
    value: "",
    onChangeText: () => {},
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 50,
        borderRadius: 30,
        backgroundColor: "#CBCBCB",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        paddingHorizontal: 15,
    },
    textFiled: {
        flex: 1,
        height: 50,
        fontSize: 20,
        color: "#000",
    },
    showButton: {
        justifyContent: "center",
    },
    icon: {
        width: 60,
        height: 30,
    },
});
