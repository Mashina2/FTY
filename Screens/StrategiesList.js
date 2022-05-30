import { View, Text, SafeAreaView, ScrollView, RefreshControl, Image } from 'react-native'
import React, { Component } from 'react'
import StrategieCard from '../Components/StrategieCard'
import { FlatList, TouchableOpacity, TouchableWithoutFeedback, } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { Input, Icon } from '@ui-kitten/components'

export class StrategiesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      refreshing: ""
    }

  }

  renderIcon = (props) => {
    return (<TouchableOpacity>
      <Icon {...props} name="search" />
    </TouchableOpacity>)
  }

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "#1a202c", flex: 1 }}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.staterefreshing}
              onRefresh={() => {
                console.log("Working");
              }}
            />
          }
          style={{ paddingTop: 25 }}>
          <View style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: 15,
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 25
          }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name="menu"
                style={{
                  width: 28,
                  height: 28,
                  tintColor: "white",
                }} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Profile")}
            >
              <Image source={require("../images/4.jpg")}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 50, marginLeft: 10
                }} />
            </TouchableOpacity>
          </View>
          <View style={{ paddingHorizontal: 25 }}>
            <Text style={{
              color: "white", fontSize: 16,
              fontFamily: "Montserrat-Medium",
            }}>Strategies suivies</Text>
          </View>
          <View style={{ marginTop: 10, }}>
            <FlatList
              snapToAlignment="center"
              bounces={true}
              bouncesZoom={true}
              decelerationRate={"fast"}
              horizontal
              contentContainerStyle={{ paddingHorizontal: 25 }}
              data={[1, 2, 3, 4, 5, 6]}
              renderItem={() => {
                return (
                  <StrategieCard title="Strategy Infinity Blockchain" />
                )
              }}
            />
          </View>
          <View style={{ paddingHorizontal: 25 }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              useAngle
              angle={45}
              colors={["#48bb78", "#4299e1",]}
              style={{ padding: 15, borderRadius: 10, marginTop: 20, paddingVertical: 25 }}>
              <Text style={{
                color: "white", fontSize: 20,
                fontFamily: "Montserrat-Medium", marginBottom: 10
              }}>Suivez les meilleurs stratégies</Text>
              <Text style={{
                color: "white", fontSize: 12,
                fontFamily: "Montserrat-Medium",
              }}>Gagnez quand elles gagnent en reproduisant leurs ordres automatiquement</Text>
            </LinearGradient>
          </View>

          <View style={{ marginTop: 20, paddingHorizontal: 25 }}>
            <Text style={{
              color: "white",
              fontFamily: "Montserrat-Medium",
            }}>Découvrez nos stratégies tendance</Text>
            {/* <View style={{ flex: 1, backgroundColor: "red", marginTop: 10, height: 30, display: "flex", flexDirection: "row" }}> */}

            <View style={{ marginTop: 10 }}>
              <Input
                value={this.state.search}
                placeholder="Rechercher une strategie"
                status={"control"}
                accessoryRight={this.renderIcon}
                onChangeText={nextValue => { this.setState({ search: nextValue }) }}
                style={{ backgroundColor: "transparent" }}
              />
            </View>


            <View style={{ marginTop: 30, }}>
              <FlatList
                numColumns={2}
                data={[1, 2, 3, 4, 5, 6]}
                renderItem={() => {
                  return (
                    <StrategieCard title="Strategy Infinity Blockchain" />
                  )
                }}
              />
            </View>
            {/* </View> */}
          </View>
          <View style={{ marginBottom: 80 }} />
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default StrategiesList;
