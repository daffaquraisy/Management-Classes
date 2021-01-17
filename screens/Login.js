import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StyleSheet,
} from 'react-native';

export default function Login({navigation}) {
  const [showPassword, setShowPassword] = useState(false);

  function renderLogo() {
    return (
      <View style={styles.logoWrap}>
        <Image
          style={styles.logo}
          resizeMode="cover"
          source={require('../assets/logo.png')}
        />
      </View>
    );
  }

  function renderForm() {
    return (
      <View style={styles.formWrap}>
        {/* Fullname */}
        <View style={styles.formField}>
          <Text style={styles.formLabel}>Full Name</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Enter Full Name"
            placeholderTextColor="#888787"
            selectionColor="#888787"
          />
        </View>
        {/* FullnameEnd */}

        {/* Password */}
        <View style={styles.formField}>
          <Text style={styles.formLabel}>Password</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Enter Password"
            placeholderTextColor="#888787"
            selectionColor="#888787"
            secureTextEntry={!showPassword}
          />

          <TouchableOpacity
            style={styles.wrapIcon}
            onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={
                showPassword
                  ? require('../assets/disable_eye.png')
                  : require('../assets/eye.png')
              }
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        {/* PasswordEnd */}
      </View>
    );
  }

  function renderButton() {
    return (
      <View style={styles.btnWrap}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btnLabel}>Login</Text>
        </TouchableOpacity>

        <View style={styles.textWrap}>
          <Text style={styles.question}>Don't have an account ?</Text>
          <Text style={styles.createAcc}>Create an account !</Text>
        </View>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'null'}>
      <ScrollView style={{backgroundColor: '#fff'}}>
        {renderLogo()}
        {renderForm()}
        {renderButton()}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  logoWrap: {
    marginTop: 40,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 180,
    height: 180,
  },
  formWrap: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  formField: {
    marginTop: 20,
  },
  formInput: {
    borderBottomColor: '#888787',
    borderBottomWidth: 1,
    height: 40,
    color: '#888787',
    opacity: 0.6,
    fontFamily: 'MontserratLight',
  },
  formLabel: {
    color: '#327fe3',
    fontFamily: 'MontserratSemiBold',
  },
  wrapIcon: {
    position: 'absolute',
    right: 0,
    bottom: 10,
    height: 30,
    width: 30,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#888787',
  },
  btnWrap: {
    marginVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    height: 60,
    backgroundColor: '#327fe3',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 320,
  },
  btnLabel: {
    color: '#fff',
    fontFamily: 'MontserratSemiBold',
  },
  textWrap: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    color: '#888787',
    fontFamily: 'MontserratSemiBold',
    fontSize: 11,
    marginRight: 5,
  },
  createAcc: {
    color: '#327fe3',
    fontFamily: 'MontserratSemiBold',
    fontSize: 11,
  },
});