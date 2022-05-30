import { View, Text, SafeAreaView, ScrollView, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Toggle, Divider, Icon, Input } from '@ui-kitten/components'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'

import * as Animatable from 'react-native-animatable';
import DropShadow from 'react-native-drop-shadow'
import { Slider } from '@miblanchard/react-native-slider';


const AutomateBTC = ({ navigation }) => {
    const [engagedCapital, setEngagedCapital] = React.useState(0.000524558)
    const [availableCapital, setAvailableCapital] = React.useState(0.000524558)
    const [calculatedPrice, setCalculatedPrice] = React.useState(0)
    const [cumuledChecked, setCumuledChecked] = React.useState(false)
    const [showModalAdd, setShowModalAdd] = React.useState(false)
    const [automateChecked, setAutomateChecked] = React.useState(false)
    const [stateValue, setStateValue] = React.useState(0.0)
    const [privateMail, setPrivateMail] = React.useState("CHDLJIGHRTER")


    const myTranslateAnimation = {
        0: {
            opacity: 0,
            // scale: 0,
            transform: [{ translateY: 30 }]
        },
        1: {
            opacity: 1,
            transform: [{ translateY: 0 }]
            // scale: 1,
        }
    }



    return (
        <SafeAreaView style={{ backgroundColor: "#1a202c", flex: 1, position: "relative", }}>

            {
                showModalAdd ? (
                    <Animatable.View
                        animation="fadeIn"
                        style={{
                            flex: 1, display: "flex", alignItems: "center",
                            justifyContent: "center", backgroundColor: "rgba(0,0,0,.5)",
                            position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 5
                        }}>
                        <Animatable.View
                            delay={400}
                            duration={300}
                            easing={"ease-out"}
                            animation={myTranslateAnimation}
                            style={{ backgroundColor: "#2d3748", padding: 15, width: "87%", borderRadius: 5 }}>
                            <View style={{
                                display: "flex", flexDirection: "row", alignItems: "center",

                                justifyContent: "space-between"
                            }}>
                                <Text style={{ color: "white", fontFamily: "Montserrat-Medium", fontSize: 16 }}>Ajout de capital</Text>
                                <TouchableOpacity
                                    onPress={() => setShowModalAdd(!showModalAdd)}
                                >
                                    <Icon name="close"
                                        style={{
                                            width: 20,
                                            height: 20,
                                            tintColor: "white",
                                        }} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginTop: 20 }}>
                                <View style={{ marginBottom: 10 }}>
                                    <Text style={{ color: "white", fontSize: 12, fontFamily: "Montserrat-Medium", }}>Montant disponible 0.000000000 BTC</Text>
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <Text style={{ color: "white", fontSize: 12, fontFamily: "Montserrat-Medium", }}>Montant normal acceptable 0.000000000 BTC</Text>
                                </View>

                                <Slider
                                    value={stateValue}
                                    minimumTrackTintColor={"#319795"}
                                    maximumTrackTintColor={"rgba(255,255,255,.5)"}
                                    thumbStyle={{
                                        width: 20, height: 20, borderRadius: 20, backgroundColor: "white",
                                        borderColor: "#319795", borderWidth: 3, elevation: 5
                                    }}

                                    onValueChange={value => {
                                        setStateValue(value[0].toFixed(2))
                                    }}
                                />

                                <View style={{ marginVertical: 10 }}>
                                    <Text style={{ color: "white", fontSize: 12, fontFamily: "Montserrat-Medium", }}>Estimation:  {stateValue * 100}% </Text>
                                </View>
                                <View>
                                    <View>
                                        <Text style={{ color: "white", fontSize: 12, fontFamily: "Montserrat-Medium", }}>Montant calculé</Text>
                                    </View>

                                    <View style={{ marginTop: 20 }}>
                                        <Input
                                            value={calculatedPrice.toString()}
                                            keyboardType={"number-pad"}
                                            onChangeText={nextText => {

                                                setCalculatedPrice(
                                                    isNaN(parseInt(nextText)) ? parseInt(0) :
                                                        nextText.length === 0 ? parseInt(0) : parseInt(nextText)
                                                )
                                            }}
                                            style={{ backgroundColor: "transparent" }}
                                            status={"control"}
                                        />
                                    </View>
                                </View>

                                <View style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", marginTop: 10 }}>
                                    <TouchableOpacity
                                        activeOpacity={.7}
                                        style={{ backgroundColor: "#319795", padding: 10, paddingVertical: 5, borderRadius: 5 }}>
                                        <Text style={{ fontFamily: "Montserrat-Medium", color: "white", }}>Ajouter</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Animatable.View>
                    </Animatable.View>
                ) : null
            }
            <ScrollView contentContainerStyle={{ paddingTop: 25, }}>
                <View style={{ paddingHorizontal: 25 }}>
                    <Text style={{ color: "white", fontSize: 20, fontFamily: "Montserrat-Medium", marginBottom: 10 }}>Automate BTC</Text>
                    <Divider style={{ backgroundColor: "gray", marginBottom: 10 }} />
                    <Text style={{ color: "white", fontSize: 13, fontFamily: "Montserrat-Medium", marginBottom: 10 }}>Capital à engager</Text>
                    <DropShadow style={styles.shadowPropBlack}>
                        <View style={{
                            backgroundColor: "#2d3748", padding: 18,
                            borderRadius: 5, paddingHorizontal: 15
                        }}>
                            <Text style={{ color: "white", fontFamily: "Montserrat-Medium", textAlign: "center", marginBottom: 25 }}>Capital Disponible: 0.00083257 BTC</Text>

                            <View style={{ position: "relative" }}>
                                <Text style={{ color: "white" }}>Capital à Engager</Text>
                                <TextInput
                                    value={engagedCapital.toString()}
                                    keyboardType={"number-pad"}
                                    onChangeText={nextText => {
                                        setEngagedCapital(nextText)
                                    }}
                                    style={{
                                        flex: 1, fontSize: 10, backgroundColor: "transparent",
                                        borderColor: "white", borderWidth: 1,
                                        borderRadius: 5, paddingHorizontal: 10, fontSize: 12, marginTop: 12,
                                        color: "white", height: 40
                                    }}
                                />

                                <View style={{
                                    position: "absolute", top: 0, left: 0,
                                    width: "100%", height: "100%", backgroundColor: "#2d3748", opacity: .75
                                }} />
                            </View>

                            <View style={{ marginTop: 15, position: "relative" }}>
                                <Text style={{ color: "white" }}>Capital disponible sur l'automate</Text>
                                <TextInput
                                    value={availableCapital.toString()}
                                    keyboardType={"number-pad"}
                                    onChangeText={nextText => {
                                        setAvailableCapital(nextText)
                                    }}
                                    style={{
                                        flex: 1, fontSize: 10, backgroundColor: "transparent",
                                        borderColor: "white", borderWidth: 1,
                                        borderRadius: 5, paddingHorizontal: 10, fontSize: 15, marginTop: 12,
                                        color: "white", height: 40
                                    }}
                                />
                                <View style={{
                                    position: "absolute", top: 0, left: 0,
                                    width: "100%", height: "100%", backgroundColor: "#2d3748", opacity: .75
                                }} />
                            </View>

                            <View style={{
                                marginTop: 20, display: "flex",
                                alignItems: "flex-end", justifyContent: "center"
                            }}>
                                <TouchableOpacity
                                    activeOpacity={.7}
                                    style={{ backgroundColor: "#319795", padding: 10, paddingVertical: 5, borderRadius: 5 }}>
                                    <Text style={{ fontFamily: "Montserrat-Medium", color: "white" }}>Configurer les automates</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </DropShadow>

                    <View style={{
                        display: "flex", flexDirection: "row", marginTop: 20, alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <View style={{ display: "flex", alignItems: "flex-start" }}>
                            <TouchableOpacity onPress={() => setCumuledChecked(!cumuledChecked)}>
                                <Text style={{
                                    color: "white", fontSize: 14, marginBottom: 10,
                                    fontWeight: "600"
                                }}>Activer l'effet cumulé</Text>
                            </TouchableOpacity>
                            <Toggle
                                status={"success"}
                                style={{ transform: [{ scale: .85 }], }}
                                checked={cumuledChecked}

                                onChange={nextChecked => {
                                    setCumuledChecked(nextChecked)
                                }}>
                            </Toggle>
                        </View>

                        <View style={{ display: "flex", alignItems: "flex-end" }}>
                            <TouchableOpacity onPress={() => setAutomateChecked(!automateChecked)}>
                                <Text style={{ color: "white", fontSize: 14, marginBottom: 10, fontWeight: "600" }}>Activer l'automate</Text>
                            </TouchableOpacity>
                            <Toggle
                                status={"success"}
                                style={{ transform: [{ scale: .85 }], }}
                                checked={automateChecked}

                                onChange={nextChecked => {
                                    setAutomateChecked(nextChecked)
                                }}>
                            </Toggle>
                        </View>


                    </View>

                    <DropShadow style={[styles.shadowPropBlack, { marginTop: 20 }]}>
                        <View style={{
                            backgroundColor: "#2d3748", padding: 18,
                            borderRadius: 5, paddingHorizontal: 15
                        }}>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={{ fontSize: 18, fontFamily: "Montserrat-Medium", color: "white" }}>Capitaux ajoutés</Text>
                                <TouchableOpacity
                                    onPress={() => setShowModalAdd(!showModalAdd)}
                                    activeOpacity={.7}
                                    style={{ backgroundColor: "#319795", padding: 10, paddingVertical: 5, borderRadius: 5 }}>
                                    <Text style={{ fontFamily: "Montserrat-Medium", color: "white" }}>Ajouter</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "center", display: "flex", marginTop: 15 }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ textTransform: "uppercase", fontSize: 12, color: "white", fontFamily: "Montserrat-Medium", }}>Date</Text>
                                </View>

                                <View style={{ flex: 1 }}>
                                    <Text style={{ textTransform: "uppercase", fontSize: 12, color: "white", fontFamily: "Montserrat-Medium", }}>Montant</Text>
                                </View>
                            </View>

                            <View style={{ marginTop: 20 }}>
                                <Text style={{ color: "rgba(255,255,255,.5)", fontFamily: "Montserrat-Medium", fontSize: 10 }}>Vous n'avez effectué aucun ajout</Text>
                            </View>
                        </View>
                    </DropShadow>

                    <View style={{ marginBottom: 50 }} />
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}



const styles = StyleSheet.create({
    shadowPropBlack: {
        shadowColor: 'rgb(3, 3, 3)',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 10,
        shadowRadius: 5,
        marginTop: 10
    },
})


export default AutomateBTC;