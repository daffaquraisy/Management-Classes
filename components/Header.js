import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {getData} from '../utils';

export default function Header() {
  const [name, setName] = useState('');

  useEffect(() => {
    getData('userProfile')
      .then((res) => setName(res.data.fullname))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.header}>
      <Image style={styles.img} source={require('../assets/me.png')} />
      <View>
        <Text style={styles.text}>{name}</Text>
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
    fontFamily: 'NunitoSemiBold',
  },
  kelas: {
    color: 'white',
    fontSize: 12,
    marginLeft: 18,
    fontFamily: 'NunitoLight',
  },
});
