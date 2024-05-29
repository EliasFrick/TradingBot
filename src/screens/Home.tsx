import {StyleSheet, Text, View} from 'react-native';
import StandardButton from "../components/StandardButton";
import React, {useState} from "react";
import {coinbaseConfig} from "../../config";

type Props = {
    navigation: 'ChooseBlogScreen';
};


// DOKU DOKU DOKU DOKU DOKU
//  https://blog.finxter.com/coinbase-api-getting-historical-price-for-multiple-days-made-easy/


const Home: React.FC<Props> = ({navigation}) => {
    const [btcPriceEUR, setBtcPriceEUR] = useState()
    const [btcPriceUSD, setBtcPriceUSD] = useState()

    async function getBtcPrice(currency: string): Promise<any> {
        try {
            const response = await fetch(getBitcoinPriceUrl(currency));
            console.log("Test")
            // var client = new Client({'apiKey': API_KEY,
            //     'apiSecret': API_SECRET});

            // client.getBuyPrice({'currencyPair': 'BTC-USD'}, function(err: any, price: any) {
            //     console.log("api: " + price);
            // });

            if (!response.ok) {
                new Error('Network response was not ok');
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

    return (
        <View style={styles.container}>
            <View style={styles.balanceTextContainer}>
                <Text style={styles.balanceText}>BTC €: {btcPriceEUR}</Text>
                <Text style={styles.balanceText}>BTC $: {btcPriceUSD}</Text>
            </View>
            <View style={styles.getPriceButton}>
                <StandardButton title={"Bitcoin €"} onPress={() => getBtcPrice("EUR")} fontSize={25}/>
                <StandardButton title={"Bitcoin $"} onPress={() => getBtcPrice("USD")} fontSize={25}/>
            </View>
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
