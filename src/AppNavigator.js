import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './modules/auth/Login';
import OnBoarding from './modules/onBoarding/OnBoarding';
import BottomTabNavigator from './modules/mainpage/BottomTabNavigator';
const Stack = createNativeStackNavigator()
// hamesha auto save band karke use karna isko ji ji ,e bata raha tha
const AppNavigator = () => {
    return (
        // it is like browser router
        <NavigationContainer>
            {/* <StatusBar backgroundColor={'red'} /> */}
            {/* it is like routes */}
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                {/* it is like route */}
                <Stack.Screen name='Greet' component={OnBoarding} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Main' component={BottomTabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})