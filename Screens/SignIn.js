

import { View, Text, ScrollView, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

import { Input, Icon, Toggle, CheckBox } from '@ui-kitten/components'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            showPass: "",
            password: false,
            remember: false,
        }


    }

    renderUser = (props) => {
        return (<TouchableOpacity>
            <Icon {...props} name="person" />
        </TouchableOpacity>)
    }

    renderPass = (props) => {
        return (<TouchableOpacity onPress={() => this.setState({ showPass: !this.state.showPass })}>
            {this.state.showPass ? <Icon {...props} name="eye" /> : <Icon {...props} name="eye-off" />}
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
                        zIndex: -2.5
                    }} />
                    <View style={{
                        height: HEIGHT * .42,
                        width: HEIGHT * .42,
                        borderRadius: HEIGHT * .42,
                        backgroundColor: "rgba(254,254,254,.1)",
                        position: "absolute",
                        top: -HEIGHT * .1,
                        right: -WIDTH * .49,
                        zIndex: -1.5
                    }} />
                    <View style={{ marginTop: 15 }}>
                        <Text style={{
                            color: "white",
                            fontSize: 18,
                            // fontWeight: "bold", 
                            fontFamily: "Montserrat-SemiBold",
                            marginBottom: 10
                        }}>Sign In</Text>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <View style={{ marginBottom: 10 }}>
                            <Text style={{
                                color: "white",
                                fontFamily: "Montserrat-Medium"
                            }}>Votre Nom d'utilisateur</Text>
                        </View>
                        <Input
                            value={this.state.name}
                            placeholder="Entrez votre nom"
                            status={"control"}
                            accessoryRight={this.renderUser}
                            onChangeText={nextValue => this.setState({ name: nextValue })}
                            style={{ backgroundColor: "transparent" }}
                        />
                    </View>

                    <View style={{ marginTop: 15 }}>
                        <View style={{ marginBottom: 10 }}>
                            <Text style={{
                                color: "white",
                                fontFamily: "Montserrat-Medium"
                            }}>Votre mot de passe</Text>
                        </View>
                        <Input
                            value={this.state.password}
                            placeholder="Entrez votre mot de passe"
                            status={"control"}
                            secureTextEntry={!this.state.showPass ? true : false}
                            accessoryRight={this.renderPass}
                            onChangeText={nextValue => this.setState({ password: nextValue })}
                            style={{ backgroundColor: "transparent", }}
                        />
                    </View>

                    <View style={{
                        display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "row",
                        marginTop: 10
                    }}>
                        <CheckBox
                            status={"success"}
                            style={{ transform: [{ scale: .85 }], }}
                            checked={this.state.remember}

                            onChange={nextChecked => {
                                this.setState({ remember: nextChecked })
                            }}>
                        </CheckBox>
                        <TouchableOpacity
                            activeOpacity={.5}
                            onPress={() =>
                                this.setState({ remember: nextChecked })}
                            style={{ marginLeft: 10 }}>
                            <Text style={{
                                color: "white", fontSize: 14,
                                fontFamily: "Montserrat-Medium"
                            }}>Remember me</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 15 }}>
                        <TouchableOpacity
                            activeOpacity={.7}
                            style={{
                                backgroundColor: "#319795", padding: 10, display: "flex", alignItems: "center",
                                justifyContent: "center"
                                , paddingHorizontal: 10, borderRadius: 5
                            }}>
                            <Text style={{
                                fontFamily: "Montserrat-Medium", color: "white"
                            }}>Log In</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 15 }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("ForgotPassword")}
                            activeOpacity={.7}
                            style={{
                                backgroundColor: "transparent", display: "flex", alignItems: "center",
                                justifyContent: "center"
                                , paddingHorizontal: 10, borderRadius: 5
                            }}>
                            <Text style={{
                                fontFamily: "Montserrat-Medium", color: "#319795"
                            }}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ marginTop: 40 }}>
                        <View style={{ marginBottom: 10 }}>
                            <Text style={{
                                color: "rgba(255,255,255,.5)", textAlign: "center",
                                fontFamily: "Montserrat-Medium"
                            }}>Vous n'avez pas de compte</Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={.7}
                            onPress={() => this.props.navigation.navigate("SignUp")}
                            style={{
                                backgroundColor: "transparent", display: "flex", alignItems: "center",
                                justifyContent: "center"
                                , paddingHorizontal: 10, borderRadius: 5
                            }}>
                            <Text style={{
                                fontFamily: "Montserrat-Medium", color: "#319795"
                            }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginBottom: HEIGHT * .5 }} />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default SignIn

