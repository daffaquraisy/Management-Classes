import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

export default function List() {
  return (
    <ScrollView>
      <View style={{backgroundColor: '#fff'}}>
        <View style={styles.header}></View>
        <View style={styles.bodyWrap}>
          <View style={styles.body}>
            <View style={styles.textWrap}>
              <Text style={styles.title}>Semester Ganjil</Text>
              <Text style={styles.desc}>Tahun Akademik 2020/2021</Text>
            </View>
            <View style={styles.jadwalWrap}>
              <View style={styles.hariWrap}>
                <Text style={styles.hari}>Senin</Text>
              </View>
              <View style={styles.container}>
                <View style={styles.itemsWrap}>
                  <Text style={styles.jam}>8.00</Text>
                  <View style={styles.dot}></View>
                  <View style={styles.line}></View>
                  <Text style={styles.namaPel}>Qira'ah Basithoh</Text>
                </View>
                <View style={styles.itemsWrapEnd}>
                  <Text style={styles.jam}>9.40</Text>
                  <View style={styles.dotEnd}></View>
                  <View style={styles.box}>
                    <Text style={styles.type}>Kuliah</Text>
                  </View>
                </View>
              </View>

              <View style={styles.container}>
                <View style={styles.itemsWrap}>
                  <Text style={styles.jam}>10.00</Text>
                  <View style={styles.dot}></View>
                  <View style={styles.line}></View>
                  <Text style={styles.namaPel}>Istima Al-Hamisy</Text>
                </View>
                <View style={styles.itemsWrapEnd}>
                  <Text style={styles.jam}>11.40</Text>
                  <View style={styles.dotEnd}></View>
                  <View style={styles.box}>
                    <Text style={styles.type}>Kuliah</Text>
                  </View>
                </View>
              </View>

              <View style={styles.container}>
                <View style={styles.itemsWrap}>
                  <Text style={styles.jam}>13.00</Text>
                  <View style={styles.dot}></View>
                  <View style={styles.line}></View>
                  <Text style={styles.namaPel}>Pendidikan Pancasila</Text>
                </View>
                <View style={styles.itemsWrapEnd}>
                  <Text style={styles.jam}>14.40</Text>
                  <View style={styles.dotEnd}></View>
                  <View style={styles.box}>
                    <Text style={styles.type}>Kuliah</Text>
                  </View>
                </View>
              </View>

              <View style={styles.container}>
                <View style={styles.itemsWrap}>
                  <Text style={styles.jam}>15.00</Text>
                  <View style={styles.dot}></View>
                  <View style={styles.line}></View>
                  <Text style={styles.namaPel}>Qira'ah Basithoh</Text>
                </View>
                <View style={styles.itemsWrapEnd}>
                  <Text style={styles.jam}>16.40</Text>
                  <View style={styles.dotEnd}></View>
                  <View style={styles.box}>
                    <Text style={styles.type}>Kuliah</Text>
                  </View>
                </View>
              </View>
            </View>
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
  },
  bodyWrap: {
    alignItems: 'center',
    height: 600,
  },
  body: {
    backgroundColor: '#fff',
    marginTop: -90,
    borderRadius: 5,
    height: '100%',
    width: '90%',
    elevation: 5,
  },
  textWrap: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 12,
    fontFamily: 'NunitoSemiBold',
    textAlign: 'left',
    color: '#000',
    marginBottom: 5,
  },
  desc: {
    fontSize: 10,
    fontFamily: 'NunitoLight',
    textAlign: 'left',
    color: '#888787',
  },
  jadwalWrap: {
    marginTop: 10,
    alignItems: 'center',
  },
  hariWrap: {
    width: '90%',
    height: 25,
    backgroundColor: '#327fe3',
    justifyContent: 'center',
  },
  hari: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 13,
    fontFamily: 'NunitoLight',
  },
  container: {
    marginVertical: 5,
    height: 100,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5,
  },
  itemsWrap: {
    flexDirection: 'row',
    margin: 10,
  },
  itemsWrapEnd: {
    flexDirection: 'row',
    margin: 10,
    top: -6,
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 50,
    left: 10,
    top: 2,
    borderWidth: 1,
    borderColor: '#327fe3',
  },
  dotEnd: {
    width: 15,
    height: 15,
    borderRadius: 50,
    left: 10.2,
    top: 2,
    backgroundColor: '#327fe3',
    right: 0,
  },
  jam: {
    fontSize: 10.5,
    fontFamily: 'NunitoLight',
    color: '#888787',
  },
  namaPel: {
    fontSize: 11.5,
    fontFamily: 'NunitoLight',
    color: '#888787',
    marginLeft: 20,
  },
  line: {
    height: 50,
    borderWidth: 1,
    borderColor: '#327fe3',
    alignItems: 'center',
    left: 1.5,
    top: 16,
  },
  box: {
    marginHorizontal: 20,
    height: 15,
    width: 45,
    backgroundColor: '#327fe3',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    borderRadius: 2,
  },
  type: {
    fontSize: 9,
    fontFamily: 'NunitoSemiBold',
    color: '#fff',
  },
});
