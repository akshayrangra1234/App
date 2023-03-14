import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { colors, parameters, title } from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';
import { Icon, Button, SocialIcon } from 'react-native-elements';

export default function SignInWelcomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignitems: 'center',
          paddingTop: 20,
        }}>
        <Swiper autoplay={true}>
          <View style={styles.slide1}>
            <Text
              style={{
                fontSize: 50,
                color: colors.buttons,
                fontWeight: 'bold',
              }}>
              Order
            </Text>
          </View>

          <View style={styles.slide2}>
            <Text
              style={{
                fontSize: 50,
                color: colors.buttons,
                fontWeight: 'bold',
              }}>
              Receive
            </Text>
          </View>

          <View style={styles.slide3}>
            <Text
              style={{
                fontSize: 50,
                color: colors.buttons,
                fontWeight: 'bold',
              }}>
              Delivery
            </Text>
          </View>
        </Swiper>
      </View>

      <View style={{ flex: 4, justifyContent: 'center' }}>
        <Swiper autoplay={true}>
          <View style={styles.slide1}>
            <Image
              source={require('../../images/2546.jpg')}
              style={{ height: '100%', width: '100%', borderRadius: 20 }}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              source={require('../../images/Wavy_F&D-01_Single-03.jpg')}
              style={{ height: '100%', width: '100%', borderRadius: 20 }}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={require('../../images/Online_Shoping_29.jpg')}
              style={{ height: '100%', width: '100%', borderRadius: 20 }}
            />
          </View>
        </Swiper>
      </View>

      <View
        style={{ flex: 4, justifyContent: 'flex-end', marginHorizontal: 20 }}>
        <View
          style={{
            marginHorizontal: 5,
            marginVertical: 10,
            alignItems: 'center',
          }}>
          <Button
            title="Login In"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => {
              navigation.navigate('SignInScreen');
            }}
          />
        </View>

        <View style={{ marginHorizontal: 20, alignItems: 'center' }}>
          <Button
            title="Create an account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginVertical: 10,
        }}>
        <SocialIcon
          type="facebook"
          onPress={() => {
            alert('facebook');
          }}
        />
        <SocialIcon
          type="google"
          onPress={() => {
            alert('google');
          }}
        />
        <SocialIcon
          type="apple"
          onPress={() => {
            alert('apple');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignitems: 'center',
    backgroundColor: '#f2f2f2',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignitems: 'center',
    backgroundColor: '#f2f2f2',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignitems: 'center',
    backgroundColor: '#f2f2f2',
  },
  createButton: {
    borderWidth: 1,
    backgroundColor: 'dodgerblue',
    paddingHorizontal: 44,
    borderRadius: 40,
    height: 56,
    borderColor: '#989898',
    justifyContent: 'center',
    alignContent: 'center',
  },
  createButtonTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
