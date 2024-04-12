import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import StandardButton from "../components/StandardButton";
import React, {useState} from "react";

export default function Wallet() {
    const [btcPrice, setBtcPrice] = useState()

    const API_KEY = 'AUjeJu8BbGALqK2V'
    const API_SECRET = 'SZDg43KiHRxLZnI7dW6frDhxkjjgcF2l'


    async function getBtcPrice(url: string): Promise<any> {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setBtcPrice(data.data.amount)
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    const apiUrl = 'https://api.coinbase.com/v2/prices/BTC-USD/sell';


    return (
        <View style={styles.container}>
            <View style={styles.balanceTextContainer}>
                <Text style={styles.balanceText}>0 $</Text>
            </View>
            <View style={styles.getPriceButton}>
                <StandardButton title={"Buy Crypto"} onPress={() => getBtcPrice(apiUrl)} fontSize={20}/>
            </View>
            <Text style={[{marginTop: 20}]}>{btcPrice}</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161616',
        alignItems: 'center',
        justifyContent: 'center',
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
    }
});
