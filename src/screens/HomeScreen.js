import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
export default function HomeScreen() {
  return (
    <SafeAreaView style={tampilan.container}>
      <StatusBar style="dark" />
      <View style={tampilan.container}>
        <View style={tampilan.headerProfile}>
          <View
            style={{ flex: 1, alignSelf: "center", alignItems: "flex-start" }}
          >
            <Text style={{ fontFamily: "Medium", color: "#DFF6FF" }}>
              Nama gw Kevin
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat",
                color: "#DFF6FF",
                fontSize: 11,
              }}
            >
              EMP/0077
            </Text>
          </View>
          <View style={tampilan.circleAvatar}>
            <Feather name="user" size={40} color="#DFF6FF" />
          </View>
        </View>
        <View style={tampilan.brandingImg}>
          <Image
            source={require("../../assets/images/logs.png")}
            style={{ width: 200, height: 200, position: "absolute", right: 5 }}
          />
          <Text
            style={{
              fontFamily: "Medium",
              color: "#fff",
              fontSize: 25,
              alignSelf: "left",
              padding: 10,
              top: 30,
            }}
          >
            Jadikan Harimu{`\n`}Mudah
          </Text>
        </View>
        <View style={[tampilan.brandingImg , {marginTop:50,height:300}]}>
          <Text>Scan</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const tampilan = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerProfile: {
    padding: 10,
    backgroundColor: "#47B5FF",
    borderRadius: 15,
    flexDirection: "row",
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  circleAvatar: {
    alignItems: "center",
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    backgroundColor: "#1363DF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  brandingImg: {
    height: 150,
    backgroundColor: "red",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: "#06283D",
    position: "relative",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
