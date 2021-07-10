import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {setLoading, signUpAction} from '../redux/action';
import {useForm} from '../utils';

export default function Register({navigation}) {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useForm({
    fullname: '',
    email: '',
    phone: '',
    password: '',
  });

  const dispatch = useDispatch();
  const {registerReducer} = useSelector((state) => state);

  const onSubmit = () => {
    // store to redux
    const data = {
      ...form, // value from state form
      ...registerReducer, // old value from state register
    };

    // show loading loader with action
    dispatch(setLoading(true));

    // post through API with action
    dispatch(signUpAction(data, navigation));
  };

  function renderHeader() {
    return (
      <TouchableOpacity
        style={styles.headerWrap}
        onPress={() => navigation.navigate('Login')}>
        <Image
          source={require('../assets/back.png')}
          resizeMode="contain"
          style={styles.iconBack}
        />
        <Text style={styles.backBtn}>Back</Text>
      </TouchableOpacity>
    );
  }

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
          <Icon name="user" style={styles.iconFA} size={20} />
          <TextInput
            style={styles.formInput}
            placeholder="Enter Full Name"
            placeholderTextColor="#888787"
            selectionColor="#aeaeae"
            value={form.fullname}
            onChangeText={(value) => setForm('fullname', value)}
          />
        </View>
        {/* FullnameEnd */}

        {/* Email */}
        <View style={styles.formField}>
          <Text style={styles.formLabel}>Email</Text>
          <Icon name="envelope" style={styles.iconFA} size={18} />
          <TextInput
            style={styles.formInput}
            placeholder="Enter Email"
            placeholderTextColor="#888787"
            selectionColor="#aeaeae"
            keyboardType="email-address"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
        </View>
        {/* EmailEnd */}

        {/* Phone */}
        <View style={styles.formField}>
          <Text style={styles.formLabel}>Phone Number</Text>
          <Icon name="phone" style={styles.iconFA} size={18} />
          <TextInput
            style={styles.formInput}
            placeholder="Enter Phone Number"
            placeholderTextColor="#888787"
            selectionColor="#aeaeae"
            keyboardType="numeric"
            value={form.phone}
            onChangeText={(value) => setForm('phone', value)}
          />
        </View>
        {/* PhoneEnd */}

        {/* Password */}
        <View style={styles.formField}>
          <Text style={styles.formLabel}>Password</Text>

          <TextInput
            style={styles.formInput}
            placeholder="Enter Password"
            placeholderTextColor="#888787"
            selectionColor="#aeaeae"
            secureTextEntry={!showPassword}
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
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
        <TouchableOpacity style={styles.btn} onPress={onSubmit}>
          <Text style={styles.btnLabel}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'null'}>
      <ScrollView style={{backgroundColor: '#fff'}}>
        {renderHeader()}
        {renderLogo()}
        {renderForm()}
        {renderButton()}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  logoWrap: {
    marginTop: 20,
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
    borderColor: '#efefef',
    borderWidth: 1.3,
    height: 40,
    color: '#000',
    opacity: 0.6,
    fontFamily: 'NunitoLight',
    borderRadius: 3,
    backgroundColor: '#efefef',
  },
  formLabel: {
    color: '#327fe3',
    fontFamily: 'NunitoSemiBold',
    marginBottom: 7,
    fontSize: 12.5,
  },
  wrapIcon: {
    position: 'absolute',
    right: 0,
    bottom: 1,
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
    width: 300,
  },
  btnLabel: {
    color: '#fff',
    fontFamily: 'NunitoSemiBold',
  },
  textWrap: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    color: '#888787',
    fontFamily: 'NunitoSemiBold',
    fontSize: 11,
    marginRight: 5,
  },
  createAcc: {
    color: '#327fe3',
    fontFamily: 'NunitoSemiBold',
    fontSize: 11,
  },
  iconFA: {
    position: 'absolute',
    right: 0,
    bottom: 1,
    height: 30,
    width: 25,
    color: '#888787',
  },
  backBtn: {
    marginLeft: 10,
    color: '#327fe3',
    fontFamily: 'NunitoSemiBold',
  },
  headerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  iconBack: {
    width: 20,
    height: 20,
    tintColor: '#327fe3',
  },
});
