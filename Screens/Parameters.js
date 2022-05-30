

import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AutomateETH from './AutomateETH';
import AutomateBTC from './AutomateBTC';
import General from './General';
import { Icon } from '@ui-kitten/components';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        backgroundColor: "transparent"
      },
      tabBarActiveTintColor: "#319795",
      tabBarInactiveTintColor: "white"

    }}
  >

    <Tab.Screen
      name="General"
      component={General}

    />

    <Tab.Screen
      name="Automate BTC"
      component={AutomateBTC}

    />

    <Tab.Screen
      name="Automate ETH"
      component={AutomateETH}

    />
  </Tab.Navigator>
)

export class Parameters extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "#1a202c", flex: 1, }}>
        <View style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: 15,
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 25, marginTop: 25
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
        <TabNavigator />
      </SafeAreaView>
    )
  }
}

export default Parameters;

