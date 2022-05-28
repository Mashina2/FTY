import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, SafeAreaView, Dimensions, FlatList } from 'react-native'
import React from 'react'
import CustomGradBlurCard from '../Components/CustomGradBlurCard';

import { Icon } from '@ui-kitten/components';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;


const Home = ({ navigation }, props) => {
  // const [imgActive, setImgActive] = React.useState(0);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const lister = [0, 1, 2, 3, 4, 5];

  const onChange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
      if (slide != imgActive) {
        setImgActive(slide)
      }
    }
  }

  _renderItem = ({ item, index }) => {
    return (
      // <View style={{ height: 200, width: "100%", backgroundColor: "red" }}>
      //   <Text>Bien</Text>
      // </View>
      <CustomGradBlurCard />
    );
  }

  const pagination = () => {
    return (
      <Pagination
        dotsLength={lister.length}
        activeDotIndex={activeIndex}
        containerStyle={{
          backgroundColor: 'transparent',
          position: "absolute", bottom: 0, left: 0, width: "100%"
        }}
        dotStyle={{
          width: 6,
          height: 6,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)'
        }}
        inactiveDotStyle={{
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  return (
    <SafeAreaView style={{ backgroundColor: "rgb(8,8,8)", flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container} >
        <View style={{
          flexDirection: "row", display: "flex",
          justifyContent: "space-between", alignItems: "flex-start",
          paddingHorizontal: 20,
        }}>
          <View>
            <Text style={{ color: "white", fontSize: 25 }}>Hi Superman</Text>
            <Text style={{ color: "rgb(122, 127, 130)" }}>Your Portolio looks great today</Text>
          </View>
          <View style={[styles.rowedBetween]}>
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}>
              <Icon name="menu"
                style={{
                  width: 28,
                  height: 28,
                  tintColor: "white",
                }} />
            </TouchableOpacity>
            <TouchableOpacity >
              <Image source={require("../images/4.jpg")}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 50, marginLeft: 10
                }} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ width: "100%", height: 220, marginTop: 20, position: "relative" }}>
          <View style={{ width: "100%", height: 190, }}>
            <Carousel
              // ref={(c) => { this._carousel = c; }}
              // layout={'tinder'}
              // layoutCardOffset={`9`
              data={lister}
              renderItem={_renderItem}
              sliderWidth={WIDTH}
              itemWidth={WIDTH * .9}
              loop={true}
              autoplay={true}
              onSnapToItem={(index) => {
                setActiveIndex(index)
              }}
              onLayout={(index) => {
                setActiveIndex(index)
              }}
              style={{ height: 200 }}
            />
          </View>
          {pagination()}
        </View>


        <View style={{ paddingHorizontal: 20 }}>

          <Text style={{ color: "white", fontSize: 20, marginBottom: 10 }}>PNL Quotidien</Text>
          <LineChart
            data={{
              // labels: ["January", "February", "March", "April", "May", "June"],
              // datasets: [
              //   {
              //     data: [
              //       Math.random() * 100,
              //       Math.random() * 100,
              //       Math.random() * 100,
              //       Math.random() * 100,
              //       Math.random() * 100,
              //       Math.random() * 100
              //     ]
              //   }
              // ]

              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [20, 45, 28, 80, 99, 43],
                  color: (opacity = 1) => `rgba(255,255,255, ${opacity})`, // optional
                  strokeWidth: 2 // optional
                }
              ],
              legend: ["PNL"] // optional
            }}
            width={WIDTH * .9} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{

              backgroundColor: "red",
              backgroundGradientFrom: "orange",
              backgroundGradientTo: "orangered",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 10,
                padding: 5
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "black"
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 10
            }}
          />
        </View>

        <View style={{ paddingHorizontal: 20, marginTop: 15 }}>
          <Text style={{ color: "white", fontSize: 20, marginBottom: 10 }}>Réparation des actifs</Text>
          <ProgressChart
            data={{
              labels: ["ETH", "BTC", "RUNEBTC", "XTZBTC", "NEARBTC"], // optional
              data: [.2, 0.4, 0.6, 0.8, 1]
            }}
            width={WIDTH * .9}
            height={220}
            strokeWidth={16}
            radius={32}
            chartConfig={{

              backgroundColor: "red",
              backgroundGradientFrom: "orange",
              backgroundGradientTo: "orangered",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 10,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "black"
              }
            }}

            style={{
              marginVertical: 8,
              borderRadius: 10
            }}
            hideLegend={false}
          />
        </View>

      </ScrollView>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 15,
    backgroundColor: "rgb(23, 23, 22)",
    // flex: 1
  },

  rowedBetween: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 5
  },
})

export default Home;