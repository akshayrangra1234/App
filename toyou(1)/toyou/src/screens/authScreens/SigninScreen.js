import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { colors, parameters } from '../../global/styles';
import Header from '../../components/Header';
import { Icon, Button, SocialIcon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

export default function SignInScreen({ navigation }) {
  const [textInput2Focused, setTextInput2Focused] = useState(false);
  const textInput1 = useRef(null);
  const textInput2 = useRef(null);

  const handleLogin = () => {
    navigation.navigate('HomeScreen');
  };

  const handleForgotPassword = () => {
    // Navigate to Forgot Password screen
  };

  const handleCreateAccount = () => {
    // Navigate to Create Account screen
  };

  return (
    <View style={styles.container}>
      {/* top nav bar my account or arrow for back */}
      <Header title="ACCOUNT" type="arrow-left" navigation={navigation} />

      <View style={{ marginLeft: 10 }}>
        <Text style={styles.text1}>Login Account</Text>
      </View>

      <View style={{ marginLeft: 25, marginTop: 10 }}>
        <Text style={styles.text2}>Hello, welcome back to our account</Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <View>
          <TextInput
            style={styles.TextInput1}
            placeholder="Email"
            ref={textInput1}
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => textInput2.current.focus()}
          />
        </View>

        <View style={styles.TextInput2}>
          <Animatable.View
            animation={textInput2Focused ? '' : 'fadeInRight'}
            duration={800}>
            <Icon
              name="lock"
              iconStyle={{ color: colors.grey3 }}
              type="material"
            />
          </Animatable.View>
          <TextInput
            style={{ width: '80%' }}
            placeholder="Password"
            ref={textInput2}
            secureTextEntry={true}
            onFocus={() => setTextInput2Focused(false)}
            onBlur={() => setTextInput2Focused(true)}
            returnKeyType="done"
            onSubmitEditing={handleLogin}
          />
          <Animatable.View
            animation={textInput2Focused ? '' : 'fadeInLeft'}
            duration={800}>
            <Icon
              name="visibility-off"
              iconStyle={{ color: colors.grey3 }}
              type="material"
              style={{ marginRight: 10 }}
            />
          </Animatable.View>
        </View>
      </View>

      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 20,
          alignItems: 'center',
        }}>
        <Button
          title="Login In"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
          onPress={handleLogin}
        />
      </View>

      <TouchableOpacity onPress={handleForgotPassword}>
        <View style={{ alignItems: 'center', marginTop: 5 }}>
          <Text
            style={{
              ...styles.text3,
              textDecorationLine: 'underline',
            }}>
            Forgot Password?
          </Text>
        </View>
      </TouchableOpacity>

      <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>OR</Text>
      </View>
      <View
        style={{ alignItems: 'center', marginHorizontal: 50, marginTop: 1 }}>
        <SocialIcon
          title="sign in with facebook"
          button
          type="facebook"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>

      <View
        style={{ alignItems: 'center', marginHorizontal: 50, marginTop: 1 }}>
        <SocialIcon
          title="sign in with GOOGLE"
          button
          type="google"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={{ marginTop: 15, marginLeft: 20 }}>
        <Text style={{ ...styles.text2 }}>Not registered yet ?</Text>
      </View>

      <View style={{ alignItems: 'flex-end', marginHorizontal: 20 }}>
        <Button
          title="Create An Account"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
        />
      </View>
    </View>
  );
}

// css properties
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2', // Light grey color
  },
  text1: {
    color: colors.grey1,
    fontSize: 28,
    marginLeft: 15,
    marginTop: 15,
    fontWeight: 'bold',
  },
  text2: {
    color: colors.grey3,
    fontSize: 15,
  },
  text3: {
    color: colors.grey3,
    fontSize: 12,
  },
  TextInput1: {
    borderWidth: 2,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 30,
    marginBottom: 20,
    paddingLeft: 15,
    height: 50,
    width: 280,
  },
  TextInput2: {
    borderWidth: 2,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-betwwen',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    height: 50,
    width: 280,
  },
  SocialIcon: {
    borderRadius: 30,
    height: 50,
    width: 200,
  },
  createButton: {
    borderWidth: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 30,
    height: 40,
    borderColor: '#989898',
    justifyContent: 'center',
    alignContent: 'center',
  },
  createButtonTitle: {
    color: 'orange',
    fontSize: 10,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
  },
});
