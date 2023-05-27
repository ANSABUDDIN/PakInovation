import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

const Login = ({ navigation }) => {
    const COLORS = {
        dark: '#000',
        light: '#a5a5a5',
        white: '#fff',
        primary: '#282534',
        secondary: '#64beff',
        pink: '#ff2d5f',
    };
    return (
        <SafeAreaView
            style={{
                paddingHorizontal: 20,
                paddingTop: 80,
                flex: 1,
                backgroundColor: '#75E6DA',
                justifyContent: 'center',
                // alignItems: 'center',
            }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View >
                    <Text
                        style={{ fontSize: 20, fontWeight: 'bold', textAlign: "center", color: COLORS.white, marginBottom: 10 }}>
                        Login
                    </Text>
                    <Text
                        style={{ fontSize: 16, color: COLORS.dark, textAlign: "center" }}>
                        Access account
                    </Text>
                </View>

                <View style={{ marginTop: 20 }}>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ color: COLORS.dark, paddingLeft: 5, marginBottom: 10, fontSize: 16 }}>Email</Text>
                        <TextInput
                            id="email"
                            name="email"
                            // onChangeText={formik.handleChange('email')}
                            // onBlur={formik.handleBlur('email')}
                            // value={formik.values.email}
                            placeholder="Email"
                            style={{
                                color: COLORS.light,
                                paddingLeft: 15,
                                borderWidth: 1,
                                borderColor: COLORS.light,
                                flex: 1,
                                fontSize: 18,
                                borderRadius: 15, backgroundColor: COLORS.white, borderColor: COLORS.white

                            }}
                            placeholderTextColor={COLORS.light}
                        />
                    </View>
                    {/* {formik.errors.email && formik.touched.email ? (
                        <Text style={{color: 'red', marginVertical: 5, fontWeight: '500'}}>{formik.errors.email}</Text>
                    ) : null} */}

                    <View style={{ marginTop: 20 }}>
                        {/* <Icon
                            name="lock-outline"
                            color={COLORS.primary}
                            size={20}
                            style={{ marginTop: 15, position: 'absolute' }}
                        /> */}
                        <Text style={{ color: COLORS.dark, paddingLeft: 5, marginBottom: 10, fontSize: 16 }}>Password</Text>
                        <View style={{ flexDirection: "row" }}>
                            <TextInput
                                id="password"
                                name="password"
                                // onChangeText={formik.handleChange('password')}
                                // onBlur={formik.handleBlur('password')}
                                // value={formik.values.password}
                                placeholder="Password"
                                style={{
                                    color: COLORS.light,
                                    paddingLeft: 15,
                                    borderWidth: 1,
                                    borderColor: COLORS.light,
                                    flex: 1,
                                    fontSize: 18,
                                    borderRadius: 15, backgroundColor: COLORS.white, borderColor: COLORS.white

                                }}
                                secureTextEntry
                                placeholderTextColor={COLORS.light}
                            />
                            <Icon
                                name="lock-outline"
                                color={COLORS.dark}
                                size={20}
                                style={{ marginTop: 15, position: 'absolute', right: 14 }}
                            />
                        </View>

                    </View>
                    {/* {formik.errors.password && formik.touched.password ? (
                        <Text style={STYLES.error}>{formik.errors.password}</Text>
                    ) : null} */}
                    <TouchableOpacity
                        // disabled={isClick}
                        style={{
                            // backgroundColor: isClick ? COLORS.light : COLORS.primary,
                            backgroundColor: '#90EE90',
                            height: 50,
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 50,
                            borderRadius: 18
                        }}
                        onPress={() => {
                            navigation.navigate('Main')
                        }}
                    >
                        {/* // onPress={() => { */}
                        {/* //   navigation.navigate('PatientNavigator');
              // }}> */}
                        <Text style={{ color: COLORS.white }}>LOGIN</Text>
                    </TouchableOpacity>
                    <View
                        style={{
                            marginVertical: 20,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}></View>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        marginBottom: 20,
                    }}>
                    <Text >
                        Don`t have an account ?
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpScreen')}>
                        <Text style={{ color: COLORS.white, fontWeight: 'bold', marginLeft: 8 }}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({})