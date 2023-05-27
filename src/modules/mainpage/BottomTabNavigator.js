import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import User from './User';
import About from './About';
import Item from './Item';

const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}  >
            <Tab.Screen name="Home" component={Home}

                options={{
                    tabBarLabel: '',
                    tabBarIcon: tabInfo => {
                        return tabInfo.focused ? (
                            <View
                                style={{
                                    height: 60,
                                    width: 60,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    borderColor: 'blue',
                                    borderWidth: 2,
                                    borderRadius: 30,
                                    top: -25,
                                    elevation: 5,
                                }}>
                                <Icon name="home" color={'blue'} size={28} />
                            </View>
                        ) : (
                            <Icon name="home" size={28} color={'blue'} />
                        );
                    },
                }}
            />
            <Tab.Screen name="User" component={User} options={{
                tabBarLabel: '',
                tabBarIcon: tabInfo => {
                    return tabInfo.focused ? (
                        <View
                            style={{
                                height: 60,
                                width: 60,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                borderColor: 'blue',
                                borderWidth: 2,
                                borderRadius: 30,
                                top: -25,
                                elevation: 5,
                            }}>
                            <Icon name="user" color={'blue'} size={28} />
                        </View>
                    ) : (
                        <Icon name="user" size={28} color={'blue'} />
                    );
                },
            }} />
            <Tab.Screen name="About" component={About} options={{
                tabBarLabel: '',
                tabBarIcon: tabInfo => {
                    return tabInfo.focused ? (
                        <View
                            style={{
                                height: 60,
                                width: 60,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                borderColor: 'blue',
                                borderWidth: 2,
                                borderRadius: 30,
                                top: -25,
                                elevation: 5,
                            }}>
                            <Icon2 name="location-pin" color={'blue'} size={28} />
                        </View>
                    ) : (
                        <Icon2 name="location-pin" size={28} color={'blue'} />
                    );
                },
            }} />
            <Tab.Screen name="Items" component={Item} options={{
                tabBarLabel: '',
                tabBarIcon: tabInfo => {
                    return tabInfo.focused ? (
                        <View
                            style={{
                                height: 60,
                                width: 60,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                borderColor: 'blue',
                                borderWidth: 2,
                                borderRadius: 30,
                                top: -25,
                                elevation: 5,
                            }}>
                            <Icon name="folderopen" color={'blue'} size={28} />
                        </View>
                    ) : (
                        <Icon name="folderopen" size={28} color={'blue'} />
                    );
                },
            }} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})