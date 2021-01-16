import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';

export default function Body() {
  return (
    <View>
      <View style={styles.jadwal}>
        <ScrollView horizontal={true}>
          <View style={styles.box}>
            <Text style={styles.title}>Math</Text>
            <View style={styles.wrap}>
              <View style={styles.alert}>
                <Text style={styles.pr}>3 Homework</Text>
                <Image
                  style={styles.img}
                  source={require('../assets/math.png')}
                />
              </View>
            </View>
          </View>

          <View style={styles.box}>
            <Text style={styles.title}>Biology</Text>
            <View style={styles.wrap}>
              <View style={styles.alert}>
                <Text style={styles.pr}>10 Homework</Text>
                <Image
                  style={styles.img}
                  source={require('../assets/math.png')}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  jadwal: {
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'absolute',
  },
  box: {
    height: 100,
    width: 230,
    borderRadius: 10,
    backgroundColor: '#327fe3',
    marginLeft: 10,
    marginRight: 5,
  },
  alert: {
    height: 20,
    marginLeft: 15,
    width: 80,
    borderRadius: 10,
    backgroundColor: '#7CD5FF',
  },
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontFamily: 'MontserratSemiBold',
    fontSize: 15,
    color: '#fff',
  },
  pr: {
    marginLeft: 14,
    fontSize: 8,
    color: '#fff',
    marginTop: 4,
    justifyContent: 'flex-start',
    fontFamily: 'MontserratSemiBold',
  },
  wrap: {
    marginTop: 5,
  },
  img: {
    height: 50,
    width: 50,
    marginLeft: 140,
    marginTop: -35,
  },
});
