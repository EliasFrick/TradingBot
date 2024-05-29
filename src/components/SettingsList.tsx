import {Pressable, Text, TouchableOpacityProps, View} from "react-native";

interface CustomSettingList extends TouchableOpacityProps {
    key: string
    title: string;
    onPress?: (param?: any) => void;
}

const SettingsList: React.FC<CustomSettingList> = ({title, onPress, key}) => {
    return (
        <View key={key}>
            <Pressable onPress={onPress}>
                <Text>{title}</Text>
            </Pressable>
        </View>
    )
}

export default SettingsList
