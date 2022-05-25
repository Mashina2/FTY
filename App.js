import 'react-native-gesture-handler';

import { View, Text, SafeAreaView } from 'react-native'
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


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// // const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
// // const Tab = createMaterialTopTabNavigator();

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
            <Drawer.Screen name="HomeD" component={RootStackScreen} />
            <Drawer.Screen name="Notifications" component={Notification} />
          </Drawer.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </SafeAreaView>
  )
}

export default App;