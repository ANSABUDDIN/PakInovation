import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';


const About = () => {
  const [cartData, setCartData] = useState([
    { image: require("../../assets/images/image1.png"), name: 'Product 1', price: 1000 },
    { image: require("../../assets/images/image1.png"), name: 'Product 1', price: 1000 },
    { image: require("../../assets/images/image1.png"), name: 'Product 1', price: 1000 },
    { image: require("../../assets/images/image1.png"), name: 'Product 1', price: 1000 },
  ])
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
          <Icon name="chevron-back" size={28} color={'blue'} />
          <Icon2 name="hearto" size={28} color={'blue'} style={{ paddingRight: 30 }} />
        </View>

        <Icon2 name="upload" size={26} color={'blue'} />
      </View>

      <View >
        <View style={styles.cartCard}>
          <View
            style={{
              height: 100,
              marginLeft: 10,
              paddingVertical: 20,
              flex: 1,
              justifyContent: "center"
            }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
              Deliver To
            </Text>
            <Text style={{ fontSize: 18, color: 'black' }}>
              242 ST Marks Eve, Finland
            </Text>

          </View>
        </View>
      </View>
      <View style={{
        marginVertical: 5, height: 200, backgroundColor: 'white',
        elevation: 0.5,
      }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
          data={cartData}
          renderItem={({ item }) => <View style={styles.cartCard}>
            <Image source={item?.image} style={{ height: 80, width: 80 }} />

            <View
              style={{
                height: 100,
                marginLeft: 10,
                paddingVertical: 20,
                flex: 1,
                justifyContent: "center"
              }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                {item?.name}
              </Text>
              <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 4, backgroundColor: 'blue', color: 'white', borderRadius: 5 }}><Text style={{ fontSize: 20, fontWeight: '700', color: 'white' }}>
                  +</Text></TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: '700', padding: 5 }}>1</Text>
                <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 4, backgroundColor: 'blue', color: 'white', borderRadius: 5 }}><Text style={{ fontSize: 20, fontWeight: '700', color: 'white' }}>
                  -</Text></TouchableOpacity>
              </View>

            </View>
            <Text style={{ fontSize: 20, color: 'blue' }}>
              {item?.price}
            </Text>
          </View>}
        />
      </View>

      <View style={{ paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 3 }}>
        <Text style={{ fontSize: 18 }}>Total Item</Text>
        <Text style={{ fontSize: 18 }}>1</Text>
      </View>
      <View style={{ paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 3 }}>
        <Text style={{ fontSize: 18 }}>Discount</Text>
        <Text style={{ fontSize: 18 }}>10%</Text>
      </View>
      <View style={{ paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 3 }}>
        <Text style={{ fontSize: 18 }}>Tax</Text>
        <Text style={{ fontSize: 18 }}>100</Text>
      </View>
      <View style={{ paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
        <Text style={{ fontSize: 21, fontWeight: '600', color: '#000' }}>Total</Text>
        <Text style={{ fontSize: 21, fontWeight: '600', color: '#000' }}>100</Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#90EE90',
          height: 50,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          borderRadius: 18, marginHorizontal: 10
        }}

      >
        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500' }}>Order Confirmed</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default About

const styles = StyleSheet.create({
  cartCard: {
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: "#90EE90", borderWidth: 1, marginVertical: 15
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
})