import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "../components/Button";
import { TextField } from "../components/TextField";

import { useSelector, useDispatch } from "react-redux";
import { ApplicationState, onLogin } from "../redux";
import { useNavigation } from "../utils";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const { navigate } = useNavigation();

    const { user, error } = useSelector(
        (state: ApplicationState) => state.userReducer
    );
    const { token } = user;

    useEffect(() => {
        if (token) {
            navigate("Home");
        }
    }, [user]);

    const onPressLogin = () => {
        dispatch(onLogin(email, password));
        setEmail("");
        setPassword("");
    };

    return (
        <View style={styles.container}>
            <View style={styles.navigation}></View>
            <View style={styles.body}>
                <View style={styles.loginView}>
                    <TextField
                        placeholder="Email..."
                        value={email}
                        onChangeText={(email: string) => {
                            setEmail(email);
                        }}
                    />
                    <TextField
                        placeholder="Password..."
                        value={password}
                        onChangeText={(password: string) => {
                            setPassword(password);
                        }}
                        isSecure={true}
                    />
                    <Button text="Login" onPress={onPressLogin} />
                    {token && <View>Success</View>}
                </View>
            </View>
            <View style={styles.footer}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navigation: {
        flex: 2,
    },
    body: {
        flex: 9,
        justifyContent: "center",
    },
    loginView: {
        marginHorizontal: 20,
        height: 400,
        justifyContent: "center",
    },
    footer: {
        flex: 1,
    },
});

export default Login;
