import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {getData} from '../utils';

const Screen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData('token').then((res) => {
        if (res) {
          navigation.reset({index: 0, routes: [{name: 'Home'}]});
        } else {
          navigation.replace('Login');
        }
      });
    }, 2000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{width: 180, height: 180}}
        resizeMode="cover"
        source={require('../assets/logo.png')}
      />
      <View style={{height: 38}} />
    </View>
  );
};

export default Screen;
