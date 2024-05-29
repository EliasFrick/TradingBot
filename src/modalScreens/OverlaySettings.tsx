import {Pressable, StyleSheet, Text, TouchableOpacityProps, View} from 'react-native';
import StandardButton from "../components/StandardButton";
import React, {useState} from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

interface CustomOverlayProps extends TouchableOpacityProps {
    onPress?: (param?: any) => void;
    color?: string;
}
const OverlaySettings: React.FC<CustomOverlayProps> = ({ onPress, color = 'blue'}) => {
    return (
        <View style={styles.container}>
            <Text style={[{color: 'white'}]}>Overlay Settings</Text>
        </View>
    );
}

export default OverlaySettings;


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
