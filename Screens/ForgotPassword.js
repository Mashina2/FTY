
import { View, Text, ScrollView, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

import { Input, Icon } from '@ui-kitten/components'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export class ForgotPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mail: ""
        }
    }

    renderMail = (props) => {
        return (<TouchableOpacity>
            <Icon {...props} name="email" />
        </TouchableOpacity>)
    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#1a202c", position: "relative" }}>
                <ScrollView
                    contentContainerStyle={{ paddingTop: HEIGHT * .08, paddingHorizontal: 25, }}
                >
                    <View style={{
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
                    }} />

                    <View style={{
                        display: "flex",
                        marginBottom: 15,
                        alignItems: "flex-start",
                        justifyContent: "center",
                    }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-ios-back"
                                style={{
                                    width: 28,
                                    height: 28,
                                    tintColor: "white",
                                }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={{
                            color: "white", fontSize: 18,
                            marginBottom: 10,
                            fontFamily: "Montserrat-SemiBold"
                        }}>Mot de passe oublié</Text>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <View style={{ marginBottom: 10 }}>
                            <Text style={{
                                color: "white",
                                fontFamily: "Montserrat-Medium"
                            }}>Votre mail</Text>
                        </View>
                        <Input
                            value={this.state.mail}
                            placeholder="Entrez votre mail"
                            status={"control"}
                            accessoryRight={this.renderMail}
                            keyboardType='email-address'
                            onChangeText={nextValue => this.setState({ mail: nextValue })}
                            style={{ backgroundColor: "transparent" }}
                        />
                    </View>

                    <View style={{ marginTop: 15 }}>
                        <TouchableOpacity
                            activeOpacity={.7}
                            style={{
                                backgroundColor: "#319795", padding: 10, display: "flex", alignItems: "center", justifyContent: "center"
                                , paddingHorizontal: 10, borderRadius: 5
                            }}>
                            <Text style={{ fontFamily: "Montserrat-Medium", color: "white" }}>Send</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginBottom: HEIGHT * .5 }} />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default ForgotPassword;

