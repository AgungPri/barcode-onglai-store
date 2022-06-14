import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text } from "react-native";
import Animation from "../../assets/bars.gif";
import * as Font from "expo-font";
import { StatusBar } from 'expo-status-bar';

export default function SplashScreen({ navigation }) {
  const [msg, setMsg] = useState(`Menunggu Aplikasi Siap`)
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('BottomNavigation')
        },5000)
    },[])
  return (
    <SafeAreaView style={tampilan.container}>
      <StatusBar style="light"/>
      <Image style={tampilan.logo} source={Animation} />
      <Text style={tampilan.textFont}>{msg.toUpperCase()}</Text>
    </SafeAreaView>
  )
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
    color: '#DBE2EF',
    fontFamily:'Medium'
  }
});
