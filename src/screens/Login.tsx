import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Login = () => {
    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Login;
