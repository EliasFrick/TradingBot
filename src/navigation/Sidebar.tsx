import React, {useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {AnalyseScreen, BuyCryptoScreen, HomeScreen, TradingBotScreen} from "./ChooseStackScreen";

const Tab = createBottomTabNavigator();

const Sidebar: React.FC = () => {
    const [admin, setAdmin] = useState(true);

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    headerTitleAlign: "center",
                    headerShadowVisible: true,
                    tabBarIcon: ({focused, color, size}) => {
                        if (route.name === "Home") {
                            size = focused ? 35 : 25;
                            return <Ionicons name={"home"} size={size} color={color}/>;
                        } else if (route.name === "TradingBot") {
                            size = focused ? 35 : 25;
                            return <Ionicons name={"skull"} size={size} color={color}/>;
                        } else if (route.name === "Analyse") {
                            size = focused ? 35 : 25;
                            return <Ionicons name={"analytics-sharp"} size={size} color={color}/>;
                        } else if (route.name === "Wallet") {
                            size = focused ? 35 : 25;
                            return <Ionicons name={"wallet"} size={size} color={color}/>;
                        }
                    },
                    tabBarInactiveBackgroundColor: "#161616",
                    tabBarActiveBackgroundColor: "#161616",
                    tabBarActiveTintColor: "red",
                    headerTintColor: "white",
                    tabBarLabel: "",
                    tabBarLabelStyle: {
                        color: "green",
                    },
                    headerStyle: {
                        backgroundColor: "#161616",
                    },
                    tabBarStyle: {
                        backgroundColor: "#161616",
                    },
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Tab.Screen
                    name="TradingBot"
                    component={TradingBotScreen}
                />
                <Tab.Screen
                    name="Analyse"
                    component={AnalyseScreen}
                />
                <Tab.Screen
                    name="Wallet"
                    component={BuyCryptoScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Sidebar;
