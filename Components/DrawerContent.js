import React, { Component } from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    Dimensions,
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    BackHandler,
    RefreshControl,

} from "react-native";


import { Icon, Input, Divider } from "@ui-kitten/components";

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';


const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
const DrawerContent = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#1a202c", }}>
            <DrawerContentScrollView {...props}>
                <View style={{
                    backgroundColor: "#285e61", paddingVertical: 38,
                    paddingHorizontal: 15,
                    flexDirection: "row", alignItems: "center", marginTop: -5
                }}>
                    <View style={{
                        height: windowHeight * .38,
                        width: windowHeight * .38,
                        borderRadius: windowHeight * .38,
                        backgroundColor: "rgba(254,254,254,.08)",
                        position: "absolute",
                        top: -windowHeight * .25,
                        left: windowWidth * .25,
                        zIndex: -3.5
                    }} />
                    <View style={{
                        height: windowHeight * .42,
                        width: windowHeight * .42,
                        borderRadius: windowHeight * .42,
                        backgroundColor: "rgba(254,254,254,.1)",
                        position: "absolute",
                        top: -windowHeight * .1,
                        right: -windowWidth * .49,
                        zIndex: -2.5
                    }} />
                    <View
                        style={{}}>
                        <Image source={require("../images/4.jpg")}
                            style={{
                                width: 75, height: 75,
                                borderRadius: 50, borderColor: "white", borderWidth: 1.5
                            }} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 15, justifyContent: "center" }}>
                        <View style={{ alignItems: "flex-start", }}>
                            <Text style={{
                                fontSize: 16, color: "white",
                                fontFamily: "Montserrat-Medium"
                            }}>
                                Mohamed Ifqirne</Text>
                        </View>
                        <View style={{ alignItems: "flex-start", }}>
                            <Text style={{
                                fontSize: 10, color: "rgba(255,255,255,.5)",
                                fontFamily: "Montserrat-Medium"
                            }}>mohamdIfqirne@gmail.com</Text>
                        </View>
                    </View>
                </View>
                <Drawer.Section>
                    <DrawerItem
                        icon={({ }) => (
                            <Icon name="home"
                                style={{ width: 20, height: 20, tintColor: "white", fontWeight: "bold" }} />
                        )}

                        label="Tableau de bord"
                        labelStyle={{
                            color: "white",
                            fontFamily: "Montserrat-Medium"
                        }}
                        onPress={() => { props.navigation.navigate("Tableau de bord") }}
                    />
                    <DrawerItem
                        icon={({ }) => (
                            <Icon name="settings"
                                style={{ width: 20, height: 20, tintColor: "white", fontWeight: "bold" }} />
                        )}

                        label="Paramètres"
                        labelStyle={{
                            color: "white",
                            fontFamily: "Montserrat-Medium"
                        }}
                        onPress={() => { props.navigation.navigate("Paramètres") }}
                    />
                    <DrawerItem
                        icon={({ }) => (
                            <Icon name="list"
                                style={{ width: 20, height: 20, tintColor: "white", fontWeight: "bold" }} />
                        )}

                        label="Mes Ordres"
                        labelStyle={{
                            color: "white",
                            fontFamily: "Montserrat-Medium"
                        }}
                        onPress={() => { props.navigation.navigate("Mes Ordres") }}
                    />
                </Drawer.Section>

                <Drawer.Section>
                    <DrawerItem
                        icon={({ }) => (
                            <Icon name="people"
                                style={{ width: 20, height: 20, tintColor: "white", fontWeight: "bold" }} />
                        )}

                        label="Liste des stratégies"
                        labelStyle={{
                            color: "white",
                            fontFamily: "Montserrat-Medium"
                        }}
                        onPress={() => { props.navigation.navigate("Liste des stratégies") }}
                    />
                    <DrawerItem
                        icon={({ }) => (
                            <Icon name="question-mark-circle"
                                style={{ width: 20, height: 20, tintColor: "white", fontWeight: "bold" }} />
                        )}

                        label="FAQs"
                        labelStyle={{
                            color: "white",
                            fontFamily: "Montserrat-Medium"
                        }}
                        onPress={() => { props.navigation.navigate("FAQs") }}
                    />

                </Drawer.Section>

                <Drawer.Section>

                    <DrawerItem
                        icon={({ }) => (
                            <Icon name="person"
                                style={{ width: 20, height: 20, tintColor: "white", fontWeight: "bold" }} />
                        )}

                        label="Mon Profil"
                        labelStyle={{
                            color: "white",
                            fontFamily: "Montserrat-Medium"
                        }}
                        onPress={() => { props.navigation.navigate("Profile") }}
                    />
                </Drawer.Section>

            </DrawerContentScrollView>
            <Drawer.Section>
                <DrawerItem
                    icon={({ }) => (
                        <Icon name="log-out-outline"
                            style={{ width: 20, height: 20, tintColor: "#e53e3e", fontWeight: "bold" }} />
                    )}

                    label="Deconnexion"
                    labelStyle={{
                        color: "#e53e3e",
                        fontFamily: "Montserrat-Medium"
                    }}
                // onPress={() => { props.navigation.navigate("ProfileUser") }}
                />
            </Drawer.Section>
        </View>
    );
}

export default DrawerContent;