import {StyleSheet, Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import React from "react";

interface CustomButtonProps extends TouchableOpacityProps {
    onPress?: (param?: any) => void;
    color?: string;
    fontSize?: number;
    item: any
}
const SettingButton: React.FC<CustomButtonProps> = ({onPress, color = 'blue', style, fontSize,item , ...props}) => {
    return (
        <TouchableOpacity key={item.name} onPress={onPress} style={styles.container}>
            <Text style={styles.itemText}>{item.options.title}</Text>
        </TouchableOpacity>
    )
}

export default SettingButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#282828',
        width: '100%',
        height: '100%'
    },
    itemText: {
        color: 'white'
    }
})
