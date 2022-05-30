import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { Icon } from "@ui-kitten/components";

import Accordion from "react-native-collapsible/Accordion";

export class FAQ extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSections: [],
      sections: [
        {
          title: "First",
          content: "Lorem ipsum dolor et in tera"
        },
        {
          title: "Second",
          content: "Lorem ipsum dolor et in tera"
        },
        {
          title: "Third",
          content: "Lorem ipsum dolor et in tera"
        },
      ]
    }
  }

  _renderContent = (section) => {
    return (
      <View style={{ marginBottom: 15, padding: 10 }}>
        <Text style={{
          color: "white", fontSize: 12,
          fontFamily: "Montserrat-Medium",
        }}>{section.content}</Text>
      </View>
    )
  }


  _renderHeader = (section) => {
    return (
      <View style={{
        marginBottom: 10, display: "flex", flexDirection: "row",
        justifyContent: "space-between", alignItems: "center",
        borderBottomColor: "gray", borderBottomWidth: 1,
        padding: 10, paddingVertical: 8
      }}>
        <Text style={{
          color: "white", fontSize: 13,
          fontFamily: "Montserrat-Medium",
        }}>{section.title}</Text>
        <Icon name="arrow-ios-downward"
          style={{
            width: 15,
            height: 15,
            tintColor: "white",
          }} />
      </View>
    )
  }

  _updateSections = (activeSections) => {
    this.setState({ activeSections: activeSections })
  }


  render() {
    return (
      <SafeAreaView style={{
        backgroundColor: "#1a202c",
        flex: 1, position: "relative",
      }}>
        <ScrollView contentContainerStyle={{ paddingTop: 25, }}>
          <View style={{ paddingHorizontal: 25 }}>
            <View style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: 15,
              alignItems: "center",
              justifyContent: "space-between",
              paddingRight: 5
            }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.toggleDrawer()}>
                <Icon name="menu"
                  style={{
                    width: 28,
                    height: 28,
                    tintColor: "white",
                  }} />
              </TouchableOpacity>
              <TouchableOpacity >
                <Image source={require("../images/4.jpg")}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 50, marginLeft: 10
                  }} />
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 15 }}>
              <Text style={{
                color: "white",
                fontSize: 16, fontFamily: "Montserrat-Medium", marginBottom: 10
              }}>FAQs</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Accordion
                sections={this.state.sections}
                activeSections={this.state.activeSections}
                // renderSectionTitle={_renderSectionTitle}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
                underlayColor="transparent"
                onChange={this._updateSections}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default FAQ;

