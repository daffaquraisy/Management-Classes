import React from 'react';
import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image style={styles.img} source={require('../assets/me.png')} />
      <View>
        <Text style={styles.text}>Hi, Daffa Quraisy</Text>
        <Text style={styles.kelas}>XII RPL</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 200,
    backgroundColor: '#327fe3',
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    height: 50,
    width: 50,
    marginLeft: 20,
    padding: 0,
  },
  text: {
    color: 'white',
    marginLeft: 18,
    fontWeight: 'bold',
  },
  kelas: {
    color: 'white',
    fontSize: 12,
    marginLeft: 18,
    flexWrap: 'nowrap',
  },
});
