import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text } from "react-native";
import Scanner from "./src/screens/Scanner";
import Animation from "./assets/bars.gif";
import * as Font from "expo-font";
import { StatusBar } from 'expo-status-bar';
import RoutingDefault from "./src/Routing";

export default function App() {
  const [isLoadedFont, setIsLoadedFont] = useState(false);
  const [msg, setMsg] = useState(`Menunggu ASET`)

  useEffect(() => {
    FontLoaded()
  },[])
  const FontLoaded = async () => {
    await Font.loadAsync({
      Montserrat: require('./assets/fonts/Montserrat.ttf'),
      Medium: require('./assets/fonts/Montserrat-Medium.ttf'),
    })
    setIsLoadedFont(true)
  }

  if (!isLoadedFont) return (
    <SafeAreaView style={tampilan.container}>
      <StatusBar style="light"/>
      <Image style={tampilan.logo} source={Animation} />
      <Text style={tampilan.textFont}>{msg.toUpperCase()}</Text>
    </SafeAreaView>
  )
  else{
    return <RoutingDefault />
  }
}

const tampilan = StyleSheet.create({
  container: {
    backgroundColor: '#112D4E',
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    alignSelf: "center",
    justifyContent: "center",
  },
  textFont:{
    textAlign: 'center',
    fontWeight: "800",
    color: '#DBE2EF'
  }
});
