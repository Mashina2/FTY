import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

import { BlurView } from '@react-native-community/blur'
import LinearGradient from 'react-native-linear-gradient'
import DropShadow from 'react-native-drop-shadow'
import { color } from 'react-native-reanimated'

const { width: windowWidth, height: windowHeight } = Dimensions.get("window")


const CustomGradBlurCard = ({ colors = ["#4fd1c5", "#1d4044"], title = "", euroPrice = 0, coinPrice = 0, bit = "" }) => {
    return (
        <DropShadow style={styles.shadowPropBlack}>
            <View style={{ borderRadius: 10, position: "relative", height: 150, width: "100%" }}>
                {/* <Image source={require("../images/4.jpg")} style={[styles.img, styles.abs]} /> */}
                <View style={{ borderRadius: 10, overflow: "hidden", width: "100%" }}>
                    {/* <BlurView
                        blurType='light'
                        overlayColor='transparent'
                        blurAmount={20}
                        style={{
                            width: "100%", height: "100%", alignItems: "center",
                            justifyContent: "center", position: "relative"
                        }}> */}

                        <LinearGradient
                            style={{
                                height: "100%", width: "100%", position: "relative"
                            }}
                            useAngle={true}
                            angle={250}
                            angleCenter={{ x: 0.5, y: 0.5 }}
                            colors={colors}>
                            <View style={{
                                position: "absolute", left: 0, top: 0, right: 0, bottom: 0,
                                width: "100%", height: "100%", alignItems: "flex-start", justifyContent: "center",
                                zIndex: 2, paddingHorizontal: 15
                            }}>
                                <Text style={{
                                    color: "white", fontSize: 19, lineHeight: 20,
                                    fontFamily: "Montserrat-Medium"
                                }}>{euroPrice} £</Text>
                                <Text style={{
                                    color: "white", fontSize: 22, lineHeight: 40,
                                    fontFamily: "Montserrat-Medium", marginBottom: 5
                                }}>{coinPrice} {bit}</Text>
                                <Text style={{
                                    color: "rgb(215, 218, 219)",
                                    fontFamily: "Montserrat-Medium", lineHeight: 15
                                }}>{title ? title : "Default Text"}</Text>
                            </View>
                        </LinearGradient>
                    {/* </BlurView> */}
                </View>
            </View>
        </DropShadow>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(55,55,55,.5)",
        width: 200, height: 200, borderRadius: 10, borderWidth: .5, padding: 15,
    },
    boxBlur: {
        position: "absolute", top: 0, bottom: 0,
        left: 0, right: 0, zIndex: -1, borderRadius: 15,
    },
    img: {
        width: 85,
        height: 85,
        borderRadius: 85,
    },
    abs: {
        position: "absolute", top: "-14%", alignSelf: "center", zIndex: 1,
        justifyContent: "center", alignItems: "center",
    },
    textCenter: {
        textAlign: "center"
    },
    textG: {
        color: "rgba(255,255,255,.5)",
        marginTop: 5
    },
    textUpper: {
        textTransform: "uppercase"
    },
    textW: {
        color: "white"
    },
    textCap: {
        textTransform: "capitalize"
    },
    shadowPropBlack: {
        shadowColor: 'rgb(0, 0, 0)',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 10,
        shadowRadius: 10,
        marginTop: 10
    },
})

export default CustomGradBlurCard;