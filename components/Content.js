import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

export default function Content() {
  return (
    <View>
      <View style={styles.wrap}>
        <Text style={styles.title}>ALJABAR</Text>

        <View style={styles.label}>
          <Text style={styles.labelText}>MATH</Text>
        </View>
      </View>
      <Text style={styles.caption}>
        Pada materi ini, kamu akan diperkenalkan pada 3 sifat yang akan berlaku
        pada aljabar.
      </Text>
      <View style={styles.dateWrap}>
        <Image style={styles.img} source={require('../assets/datePick.png')} />

        <Text style={styles.date}>04 August 2020</Text>
      </View>
      <View style={styles.line}></View>

      <View style={styles.wrap}>
        <Text style={styles.title}>GENETIKA</Text>

        <View style={styles.label}>
          <Text style={styles.labelText}>BIOLOGY</Text>
        </View>
      </View>
      <Text style={styles.caption}>
        Genetika merupakan studi ilmu yang mempelajari sifat keturunan.
      </Text>
      <View style={styles.dateWrap}>
        <Image style={styles.img} source={require('../assets/datePick.png')} />

        <Text style={styles.date}>05 August 2020</Text>
      </View>
      <View style={styles.line}></View>

      <View style={styles.wrap}>
        <Text style={styles.title}>RAHMAT ISLAM BAGI NUSANTARA</Text>

        <View style={styles.label}>
          <Text style={styles.labelText}>PAI</Text>
        </View>
      </View>
      <Text style={styles.caption}>
        Terdapat tiga teori yang dikemukakan para ahli sejarah terkait dengan
        masuknya agama Islam ke Indonesia.
      </Text>
      <View style={styles.dateWrap}>
        <Image style={styles.img} source={require('../assets/datePick.png')} />

        <Text style={styles.date}>06 August 2020</Text>
      </View>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    marginTop: 10,
  },
  title: {
    fontSize: 11,
    fontFamily: 'MontserratSemiBold',
  },
  label: {
    height: 13,
    width: 45,
    backgroundColor: '#327fe3',
    borderRadius: 30,
    marginLeft: 10,
    marginTop: 1,
  },
  labelText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 7,
    marginTop: 2,
    fontFamily: 'MontserratSemiBold',
  },
  caption: {
    color: '#888787',
    marginTop: 8,
    fontFamily: 'MontserratLight',
    fontSize: 10,
  },
  dateWrap: {
    flexDirection: 'row',
    marginTop: 10,
  },
  date: {
    fontSize: 11,
    fontFamily: 'MontserratSemiBold',
    marginLeft: 4,
    marginTop: 3,
  },
  img: {
    height: 18,
    width: 18,
  },
  line: {
    marginTop: 10,
    borderBottomColor: '#acacac',
    borderBottomWidth: 1,
  },
});
