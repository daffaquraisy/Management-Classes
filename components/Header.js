import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image style={styles.img} source={require('../assets/me.png')} />
      <View>
        <Text style={styles.text}>Daffa Quraisy</Text>
        <Text style={styles.kelas}>Teknik Informatika</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 150,
    backgroundColor: '#327fe3',
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    height: 50,
    width: 50,
    marginLeft: 20,
  },
  text: {
    color: 'white',
    marginLeft: 18,
    fontFamily: 'MontserratSemiBold',
  },
  kelas: {
    color: 'white',
    fontSize: 12,
    marginLeft: 18,
    fontFamily: 'MontserratLight',
  },
});
