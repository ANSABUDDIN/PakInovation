import { StyleSheet, Text, View, TextInput, SafeAreaView, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/dist/AntDesign';

const Home = () => {
    const [list, setlist] = useState(['Best Seller', "All Stores", "Productive", "Non Productive"])
    const [current, setCurrent] = useState(0)
    const [notApproved, setNotApproved] = useState([
        { image: require("../../assets/images/image1.png"), name: 'Fruit', price: 100 },
        { image: require("../../assets/images/image1.png"), name: 'Hello', price: 100 },
        { image: require("../../assets/images/image1.png"), name: 'Fruit', price: 100 },
    ])
    const CartCard = ({ item }) => {
        return (
            <>
                <View style={styles.cartCard}>
                    <Image source={item?.image} style={{ height: 80, width: 80 }} />
                    <View
                        style={{
                            height: 100,
                            marginLeft: 10,
                            paddingVertical: 20,
                            flex: 1,
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                            {item?.name}
                        </Text>
                        <Text style={{ fontSize: 13, color: 'black' }}>
                            {item?.price}
                        </Text>
                        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
                            {new Date().toDateString()}
                        </Text>
                    </View>
                </View>
            </>
        );
    };
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#fff',
                // alignItems: 'center',
            }}>
            <View
                style={{
                    marginTop: 40,
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    justifyContent: 'center', alignItems: "center"
                }}>
                <View style={styles.inputContainer}>
                    <Icon name="search1" size={28} color={'blue'} />
                    <TextInput
                        style={{ flex: 1, fontSize: 18, marginLeft: 10 }}
                        placeholder="Search"
                        placeholderTextColor={'blue'}
                    />
                </View>
                <View style={{ backgroundColor: "blue", paddingHorizontal: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 10, paddingVertical: 2, height: 42, marginLeft: 10 }}>

                    <Icon name="menufold" size={28} color={'white'} />
                </View>
            </View>
            <View style={{
                paddingHorizontal: 10,
                justifyContent: 'center', alignItems: "center"
            }}>

                <View style={{ width: '100%', height: 200, justifyContent: "center", alignItems: "center", borderColor: 'black', borderWidth: 1, borderRadius: 10, marginTop: 15, borderColor: '#75E6DA' }}>

                </View>
            </View>
            <Text
                style={{
                    paddingHorizontal: 10,
                    fontSize: 20,
                    fontWeight: '500',
                    color: 'blue',
                    marginTop: 10
                }}>
                Stores
            </Text>
            <View style={{ marginVertical: 7 }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={list}
                    renderItem={({ item, index }) => (
                        <Text onPress={
                            () => {
                                setCurrent(index
                                )
                            }
                        } style={{ paddingVertical: 10, borderRadius: 10, marginHorizontal: 5, backgroundColor: index == current ? "blue" : 'white', color: index == current ? 'white' : '#75E6DA', paddingHorizontal: 15 }}>{item}</Text>
                    )}
                />
            </View>
            <View style={{ marginVertical: 10, height: 200 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 80 }}
                    data={notApproved}
                    renderItem={({ item }) => <CartCard item={item} />}
                />
            </View>
        </SafeAreaView>

    )
}

export default Home

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: 20,
        color: ""
    },
    cartCard: {
        height: 100,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: 'white',
        marginBottom: 10,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionBtn: {
        width: 80,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 30,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
})