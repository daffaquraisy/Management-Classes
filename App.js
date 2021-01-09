import React from 'react';
import {View, StyleSheet, StatusBar, ScrollView} from 'react-native';
import Header from './components/Header';
import Body from './components/Body';
import MidBody from './components/MidBody';
import Nav from './components/Nav';

export default function App() {
  return (
    <View>
      <ScrollView>
        <StatusBar backgroundColor="#0059D0" barStyle="light-content" />
        <Header />
        <Body />
        {/* <Nav /> */}
        <MidBody />
      </ScrollView>
    </View>
  );
}
