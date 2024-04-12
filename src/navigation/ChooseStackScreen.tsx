import { createStackNavigator } from "@react-navigation/stack";
import Wallet from "../screens/Wallet";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export function HomeScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={Home}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export function BuyCryptoScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="WalletScreen"
                component={Wallet}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

