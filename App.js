import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/Header';
import Body from './components/Body';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});