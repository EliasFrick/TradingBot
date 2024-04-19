import React from "react";
import {Pressable, StyleSheet, Text, TextStyle, TouchableOpacityProps} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {IToggleGraphButtonConfig} from "../types/types";


interface CustomButtonProps extends TouchableOpacityProps {
    title: string;
    onPress?: (param?: any) => void;
    color?: string;
    fontSize?: number
}

const ToggleGraphButton: React.FC<IToggleGraphButtonConfig> = ({title, onPress, fontsize, color}) => {

    const buttonText: TextStyle = {
        fontSize: fontsize,
        color: color,
    }

    return (
        <Pressable style={styles.Container} onPress={onPress}>
            <Text adjustsFontSizeToFit={true}
                  numberOfLines={1}
                  style={buttonText}>
                {title}
            </Text>
        </Pressable>
    )
}

export default ToggleGraphButton

const styles = StyleSheet.create({
    Container: {
        margin: '3.5%'
    },
    text: {
        color: 'white',
        fontSize: 20
    },
})
