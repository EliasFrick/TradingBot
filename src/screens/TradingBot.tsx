import {StyleSheet, Text, View} from 'react-native';
import StandardButton from "../components/StandardButton";
import React, {useState} from "react";
import {coinbaseConfig} from "../../config";

type Props = {
    navigation: 'ChooseBlogScreen';
};

const Home: React.FC<Props> = ({navigation}) => {
    const [btcPriceEUR, setBtcPriceEUR] = useState()
    const [btcPriceUSD, setBtcPriceUSD] = useState()

    const API_KEY = coinbaseConfig.API_KEY
    const API_SECRET = coinbaseConfig.API_SECRET
    async function getBtcPrice(currency: string): Promise<any> {
        try {
            const response = await fetch(getBitcoinPriceUrl(currency));

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            if (currency === "USD") {
                setBtcPriceUSD(data.data.amount)
            } else if (currency === "EUR") {
                setBtcPriceEUR(data.data.amount)
            }

            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    const getBitcoinPriceUrl = (currency: string) => {
        return `https://api.coinbase.com/v2/prices/BTC-${currency}/sell`;

    }
    const apiUrl = 'https://api.coinbase.com/v2/prices/BTC-USD/sell';

    return (
        <View style={styles.container}>
            <Text>Bot</Text>
        </View>
    );
}

export default Home;


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
