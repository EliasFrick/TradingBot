import {Pressable, StyleSheet, Text, TouchableOpacityProps, View} from 'react-native';
import StandardButton from "../components/StandardButton";
import React, {useState} from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

interface CustomTwoFactorAuthenticationProps extends TouchableOpacityProps {
    onPress?: (param?: any) => void;
    color?: string;
}
const TwoFactorAuthentication: React.FC<CustomTwoFactorAuthenticationProps> = ({ onPress, color = 'blue'}) => {
    return (
        <View style={styles.container}>
            <Text style={[{color: 'white'}]}>TwoFactorAuthentication Settings</Text>
        </View>
    );
}

export default TwoFactorAuthentication;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161616',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    topBar: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 15
    },

});
