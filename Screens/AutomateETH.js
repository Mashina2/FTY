import { View, Text, SafeAreaView, ScrollView, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { CheckBox, Divider, Input } from '@ui-kitten/components'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'

import DropShadow from 'react-native-drop-shadow'


const AutomateETH = () => {
    const [engagedCapital, setEngagedCapital] = React.useState(0.000524558)
    const [availableCapital, setAvailableCapital] = React.useState(0.000524558)
    const [cumuledChecked, setCumuledChecked] = React.useState(false)
    const [automateChecked, setAutomateChecked] = React.useState(false)
    const [privateMail, setPrivateMail] = React.useState("CHDLJIGHRTER")
    return (
        <SafeAreaView style={{ backgroundColor: "rgb(8,8,8)", flex: 1 }}>
            <ScrollView contentContainerStyle={{ paddingTop: 25, }}>
                <View style={{ paddingHorizontal: 25 }}>
                    <Text style={{ color: "white", fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>Automate ETH</Text>
                    <Divider style={{ backgroundColor: "gray", marginBottom: 10 }} />
                    <Text style={{ color: "white", fontSize: 15, fontWeight: "bold", marginBottom: 10 }}>Capital à engager</Text>
                    <DropShadow style={styles.shadowPropBlack}>
                        <View style={{
                            backgroundColor: "rgb(60,60,60)", padding: 18,
                            borderRadius: 5, paddingHorizontal: 15
                        }}>
                            <Text style={{ color: "white", fontWeight: "bold", textAlign: "center", marginBottom: 25 }}>Capital Disponible: 0.00083257 ETH</Text>

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
                                    width: "100%", height: "100%", backgroundColor: "rgb(60,60,60)", opacity: .75
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
                                    width: "100%", height: "100%", backgroundColor: "rgb(60,60,60)", opacity: .75
                                }} />
                            </View>

                            <View style={{
                                marginTop: 20, display: "flex",
                                alignItems: "flex-end", justifyContent: "center"
                            }}>
                                <TouchableOpacity
                                    activeOpacity={.7}
                                    style={{ backgroundColor: "orange", padding: 10, borderRadius: 5 }}>
                                    <Text style={{ fontWeight: "bold" }}>Configurer les automates</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </DropShadow>

                    <View style={{ display: "flex", flexDirection: "row", marginTop: 20, alignItems: "center", justifyContent: "space-between" }}>
                        <View style={{}}>
                            <TouchableOpacity onPress={() => setCumuledChecked(!cumuledChecked)}>
                                <Text style={{ color: "white", fontSize: 14, marginBottom: 10, fontWeight: "600" }}>Activer l'effet cumulé</Text>
                            </TouchableOpacity>
                            <CheckBox
                                checked={cumuledChecked}

                                onChange={nextChecked => {
                                    setCumuledChecked(nextChecked)
                                }}>
                            </CheckBox>
                        </View>

                        <View style={{ display: "flex", alignItems: "flex-end" }}>
                            <TouchableOpacity onPress={() => setAutomateChecked(!automateChecked)}>
                                <Text style={{ color: "white", fontSize: 14, marginBottom: 10, fontWeight: "600" }}>Activer l'automate</Text>
                            </TouchableOpacity>
                            <CheckBox
                                checked={automateChecked}

                                onChange={nextChecked => {
                                    setAutomateChecked(nextChecked)
                                }}>
                            </CheckBox>
                        </View>


                    </View>

                    <DropShadow style={[styles.shadowPropBlack, { marginTop: 20 }]}>
                        <View style={{
                            backgroundColor: "rgb(60,60,60)", padding: 18,
                            borderRadius: 5, paddingHorizontal: 15
                        }}>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={{ fontSize: 18, fontWeight: "900", color: "white" }}>Capitaux ajoutés</Text>
                                <TouchableOpacity
                                    activeOpacity={.7}
                                    style={{ backgroundColor: "orange", padding: 10, paddingVertical: 5, borderRadius: 5 }}>
                                    <Text style={{ fontWeight: "bold" }}>Ajouter</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "center", display: "flex", marginTop: 15 }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ textTransform: "uppercase", fontSize: 14, color: "white", fontWeight: "700" }}>Date</Text>
                                </View>

                                <View style={{ flex: 1 }}>
                                    <Text style={{ textTransform: "uppercase", fontSize: 14, color: "white", fontWeight: "700" }}>Montant</Text>
                                </View>
                            </View>

                            <View style={{ marginTop: 20 }}>
                                <Text style={{ color: "rgba(255,255,255,.5)" }}>Vous n'avez effectué aucun ajout</Text>
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
        shadowColor: 'rgb(5, 5, 5)',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 10,
        shadowRadius: 5,
        marginTop: 10
    },
})


export default AutomateETH;