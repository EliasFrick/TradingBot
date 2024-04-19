import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from "react";
import {coinbaseConfig} from "../../config";
import {LineGraph} from "react-native-graph";
import {generateRandomGraphData,} from '../components/GrapthData'
import * as hapticFeedback from 'expo-haptics';
import ToggleGraphButton from "../components/ToggleGraphButton";
import {IToggleGraphButtonConfig, IGraphPoint} from "../types/types";
import axios from "axios";

type Props = {
    navigation: 'ChooseBlogScreen';
};

const Home: React.FC<Props> = ({navigation}) => {

    const CoinbaseAPI_KEY = coinbaseConfig.API_KEY
    const CoinbaseAPI_SECRET = coinbaseConfig.API_SECRET
    const POINTS = generateRandomGraphData(70)
    const [points, setPoints] = useState(POINTS)
    const [oneHourConfig, setOneHourConfig] = useState<IToggleGraphButtonConfig>({
        title: '1H',
        color: 'white',
        fontsize: 17
    });
    const [oneDayConfig, setOneDayConfig] = useState<IToggleGraphButtonConfig>({
        title: '1T',
        color: 'white',
        fontsize: 17
    });
    const [oneWeekConfig, setOneWeekConfig] = useState<IToggleGraphButtonConfig>({
        title: '1W',
        color: 'white',
        fontsize: 17
    });
    const [oneMonthConfig, setOneMonthConfig] = useState<IToggleGraphButtonConfig>({
        title: '1M',
        color: 'white',
        fontsize: 17
    });
    const [threeMonthConfig, setThreeMonthConfig] = useState<IToggleGraphButtonConfig>({
        title: '3M',
        color: 'white',
        fontsize: 17
    });
    const [sixMonthConfig, setSixMonthConfig] = useState<IToggleGraphButtonConfig>({
        title: '6M',
        color: 'white',
        fontsize: 17
    });
    const [oneYearConfig, setOneYearConfig] = useState<IToggleGraphButtonConfig>({
        title: '1J',
        color: 'white',
        fontsize: 17
    });
    const [maxConfig, setMaxConfig] = useState<IToggleGraphButtonConfig>({title: 'MAX', color: 'white', fontsize: 17});
    const [graphData, setGraphData] = useState<IGraphPoint[]>([])
    const [startDate, setStartDate] = useState<any>()
    const [endDate, setDndDate] = useState<any>()
    const [priceTitle, setPriceTitle] = useState<any>()

    const coinbaseUrl = 'https://api.coinbase.com/v2/prices/';
    const coinbaseUrlBTC = 'https://api.coinbase.com/v2/prices/BTC-USD/historic?period=';
    const alpacaUrl = 'https://api.alpaca.markets';

    const paragraphData: IGraphPoint[] = []

    const exampleGraphPoint = [
        {
            date: new Date('2000-01-01T00:00:00.000Z'),
            value: 20
        },
        {
            date: new Date('2000-01-02T00:00:00.000Z'),
            value: 30
        },
        {
            date: new Date('2000-01-03T00:00:00.000Z'),
            value: 40
        },
        {
            date: new Date('2000-01-04T00:00:00.000Z'),
            value: 10
        },
        {
            date: new Date('2000-01-05T00:00:00.000Z'),
            value: 5
        }
        ,
        {
            date: new Date('2000-01-06T00:00:00.000Z'),
            value: 15
        }
        ,
        {
            date: new Date('2000-01-07T00:00:00.000Z'),
            value: 2
        }
    ];

    const updatePriceTitle = (p: any) => {
        setPriceTitle(Number(p.value))
    }

    const resetPriceTitle = (p: any) => {
        // console.log("End")
        // console.log(p)
    }

    const selectRange = (range: string) => {
        findAndResetFontSize()
        switch (range) {
            case "oneHour": {
                setOneHourConfig(prevConfig => ({
                    ...prevConfig,
                    fontsize: 20,
                    color: 'red'
                }));
                getBtcPrice("hour")
                break;
            }
            case "oneDay": {
                setOneDayConfig(prevConfig => ({
                    ...prevConfig,
                    fontsize: 20,
                    color: 'red'
                }));
                getBtcPrice("day")
                break;
            }
            case "oneWeek": {
                setOneWeekConfig(prevConfig => ({
                    ...prevConfig,
                    fontsize: 20,
                    color: 'red'
                }));
                getBtcPrice("week")
                break;
            }
            case "oneMonth": {
                setOneMonthConfig(prevConfig => ({
                    ...prevConfig,
                    fontsize: 20,
                    color: 'red'
                }));
                getBtcPrice("month")
                break;
            }
            case "threeMonth": {
                setThreeMonthConfig(prevConfig => ({
                    ...prevConfig,
                    fontsize: 20,
                    color: 'red'
                }));
                break;
            }
            case "sixMonth": {
                setSixMonthConfig(prevConfig => ({
                    ...prevConfig,
                    fontsize: 20,
                    color: 'red'
                }));
                break;
            }
            case "oneYear": {
                setOneYearConfig(prevConfig => ({
                    ...prevConfig,
                    fontsize: 20,
                    color: 'red'
                }));
                // pullData("BTC", convertToUnixTimestamp(String(new Date())), convertToUnixTimestamp(String(new Date().getFullYear() - 1)))
                getBtcPrice("year")
                break;
            }
            case "max": {
                setMaxConfig(prevConfig => ({
                    ...prevConfig,
                    fontsize: 20,
                    color: 'red'
                }));
                break;
            }
        }
    }

    const convertToUnixTimestamp = (timestamp: string) => {
        return String(Math.floor(new Date(timestamp).getTime() / 1000))
    }

    const resetFontSize = (setter: any, config: any) => {
        setter({...config, fontsize: 17, color: 'white'});
    };


    const findAndResetFontSize = () => {
        const configs = [
            {name: "oneHourConfig", config: oneHourConfig, setter: setOneHourConfig},
            {name: "oneDayConfig", config: oneDayConfig, setter: setOneDayConfig},
            {name: "oneWeekConfig", config: oneWeekConfig, setter: setOneWeekConfig},
            {name: "oneMonthConfig", config: oneMonthConfig, setter: setOneMonthConfig},
            {name: "threeMonthConfig", config: threeMonthConfig, setter: setThreeMonthConfig},
            {name: "sixMonthConfig", config: sixMonthConfig, setter: setSixMonthConfig},
            {name: "oneYearConfig", config: oneYearConfig, setter: setOneYearConfig},
            {name: "maxConfig", config: maxConfig, setter: setMaxConfig}
        ];

        const results = configs.filter(({config}) => config.fontsize === 20);
        results.forEach(({setter, config}) => {
            resetFontSize(setter, config);
        });

        return results.map(({name}) => name);
    };

    const pullData = (data: string, startDate: string, endDate: string) => {
        const apiCallRul = `${coinbaseUrl}${data}-USD/historic?start=${startDate}&end=${endDate}`
        console.log(apiCallRul)
        axios.get(apiCallRul)
            .then(response => {
                // Handle successful response
                console.log('Response:', JSON.stringify(response.data.data.prices));
                // console.log("date: " + new Date(Number(response.data.data.prices[307].time) * 1000))
            })
            .catch(error => {
                // Handle error
                console.error('Error:', error);
            });
    }

    const getBtcPrice = (period: string) => {
        const apiCallBTC = `${coinbaseUrlBTC}${period}`
        axios.get(apiCallBTC)
            .then(response => {
                // console.log('Response:', JSON.stringify(response.data.data.prices[0]));
                createGraphData(response.data.data.prices)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    const createGraphData = (data: any) => {
        data.forEach(function (data: any) {
            paragraphData.push({date: new Date(Number(data.time) * 1000), value: data.price})
        });

        setGraphData(paragraphData)
    }

    return (
        <View style={styles.container}>
            <Text style={[{color: 'white'}]}>Bitcoin</Text>
            <Text style={[{color: 'white', fontSize: 25}]}>{priceTitle}</Text>
            {/*<View style={styles.graphContainer}>*/}
                <LineGraph
                    style={styles.miniGraph}
                    animated={true}
                    color={"#4484B2"}
                    points={graphData}
                    enablePanGesture={true}
                    panGestureDelay={0}
                    onGestureStart={() => hapticFeedback.selectionAsync()}
                    onPointSelected={(p) => updatePriceTitle(p)}
                    onGestureEnd={() => resetPriceTitle(points)}
                    // SelectionDot={SelectionDot}
                />
            {/*</View>*/}
            <View style={styles.ToggleGraphButtonContainer}>
                <ToggleGraphButton onPress={() => selectRange('oneHour')} title={oneHourConfig.title}
                                   color={oneHourConfig.color} fontsize={oneHourConfig.fontsize}/>
                <ToggleGraphButton onPress={() => selectRange('oneDay')} title={oneDayConfig.title}
                                   color={oneDayConfig.color} fontsize={oneDayConfig.fontsize}/>
                <ToggleGraphButton onPress={() => selectRange('oneWeek')} title={oneWeekConfig.title}
                                   color={oneWeekConfig.color} fontsize={oneWeekConfig.fontsize}/>
                <ToggleGraphButton onPress={() => selectRange('oneMonth')} title={oneMonthConfig.title}
                                   color={oneMonthConfig.color} fontsize={oneMonthConfig.fontsize}/>
                <ToggleGraphButton onPress={() => selectRange('threeMonth')} title={threeMonthConfig.title}
                                   color={threeMonthConfig.color} fontsize={threeMonthConfig.fontsize}/>
                <ToggleGraphButton onPress={() => selectRange('sixMonth')} title={sixMonthConfig.title}
                                   color={sixMonthConfig.color} fontsize={sixMonthConfig.fontsize}/>
                <ToggleGraphButton onPress={() => selectRange('oneYear')} title={oneYearConfig.title}
                                   color={oneYearConfig.color} fontsize={oneYearConfig.fontsize}/>
                <ToggleGraphButton onPress={() => selectRange('max')} title={maxConfig.title} color={maxConfig.color}
                                   fontsize={maxConfig.fontsize}/>
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
    },
    diagramContainer: {},
    miniGraph: {
        width: '100%',
        height: '80%',
        marginLeft: 5,
    },
    controlsScrollView: {
        flexGrow: 1,
        paddingHorizontal: 15,
    },
    controlsScrollViewContent: {
        justifyContent: 'center',
    },
    ToggleGraphButtonContainer: {
        flex: 1,
        flexDirection: "row",
        // width: '100%',
        // height: '100%'
    },
    graphContainer: {
        width: '90%',
        height: '100%'
    }
});
