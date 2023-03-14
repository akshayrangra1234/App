import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import HomeHeader from '../components/HomeHeader';
import { Icon } from 'react-native-elements';
import { colors, parameters } from '../global/styles';
import { filterData, restaurantsData } from '../global/Data';

import FoodCard from '../components/FoodCard';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function HomeScreen() {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState('0');
  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView stickyHeaderIndices={[0]} show>
        <View>
          <View
            style={{
              marginTop: 15,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.buttons : colors.grey4,
                }}>
                <Text style={styles.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.grey4 : colors.buttons,
                }}>
                <Text style={styles.deliveryText}>Pickup</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.filterView}>
          <View style={styles.addressView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
              }}>
              <Icon
                type="material-community"
                name="map-marker"
                color={colors.grey1}
                size={26}
              />
              <Text style={{ marginLeft: 5 }}>Hamipur street HP</Text>
            </View>
            <View style={styles.clockView}>
              <Icon
                type="material-community"
                name="clock-time-four"
                color={colors.grey1}
                size={26}
              />
              <Text style={{ marginLeft: 5 }}>now</Text>
            </View>
          </View>

          <View>
            <Icon
              type="material-community"
              name="filter"
              color={colors.grey1}
              size={26}
            />
          </View>
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Categories</Text>
        </View>

        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={(item) => item.id}
            extraData={indexCheck}
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.id);
                }}>
                <View
                  style={
                    indexCheck == item.id
                      ? { ...styles.smallCardSelected }
                      : { ...styles.smallCard }
                  }>
                  <Image
                    style={{ height: 60, width: 60, borderRadius: 30 }}
                    source={item.image}
                  />
                  <View>
                    <Text
                      style={
                        indexCheck === item.id
                          ? { ...styles.smallCardTextSelected }
                          : { ...styles.smallCardText }
                      }>
                      {item.name}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>
        <View style ={styles.headerTextView}>
          <Text style={styles.headerText}>Free Delivery Now </Text>
        </View>


        <View>
          <FlatList
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal={true}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style ={{marginRight:5}}>
                <FoodCard 
                screenWidth={SCREEN_WIDTH*0.8}
                images={item.images}
                restaurantName={item.restaurantName}
                farAway={item.farAway}
                businessAddress={item.businessAddress}
                 />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
  },
  deliveryText: {
    marginleft: 5,
    fontSize: 15,
  },
  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    marginVertical:10
  },
  clockView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    backgroundColor: colors.cardbackground,
    borderRadius: 15,
    paddingHorizontal: 6,
    marginRight: 20,
  },
  addressView: {
    flexDirection: 'row',
    backgroundColor: colors.grey5,
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  headerText: {
    color: colors.grey2,
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 10,
    marginTop: 10,
  },
  headerTextView: {
    paddingVertical: 3,
    marginTop: 10,
  },
  smallCard: {
    borderRadius: 30,
    backgroundColor: colors.grey5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: colors.buttons,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCardTextSelected: {
    fontWeight: 'bold',
    color: colors.cardbackground,
  },
  smallCardText: {
    fontWeight: 'bold',
    color: colors.grey2,
  },
});
