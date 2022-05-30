import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Divider } from '@ui-kitten/components';

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

const StrategieCard = ({ title }) => {
    return (
        <TouchableOpacity
            activeOpacity={.8}
            style={{
                width: WIDTH * .425, height: 250,
                borderRadius: 5, position: "relative", overflow: "hidden",
                marginVertical: 10, marginRight: 10
            }}>
            <Image source={require("../images/banniere.jpg")}
                resizeMode={"cover"}
                style={{ width: "100%", height: "100%", }} />

            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                useAngle
                angle={360}
                colors={["rgba(0,0,0,.9)", "transparent",]}
                style={{
                    position: "absolute", top: 0, left: 0,
                    width: "100%", height: "100%", padding: 15, paddingVertical: 20,
                    zIndex: 5, display: "flex", justifyContent: "flex-end"
                }}
                >
                <Text
                    numberOfLines={1}
                    style={{ color: "white", width: "82%", fontSize: 15, fontFamily: "Montserrat-Medium", }}>{title}</Text>
                <Divider style={{ backgroundColor: "gray", marginVertical: 10 }} />
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default StrategieCard;