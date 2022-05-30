import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, SafeAreaView, Dimensions, FlatList, RefreshControl } from 'react-native'
import React from 'react'
import CustomGradBlurCard from '../Components/CustomGradBlurCard';
import * as Animatable from 'react-native-animatable';
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
  const [activeIndex, setActiveIndex] = React.useState(0);
  const lister = [
    { title: "Montant alloué à l'automate", bit: "BTC", prixEuro: 19.99, prixBitcoin: 0.0036093468, colors: ["orange", "orangered"] },
    { title: "Montant libre", prixEuro: 19.99, bit: "BTC", prixBitcoin: 0.0036093468, colors: ["orange", "orangered"] },
    { title: "Montant alloué à l'automate", bit: "ETH", prixEuro: 19.99, prixBitcoin: 0.0036093468, colors: ["#48bb78", "#4299e1",] },
    { title: "Montant libre", bit: "ETH", prixEuro: 19.99, prixBitcoin: 0.0036093468, colors: ["#48bb78", "#4299e1",] },
    { title: "Profit BTC", bit: "BTC", prixEuro: 19.99, prixBitcoin: 0.0036093468, colors: ["orange", "orangered"] },
    { title: "Profit ETH", bit: "ETH", prixEuro: 19.99, prixBitcoin: 0.0036093468, colors: ["#48bb78", "#4299e1",] },
  ];
  // ["#48bb78", "#4299e1",]

  _renderItem = ({ item }) => {
    return (
      <CustomGradBlurCard
        title={item.title}
        euroPrice={item.prixEuro}
        coinPrice={item.prixBitcoin}
        colors={item.colors}
        bit={item.bit}
      />
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
    <SafeAreaView style={{ backgroundColor: "#1a202c", flex: 1 }}>
      <ScrollView
        // refreshControl={
        //   <RefreshControl
        //     refreshing={refreshing}
        //   />
        // }
        contentContainerStyle={styles.container} >
        <View style={{
          flexDirection: "row", display: "flex",
          justifyContent: "space-between", alignItems: "flex-start",
          paddingHorizontal: 20,
        }}>
          <View>
            <Text style={{
              color: "white", fontSize: 20,
              fontFamily: "Montserrat-Medium",
            }}>Bonjour Mohamed</Text>
            <Text style={{
              color: "rgb(122, 127, 130)",
              fontFamily: "Montserrat-Medium", fontSize: 12
            }}>Votre tableau de bord</Text>
          </View>

          <View style={[styles.rowedBetween]}>
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
            >
              <Icon name="menu"
                style={{
                  width: 28,
                  height: 28,
                  tintColor: "white",
                }} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Profile")}
            >
              <Image source={require("../images/4.jpg")}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 50, marginLeft: 10
                }} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ paddingHorizontal: 20, marginTop: 15 }}>
          <Text style={{ color: "#38b2ac", fontSize: 16, fontFamily: "Montserrat-Medium", }}>Automate</Text>
        </View>
        <View style={{ width: "100%", height: 220, marginTop: 15, position: "relative" }}>
          <View style={{ width: "100%", height: 190, }}>
            <Carousel
              data={lister}
              renderItem={_renderItem}
              sliderWidth={WIDTH}
              itemWidth={WIDTH * .9}
              loop={true}
              autoplay={true}
              onSnapToItem={(item, index) => {
                setActiveIndex(item)
              }}
              keyExtractor={(item, index) => index.toString()}
              style={{ height: 200 }}
            />
          </View>
          {pagination()}
        </View>


        <View
          style={{ paddingHorizontal: 20 }}>

          <Text style={{ color: "white", fontSize: 16, marginBottom: 10, fontFamily: "Montserrat-Medium", }}>PNL Quotidien</Text>
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

              backgroundColor: "#4fd1c5",
              backgroundGradientFrom: "#4fd1c5",
              backgroundGradientTo: "#285e61",
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
          <Text style={{
            color: "white", fontSize: 16, marginBottom: 10,
            fontFamily: "Montserrat-Medium",
          }}>Répartition des actifs</Text>
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

              backgroundColor: "#4fd1c5",
              backgroundGradientFrom: "#4fd1c5",
              backgroundGradientTo: "#285e61",
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
        <View style={{ marginBottom: 50 }} />
      </ScrollView>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 15,
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