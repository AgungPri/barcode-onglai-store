import React from 'react';
import Scanner from '../screens/Scanner';
import User from '../screens/User';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { View, Text } from "react-native";
import { Feather, Octicons, AntDesign, Foundation } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomNavigation(){
    return(
        <Tab.Navigator initialRouteName='HomeScreen'
        screenOptions={{
            tabBarInactiveTintColor: '#545454',
            tabBarActiveTintColor: '#516BEB',
            tabBarStyle: {
                position: 'absolute',
                borderTopColor: 'rgba(0, 0, 0, .2)',
                borderTopStartRadius: 30,
                borderTopEndRadius: 30,
                elevation: 0
            },
        }}
        >
            <Tab.Screen name='HomeScreen' component={HomeScreen} options={{
                headerShown:false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <AntDesign name="home" size={18} style={{ color: focused ? '#FF7648' : '#9F9FB0' }} />
                    </View>
                ),
                tabBarLabel: ({ focused }) => (
                    <View style={{width:4,height:4, backgroundColor: focused ? '#FF7648' : '#fff',marginBottom:focused ? 10 : 0,borderRadius: 120/2}}></View>
                ),
            }} />
            <Tab.Screen name='Scanner' component={Scanner} 
            options={{
                headerShown:false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <AntDesign name="scan1" size={18} style={{ color: focused ? '#FF7648' : '#9F9FB0' }} />
                    </View>
                ),
                tabBarLabel: ({ focused }) => (
                    <View style={{width:4,height:4, backgroundColor: focused ? '#FF7648' : '#fff',marginBottom:focused ? 10 : 0,borderRadius: 120/2}}></View>
                ),
            }}/>
            <Tab.Screen name='User' component={User} options={{
                headerShown:false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <AntDesign name="user" size={18} style={{ color: focused ? '#FF7648' : '#9F9FB0' }} />
                    </View>
                ),
                tabBarLabel: ({ focused }) => (
                    <View style={{width:4,height:4, backgroundColor: focused ? '#FF7648' : '#fff',marginBottom:focused ? 10 : 0,borderRadius: 120/2}}></View>
                ),
            }}
            />
        </Tab.Navigator>
    )
}