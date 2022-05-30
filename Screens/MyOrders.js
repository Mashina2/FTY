
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native'
import React, { Component } from 'react'
import { Icon } from "@ui-kitten/components";
import { Table, TableWrapper, Row } from 'react-native-table-component';

export class MyOrders extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tableHead: ['Head', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7', 'Head8', 'Head9'],
      widthArr: [40, 60, 80, 100, 120, 140, 160, 180, 200]
    }
  }

  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }

  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < 9; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }

    return (
      <SafeAreaView style={{ backgroundColor: "#1a202c", flex: 1, position: "relative", }}>
        <ScrollView contentContainerStyle={{ paddingTop: 25, }}>
          <View style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: 15,
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 25, marginTop: 25
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
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Profile")}
            >
              <Image source={require("../images/4.jpg")}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 50, marginLeft: 10
                }} />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} contentContainerStyle={{ paddingHorizontal: 25, paddingTop: 10 }} >
            <View>
              <Table borderStyle={{ borderWidth: 1, borderColor: "rgba(255,255,255,.3)" }}>
                <Row data={state.tableHead} widthArr={state.widthArr}
                  style={styles.header} textStyle={styles.text} />
              </Table>
              <ScrollView style={styles.dataWrapper}>
                <Table borderStyle={{ borderWidth: 1, borderColor: 'rgba(255,255,255,.2)' }}>
                  {
                    tableData.map((rowData, index) => (
                      <Row
                        key={index}
                        data={rowData}
                        widthArr={state.widthArr}
                        style={[styles.row, index % 2 && { backgroundColor: 'transparent' }]}
                        textStyle={styles.text}
                      />
                    ))
                  }
                </Table>
              </ScrollView>
            </View>
          </ScrollView >
          <View style={{ marginBottom: 50 }} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header: { height: 50, backgroundColor: '#319795' },
  text: { textAlign: 'center', fontWeight: '100', color: "white", fontFamily: "Montserrat-Medium", },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: 'rgba(0,0,0,.2)' }
});
export default MyOrders


