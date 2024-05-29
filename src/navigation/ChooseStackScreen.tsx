import { createStackNavigator } from "@react-navigation/stack";
import Wallet from "../screens/Wallet";
import Home from "../screens/Home";
import Analyse from "../screens/Analyse";
import TradingBot from "../screens/TradingBot";
import ProfileSettings from "../screens/ProfileSettings";

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
            <Stack.Screen
                name="ProfileSettingsScreen"
                component={ProfileSettings}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export function TradingBotScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="TradingBotScreen"
                component={TradingBot}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export function AnalyseScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="AnalyseScreen"
                component={Analyse}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
