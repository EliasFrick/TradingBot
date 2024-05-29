import {Pressable, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import StandardButton from "../components/StandardButton";
import React, {useState} from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {StackNavigationProp} from "@react-navigation/stack";
import {TWalletScreen} from "../types/StackScreens";
import {collection, getDocs} from "firebase/firestore";
import {firestoreBitcoinWallet} from "../databse/BitcoinWallet"

type ChooseBlogScreen = StackNavigationProp<
    TWalletScreen,
    "WalletScreen"
>;


type Props = {
    navigation: ChooseBlogScreen;
};

const Wallet: React.FC<Props> = ({navigation}) => {
    const [btcPrice, setBtcPrice] = useState<any>()
    const {height, width, scale, fontScale} = useWindowDimensions();
    const [walletValue, setWalletValue] = useState<number>(0)
    const apiUrl = "https://api.coinbase.com/v2/prices/BTC-USD/historic?period="

    async function getBtcPrice(url: string): Promise<any> {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                new Error('Network response was not ok');
            }

            const data = await response.json();
            const currentPrice = data.data.prices[data.data.prices.length - 1].price
            // const currentPrice = JSON.stringify(data.data.prices[data.data.prices.length - 1].price)
            setBtcPrice(+currentPrice)
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    const navigateToProfileSettingsPage = () => {
        navigation.navigate("ProfileSettingsScreen");
    };

    async function fetchAllDocuments(collectionName: string) {
        try {
            const querySnapshot = await getDocs(collection(firestoreBitcoinWallet, collectionName));
            return querySnapshot.docs.map(doc => doc.data());
        } catch (error) {
            console.error("Fehler beim Fetchen der Dokumente:", error);
        }
    }

    fetchAllDocuments("Bitcoin_Konto")
        .then(data => {
            if (data) {
                setWalletValue( Number(btcPrice * +data[0].Value.toFixed(2)))
            }
    });


    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.topBar}>
                    <Pressable onPress={navigateToProfileSettingsPage}>
                        <Ionicons
                            style={{color: 'white'}}
                            name={"person"}
                            size={40}
                        />
                    </Pressable>
                </View>
                <View style={styles.balanceTextContainer}>
                    <Text style={styles.balanceText}>0 $</Text>
                </View>
                <Text style={[[{color: 'white'}]]}>{walletValue}</Text>
                <View style={styles.getPriceButton}>
                    <StandardButton title={"Buy Crypto"} onPress={() => getBtcPrice(apiUrl)} fontSize={20}/>
                </View>
            </View>
        </View>
    );
}

export default Wallet;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161616',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    innerContainer: {
        marginTop: 100,
        width: '100%',
        height: '100%',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    getPriceButton: {
        width: "80%",
        height: "10%"
    },
    balanceText: {
        color: 'white',
        fontSize: 30,
    },
    balanceTextContainer: {
        top: '-30%'
    },
    topBar: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 30
    },

});
