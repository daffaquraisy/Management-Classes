import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Content from './Content';

export default function MidBody() {
  return (
    <View>
      <View style={styles.body}>
        <Text style={styles.text}>Recently Homeworks</Text>
        <View style={styles.wrap}>
          <View style={styles.boxBlue}>
            <View style={{marginLeft: 7}}>
              <View style={styles.boxWhite}>
                <View style={styles.contentWrap}>
                  <Content />
                </View>
              </View>
            </View>
            <View style={styles.labelWrap}>
              <View style={styles.label}>
                <Text style={styles.labelText}>HISTORY</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#efefef',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 130,
  },
  text: {
    padding: 20,
    fontSize: 16,
    fontFamily: 'MontserratSemiBold',
  },
  wrap: {
    alignItems: 'center',
    height: '100%',
  },
  boxWhite: {
    height: '100%',
    width: 300,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#fff',
    height: '100%',
  },
  boxBlue: {
    height: '100%',
    width: 300,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#327fe3',
  },
  labelWrap: {
    position: 'absolute',
    marginLeft: 40,
    marginTop: -7,
  },
  label: {
    height: 20,
    width: 80,
    backgroundColor: '#327fe3',
    borderRadius: 30,
  },
  labelText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    fontSize: 9,
    marginTop: 3,
  },
  contentWrap: {
    justifyContent: 'flex-start',
    marginTop: 15,
    marginLeft: 20,
    alignItems: 'flex-start',
  },
});
