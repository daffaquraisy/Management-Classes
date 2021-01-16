import React from 'react';
import {View, StyleSheet, StatusBar, ScrollView} from 'react-native';
import Home from './screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor="#0059D0" barStyle="light-content" />
        <Home />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
