import 'react-native-gesture-handler';

import { View, Text, SafeAreaView, LogBox } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./Screens/Home"
import Notification from "./Screens/Notification"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import Parameters from './Screens/Parameters';
import FAQ from './Screens/FAQ';
import StrategiesList from './Screens/StrategiesList';
import MyOrders from './Screens/MyOrders';
import General from './Screens/General';
import AutomateBTC from './Screens/AutomateBTC';
import AutomateETH from './Screens/AutomateETH';

LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// // const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>

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


const RootStack = createStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator
    screenOptions={{
      headerShown: false
    }}


    initialRouteName={'Home'}
  >
    <RootStack.Screen name="Home" component={Home} />
    <RootStack.Screen name="Notifications" component={Notification} />
    <RootStack.Screen name="StrategiesList" component={StrategiesList} />
    <RootStack.Screen name="FAQ" component={FAQ} />
    <RootStack.Screen name="MyOrders" component={MyOrders} />
  </RootStack.Navigator>
)

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "orange" }}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>


          <Drawer.Navigator
            screenOptions={{
              headerShown: false
            }}
          >
            <Drawer.Screen name="Tableau de bord" component={RootStackScreen} />
            <Drawer.Screen name="Paramètre" component={TabNavigator} />
            <Drawer.Screen name="Mes Ordres" component={MyOrders} />
            <Drawer.Screen name="Liste des stratégies" component={StrategiesList} />
            <Drawer.Screen name="FAQs" component={FAQ} />
          </Drawer.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </SafeAreaView>
  )
}

export default App;