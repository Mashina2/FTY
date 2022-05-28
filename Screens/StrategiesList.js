import { View, Text, SafeAreaView, ScrollView, RefreshControl, Image } from 'react-native'
import React from 'react'
import StrategieCard from '../Components/StrategieCard'
import { FlatList, TouchableOpacity, TouchableWithoutFeedback, } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { Input, Icon } from '@ui-kitten/components'

const StrategiesList = ({ navigation }) => {
  const [search, setSearch] = React.useState("")
  const [refreshing, setRefreshing] = React.useState(false);
  const renderIcon = (props) => {
    return (<TouchableOpacity>
      <Icon {...props} name="search" />
    </TouchableOpacity>)
  }
  return (
    <SafeAreaView style={{ backgroundColor: "rgb(8,8,8)", flex: 1 }}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              console.log("Working");
            }}
          />
        }
        style={{ paddingHorizontal: 25, paddingTop: 25 }}>
        <View style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: 15,
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: 5
        }}>
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}>
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
        <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>Strategies suivies</Text>
        <View style={{ marginTop: 10, }}>
          <FlatList

            snapToAlignment="center"
            bounces={true}
            bouncesZoom={true}
            decelerationRate={"fast"}
            horizontal
            data={[1, 2, 3, 4, 5, 6]}
            renderItem={() => {
              return (
                <StrategieCard title="Strategy Infinity Blockchain" />
              )
            }}
          />
        </View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          useAngle
          angle={45}
          colors={["#00b588", "#00b577", "blue",]}
          style={{ padding: 15, borderRadius: 10, marginTop: 20, paddingVertical: 25 }}>
          <Text style={{ color: "white", fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>Suivez les meilleurs stratégies</Text>
          <Text style={{ color: "white", fontSize: 12, }}>Gagnez quand elles gagnent en reproduisant leurs ordres automatiquement</Text>
        </LinearGradient>

        <View style={{ marginTop: 20 }}>
          <Text style={{ color: "white" }}>Découvrez nos stratégies tendance</Text>
          {/* <View style={{ flex: 1, backgroundColor: "red", marginTop: 10, height: 30, display: "flex", flexDirection: "row" }}> */}

          <View style={{ marginTop: 10 }}>
            <Input
              value={search}
              placeholder="Rechercher une strategie"
              status={"control"}
              accessoryRight={renderIcon}
              onChangeText={nextValue => setSearch(nextValue)}
              style={{ backgroundColor: "transparent" }}
            />
          </View>


          <View style={{ marginTop: 30, }}>
            <FlatList
              numColumns={2}
              data={[1, 2, 3, 4, 5, 6]}
              renderItem={() => {
                return (
                  <StrategieCard title="Strategy Infinity Blockchain" />
                )
              }}
            />
          </View>
          {/* </View> */}
        </View>
        <View style={{ marginBottom: 80 }} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default StrategiesList