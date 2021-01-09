import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SubBody from './SubBody';

export default function Body() {
  return (
    <View>
      <View style={styles.body}>
        <Text style={styles.text}>My Course</Text>
        <SubBody />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    marginTop: -30,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  text: {
    padding: 20,
    fontSize: 16,
    fontFamily: 'MontserratSemiBold',
  },
});
