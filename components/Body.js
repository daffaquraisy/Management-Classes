import React from 'react';
import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';

export default function Body() {
  return (
    <View>
      <View style={styles.body}>
        <Text style={styles.text}>My Course</Text>
        <View style={styles.jadwal}>
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
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -30,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  text: {
    padding: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  jadwal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
  },
  box: {
    height: 100,
    width: 230,
    borderRadius: 10,
    backgroundColor: '#327fe3',
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
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
  },
  pr: {
    marginLeft: 18,
    fontSize: 8,
    color: '#fff',
    marginTop: 4,
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
