import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    StatusBar,
    View,
} from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';

const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
];

const App = () => (
    <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
            <View style={styles.chartContainer}>
                <VictoryChart width={350} theme={VictoryTheme.material}>
                    <VictoryBar data={data} x="quarter" y="earnings" />
                </VictoryChart>
            </View>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}
            />
        </SafeAreaView>
    </>
);

const styles = StyleSheet.create({
    chartContainer: {
        padding: 10,
        paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {},
});

export default App;
