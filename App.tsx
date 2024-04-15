import {StyleSheet} from 'react-native';
import React, {useState} from "react";
import Sidebar from "./src/navigation/Sidebar";


export default function App() {
    const [btcPrice, setBtcPrice] = useState()


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
        <Sidebar/>
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
        width: "100%",
        height: "10%"
    }
});
