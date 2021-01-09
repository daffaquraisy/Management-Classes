import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function Nav() {
  return (
    <View>
      <View style={styles.wrap}>
        <Text>Daffa</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#aeaeae',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 130,
  },
});
