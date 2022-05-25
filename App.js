import 'react-native-gesture-handler';

import { View, Text } from 'react-native'
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
// import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>

          {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notifications" component={Notification} />
      </Stack.Navigator> */}

          <Drawer.Navigator
            screenOptions={{
              headerShown: false
            }}
          >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Notifications" component={Notification} />
          </Drawer.Navigator>

          {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Notification} />
      </Tab.Navigator> */}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  )
}

export default App;