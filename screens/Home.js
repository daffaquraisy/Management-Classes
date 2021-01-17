import React from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../components/Header';
import Body from '../components/Body';
import MidBody from '../components/MidBody';

export default function Home() {
  return (
    <View style={{backgroundColor: '#fff'}}>
      <ScrollView>
        <Header />
        <Body />
        <MidBody />
      </ScrollView>
    </View>
  );
}
