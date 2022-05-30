
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native'
import React, { Component } from 'react'
import { Icon } from "@ui-kitten/components";
import StrategieCard from '../Components/StrategieCard';
import LinearGradient from 'react-native-linear-gradient';

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export class Profile extends Component {
    render() {
        return (
            <SafeAreaView style={{
                backgroundColor: "#1a202c",
                flex: 1, position: "relative",
            }}>

                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 25,
                    position: "absolute",
                    top: 25,
                    zIndex: 2,
                    width: "100%"

                }}>
                    <TouchableOpacity
                        activeOpacity={.8}
                        style={{
                            borderRadius: 50,
                            overflow: "hidden",
                            width: 35, height: 35,
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            backgroundColor: "#1a202c"
                        }}
                        onPress={() => this.props.navigation.toggleDrawer()}
                    >

                        <Icon name="menu"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: "white",
                                alignSelf: 'center',
                            }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={.8}
                        style={{
                            borderRadius: 50,
                            overflow: "hidden",
                            width: 35, height: 35,
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            backgroundColor: "#1a202c"
                        }}
                    >

                        <Icon name="edit"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: "white",
                                alignSelf: 'center',
                            }} />
                    </TouchableOpacity>
                </View>

                <ScrollView>

                    <View style={{ height: HEIGHT * .3, width: "100%", position: "relative" }}>
                        {/* <View style={{
                        height: HEIGHT * .38,
                        width: HEIGHT * .38,
                        borderRadius: HEIGHT * .38,
                        backgroundColor: "rgba(254,254,254,.08)",
                        position: "absolute",
                        top: -HEIGHT * .25,
                        left: WIDTH * .25,
                        zIndex: 2.5
                    }} />
                    <View style={{
                        height: HEIGHT * .42,
                        width: HEIGHT * .42,
                        borderRadius: HEIGHT * .42,
                        backgroundColor: "rgba(254,254,254,.1)",
                        position: "absolute",
                        top: -HEIGHT * .1,
                        right: -WIDTH * .49,
                        zIndex: 3.5
                    }} /> */}
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            useAngle
                            angle={200}
                            colors={["rgba(0,0,0,.9)", "transparent",]}
                            style={{
                                position: "absolute", top: 0, left: 0,
                                width: "100%", height: "100%",
                                zIndex: 5,
                            }} />

                        <Image source={require("../images/banniere.jpg")} style={{
                            width: "100%", height: "100%"
                        }} />
                        <View style={{
                            alignSelf: "center", position: "absolute", bottom: -35, width: 100,
                            height: 100, borderWidth: 10, borderColor: "#1a202c", borderRadius: 50, zIndex: 6
                        }}>
                            <Image source={require("../images/4.jpg")} style={{
                                width: "100%", height: "100%", borderRadius: 50,
                            }} />
                        </View>
                    </View>

                    <View style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 35 }}>
                        <Text style={{ color: "white", fontSize: 24, marginBottom: 5, fontFamily: "Montserrat-Medium", }}>Mohamed Ifqirne</Text>
                        <Text style={{ color: "rgba(255,255,255,.5)", fontFamily: "Montserrat-Medium", }}>mohamdIfqirne@gmail.com</Text>
                    </View>

                    <View style={{
                        display: "flex", justifyContent: "space-between", marginTop: 15,
                        alignItems: "center", flexDirection: "row", paddingVertical: 10, paddingHorizontal: 25
                    }}>
                        <View style={{
                            borderTopColor: "transparent",
                            borderLeftColor: "transparent",
                            borderBottomColor: "transparent",
                            borderRightColor: "gray",
                            borderWidth: 1, padding: 15,
                            display: "flex", alignItems: "center", justifyContent: "center", flex: 1
                        }}>
                            <Text style={{ color: "rgba(255,255,255,.5)", fontSize: 12, fontFamily: "Montserrat-Medium", }}>All Works</Text>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "Montserrat-Medium", }}>99+</Text>
                        </View>
                        <View style={{

                            borderTopColor: "transparent",
                            borderLeftColor: "transparent",
                            borderBottomColor: "transparent",
                            borderRightColor: "gray", borderWidth: 1, padding: 15,
                            display: "flex", alignItems: "center", justifyContent: "center", flex: 1
                        }}>
                            <Text style={{ color: "rgba(255,255,255,.5)", fontSize: 12, fontFamily: "Montserrat-Medium", }}>Followers</Text>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "Montserrat-Medium", }}>12k</Text>
                        </View>
                        <View style={{

                            borderTopColor: "transparent",
                            borderLeftColor: "transparent",
                            borderBottomColor: "transparent",
                            borderRightColor: "gray",
                            padding: 15,
                            display: "flex", alignItems: "center", justifyContent: "center", flex: 1
                        }}>
                            <Text style={{ color: "rgba(255,255,255,.5)", fontSize: 12, fontFamily: "Montserrat-Medium", }}>Following</Text>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "Montserrat-Medium", }}>23</Text>
                        </View>
                    </View>

                    <View style={{ paddingHorizontal: 25, marginTop: 45 }}>
                        <Text style={{ color: "white", fontSize: 18, fontFamily: "Montserrat-Medium", }}>Mes Stratégies</Text>
                    </View>

                    <View style={{ marginTop: 10 }}>
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

                    <View style={{ paddingHorizontal: 25, marginTop: 45 }}>
                        <Text style={{ color: "white", fontSize: 18, fontFamily: "Montserrat-Medium", }}>Strategies suivies</Text>
                    </View>

                    <View style={{ marginTop: 10 }}>
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
                    <View style={{ marginBottom: 30 }} />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Profile;
