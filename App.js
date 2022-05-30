import 'react-native-gesture-handler';

import { View, Text, SafeAreaView, LogBox, Image, ActivityIndicator, Dimensions } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, } from '@react-navigation/drawer';

import * as Animatable from 'react-native-animatable';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import DrawerContent from "./Components/DrawerContent"

import Home from './Screens/Home';
import Parameters from './Screens/Parameters';
import StrategiesList from './Screens/StrategiesList';
import FAQ from './Screens/FAQ';
import Profile from './Screens/Profile';
import MyOrders from './Screens/MyOrders';

import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import ForgotPassword from './Screens/ForgotPassword';


LogBox.ignoreAllLogs();


const Drawer = createDrawerNavigator();

const RegistrationStack = createStackNavigator();

const RegistrationStackScreen = () => (
  <RegistrationStack.Navigator
    screenOptions={{
      headerShown: false
    }}


    initialRouteName={'SignIn'}
  >
    <RegistrationStack.Screen name="SignIn" component={SignIn} />
    <RegistrationStack.Screen name="SignUp" component={SignUp} />
    <RegistrationStack.Screen name="ForgotPassword" component={ForgotPassword} />
  </RegistrationStack.Navigator>
)

const App = () => {
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
  const [isLoading, setIsLoading] = React.useState(true);

  const myTranslateAnimation = {
    0: {
      opacity: 0,
      scale: 0,
      transform: [{ translateY: 30 }]
    },
    .5: {
      opacity: .5,
      transform: [{ translateY: 10 }],
      scale: 1.2
    },

    1: {
      opacity: 1,
      transform: [{ translateY: 0 }],
      scale: 1
    }
  }
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  if (isLoading) {
    return (
      <SafeAreaProvider>
        <Animatable.View
          animation="fadeIn"
          style={{ backgroundColor: "#1a202c", flex: 1, alignItems: "center" }}>
          <Animatable.View
            delay={900}
            duration={300}
            easing={"ease-out"}
            animation={"bounceIn"}
            style={{ flex: 4, justifyContent: "center", alignItems: "center" }}>
            <Text style={{
              color: "white", fontSize: 30,
              fontFamily: "Montserrat-SemiBold", marginBottom: 5,
            }}>Future Infinity</Text>
            <Text style={{
              color: "rgba(255,255,255,.8)", fontSize: 18,
              fontFamily: "Montserrat-Medium", marginBottom: 25,
            }}>Mobile</Text>

            <ActivityIndicator size="large" color="#319795" />
          </Animatable.View>
        </Animatable.View>
      </SafeAreaProvider>
    )
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1a202c" }}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaProvider>
          <NavigationContainer>
            {/* <RegistrationStackScreen /> */}
            <Drawer.Navigator
              drawerType="slide"
              screenOptions={{
                headerShown: false
              }}
              initialRouteName={"Tableau de bord"}
              drawerContent={props => <DrawerContent {...props} />}
            >
              <Drawer.Screen name="Tableau de bord" component={Home} />
              <Drawer.Screen name="Paramètres" component={Parameters} />
              <Drawer.Screen name="Mes Ordres" component={MyOrders} />
              <Drawer.Screen name="Liste des stratégies" component={StrategiesList} />
              <Drawer.Screen name="FAQs" component={FAQ} />
              <Drawer.Screen name="Profile" component={Profile} />
            </Drawer.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </ApplicationProvider>
    </SafeAreaView>
  )
}

export default App;