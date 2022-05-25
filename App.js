import 'react-native-gesture-handler';

import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./Screens/Home"
import Notification from "./Screens/Notification"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>

      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notifications" component={Notification} />
      </Stack.Navigator> */}

      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notifications" component={Notification} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;