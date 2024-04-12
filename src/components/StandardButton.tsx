import {View, Text, TouchableOpacityProps, ViewStyle, TouchableOpacity, StyleSheet, TextStyle} from "react-native";

interface CustomButtonProps extends TouchableOpacityProps {
    title: string;
    onPress?: (param?: any) => void;
    color?: string;
    fontSize?: number
}
const StandardButton: React.FC<CustomButtonProps> = ({ title, onPress, color = 'blue', style, fontSize, ...props }) => {
    const buttonStyle: ViewStyle = {
        backgroundColor: color,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    };
    const buttonText: TextStyle = {
        fontSize: fontSize,
        color: '#ffffff',
    }
    return(
        <TouchableOpacity style={styles.button} onPress={onPress} {...props}>
            <Text style={buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default StandardButton

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
    },
    button: {
        backgroundColor: '#282828',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        marginTop: '5%'
    },
    buttonText: {
        color: '#ffffff',
    },
});
