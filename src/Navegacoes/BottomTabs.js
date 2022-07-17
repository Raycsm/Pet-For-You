import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/build/FontAwesome5";
import { Text } from "react-native-paper";


import {TelaInicialNavigation } from "./StackNavigation";
import { FavoritosNavigation } from "./StackNavigation";
import { AdocaoNavigation } from "./StackNavigation";
import { ChatNavigation } from "./StackNavigation";




const Tab = createBottomTabNavigator()

export default function ShowBottomTabs() {
    return(
        <Tab.Navigator screenOptions={{
            headerShown:false,                                                                                                                                
            unmountOnBlur:true,
            tabBarShowLabel:false,
            tabBarStyle: {height: 60}
        }}
         >
            <Tab.Screen 
                name="HomeTab" 
                component={TelaInicialNavigation}
                options={{
                    tabBarIcon:({focused}) =>(
                        <>
                            <Icon
                            name='home'
                            size ={20}
                            color = {focused ? '#DB652F' : '#8B8888'}
                            />
                            <Text
                            allowFontScaling ={false}
                            style={{
                                color: focused ? '#DB652F' : '#8B8888',
                                fontSize: 15,
                                textAlign:'center'
                            }}
                            
                            > 
                                Home</Text>
                        </>
                    )
                }}
                
                />
            <Tab.Screen 
                name="FavoritosTab" 
                component={FavoritosNavigation}
                options={{
                    tabBarIcon:({focused}) =>(
                        <>
                            <Icon
                            name='heart'
                            size ={20}
                            color = {focused ? '#DB652F' : '#8B8888'}
                            />
                            <Text 
                            allowFontScaling ={false}
                            style={{
                                color: focused ? '#DB652F' : '#8B8888',
                                fontSize: 15,
                                textAlign:'center'
                            }}
                            >Favoritos</Text>
                        </>
                    )
                }}
                />
            <Tab.Screen 
                name="AdocaoTab"
                component={AdocaoNavigation}
                options={{
                    tabBarIcon:({focused}) =>(
                        <>
                            <Icon
                            name='paw'
                            size ={20}
                            color = {focused ? '#DB652F' : '#8B8888'}
                            />
                            
                            <Text 
                            allowFontScaling ={false}
                            style={{
                                color: focused ? '#DB652F' : '#8B8888',
                                fontSize: 15,
                                textAlign:'center'
                            }}
                            
                            >Adoção</Text>
                        </>
                    )
                }}
                
                />
            <Tab.Screen 
                name="ChatTab" 
                component={ChatNavigation}
                options={{
                    tabBarIcon:({focused}) =>(
                        <>
                            <Icon
                            name='user'
                            size ={20}
                            color = {focused ? '#DB652F' : '#8B8888'}
                            />
                            <Text 
                            allowFontScaling ={false}
                            style={{
                                color: focused ? '#DB652F' : '#8B8888',
                                fontSize: 15,
                                textAlign:'center'
                            }}
                            >
                            Chat</Text>
                        </>
                    )
                }}
            
            />
        </Tab.Navigator>
    )
}