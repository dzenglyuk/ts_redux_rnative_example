import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/screens/Login";

export default function App() {
    return (
        <View>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Login />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
