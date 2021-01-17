import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function Profile() {
  return (
    <ScrollView>
      <View style={{backgroundColor: '#fff'}}>
        <View style={styles.header}>
          <View style={styles.textWrap}>
            <Text style={styles.name}>Daffa Quraisy</Text>
            <Text style={styles.kelas}>Teknik Informatika</Text>
          </View>
        </View>
        <View style={styles.bodyWrap}>
          <View style={styles.body}>
            <Image style={styles.img} source={require('../assets/me.png')} />

            <View style={styles.btnWrap}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnLabel}>Logout</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bioWrap}>
              <Text style={styles.title}>Data Pribadi</Text>
            </View>
            <View
              style={{
                borderWidth: 0.4,
                color: '#888787',
                opacity: 0.3,
                marginHorizontal: 20,
              }}></View>

            <View style={styles.info}></View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 150,
    backgroundColor: '#327fe3',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bodyWrap: {
    alignItems: 'center',
    height: 600,
  },
  body: {
    backgroundColor: '#fff',
    marginTop: -50,
    borderRadius: 10,
    height: '70%',
    width: '90%',
    elevation: 5,
  },
  img: {
    height: 100,
    width: 100,
    top: -50,
    left: 20,
    borderWidth: 5,
    borderRadius: 50,
    borderColor: '#fff',
  },
  textWrap: {
    alignItems: 'flex-start',
    marginTop: 50,
    marginLeft: 50,
  },
  name: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 15,
    color: '#fff',
  },
  kelas: {
    fontFamily: 'MontserratLight',
    fontSize: 13,
    color: '#fff',
  },
  btnWrap: {
    alignItems: 'flex-end',
    marginRight: 20,
    right: 40,
    top: -90,
  },
  btn: {
    height: 40,
    width: 80,
    backgroundColor: '#327fe3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnLabel: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'MontserratSemiBold',
  },
  bioWrap: {
    marginTop: -80,
    marginLeft: 20,
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
    fontFamily: 'MontserratSemiBold',
  },
});
