import { StyleSheet, Text, View, SafeAreaView, TextInput, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/dist/AntDesign';


const User = () => {
  const [notApproved, setNotApproved] = useState([
    { image: require("../../assets/images/image1.png"), name: 'Ahsan Super Store', price: 100 },
    { image: require("../../assets/images/image1.png"), name: 'Mcdonald Burger', price: 100 },
    { image: require("../../assets/images/image1.png"), name: 'KFC Fried Chicken', price: 100 },
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
              justifyContent: "center"
            }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
              {item?.name}
            </Text>
            <Text style={{ fontSize: 13, color: 'black' }}>
              {item?.price}
            </Text>

          </View>
          <Icon name="eye" size={28} color={'blue'} />
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
      <View style={{ marginVertical: 10, height: 550 }}>
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

export default User

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 20,
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