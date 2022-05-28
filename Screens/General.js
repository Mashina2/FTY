import { View, Text, SafeAreaView, ScrollView, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Input } from '@ui-kitten/components'
import { TouchableOpacity } from 'react-native-gesture-handler'

import DropShadow from 'react-native-drop-shadow'


const General = () => {
    const [mail, setMail] = React.useState("CHDLJIGHRTERMKSDGKRHNGRE-DKFGBDFGHDFUOGMDFHUH201SFSDJF")
    const [privateMail, setPrivateMail] = React.useState("CHDLJIGHRTER")
    return (
        <SafeAreaView style={{ backgroundColor: "#1a202c", flex: 1 }}>
            <ScrollView contentContainerStyle={{ paddingTop: 25, paddingHorizontal: 25 }}>
                <Text style={{ color: "white", fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Clés Binance</Text>
                <DropShadow style={styles.shadowPropBlack}>
                    <View style={{
                        backgroundColor: "#2d3748", padding: 18,
                        borderRadius: 5, paddingHorizontal: 15
                    }}>
                        <View>
                            <Text style={{ color: "white", fontWeight: "bold" }}>Clé Publique</Text>
                            <TextInput
                                value={mail}
                                onChangeText={nextText => {
                                    setMail(nextText)
                                }}
                                style={{
                                    flex: 1, fontSize: 10, backgroundColor: "transparent",
                                    borderColor: "white", borderWidth: 1,
                                    borderRadius: 5, paddingHorizontal: 10, fontSize: 12, marginTop: 12,
                                    color: "white", height: 40
                                }}
                            />
                        </View>

                        <View style={{ marginTop: 10 }}>
                            <Text style={{ color: "white", fontWeight: "bold" }}>Clé Privée</Text>
                            <TextInput
                                secureTextEntry={true}
                                value={privateMail}
                                keyboardType={""}
                                onChangeText={nextText => {
                                    setPrivateMail(nextText)
                                }}
                                style={{
                                    flex: 1, fontSize: 10, backgroundColor: "transparent",
                                    borderColor: "white", borderWidth: 1,
                                    borderRadius: 5, paddingHorizontal: 10, fontSize: 15, marginTop: 12,
                                    color: "white", height: 40
                                }}
                            />
                        </View>

                        <View style={{
                            marginTop: 20, display: "flex",
                            alignItems: "flex-end", justifyContent: "center"
                        }}>
                            <TouchableOpacity
                                activeOpacity={.7}
                                style={{ backgroundColor: "#319795", padding: 10, borderRadius: 5 }}>
                                <Text style={{ fontWeight: "bold", color: "white" }}>Configurer les automates</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </DropShadow>

                <View style={{ marginBottom: 50 }} />
            </ScrollView>
        </SafeAreaView>
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


export default General;