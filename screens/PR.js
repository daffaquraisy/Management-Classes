import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function PR() {
  return (
    <View>
      <ScrollView>
        <View style={styles.wrap}>
          <View style={styles.boxWhite}>
            <View style={{margin: 10}}>
              <View style={styles.label}>
                <Text style={styles.labelText}>PAI</Text>
              </View>

              <View>
                <Text style={styles.title}>RAHMAT ISLAM BAGI NUSANTARA</Text>
              </View>

              <View>
                <Text style={styles.caption}>
                  Terdapat tiga teori yang dikemukakan para ahli sejarah terkait
                  dengan masuknya agama Islam ke Indonesia.
                </Text>
              </View>

              <View style={{alignItems: 'flex-end', marginTop: 15}}>
                <View style={styles.dateWrap}>
                  <Image
                    style={styles.img}
                    source={require('../assets/datePick.png')}
                  />

                  <Text style={styles.date}>04 August 2020</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.wrap}>
          <View style={styles.boxBlue}></View>
          <View style={styles.boxWhite}>
            <View style={{margin: 10}}>
              <View style={styles.label}>
                <Text style={styles.labelText}>MATH</Text>
              </View>

              <View>
                <Text style={styles.title}>ALJABAR</Text>
              </View>

              <View>
                <Text style={styles.caption}>
                  Pada materi ini, kamu akan diperkenalkan pada 3 sifat yang
                  akan berlaku pada aljabar.
                </Text>
              </View>

              <View style={{alignItems: 'flex-end', marginTop: 15}}>
                <View style={styles.dateWrap}>
                  <Image
                    style={styles.img}
                    source={require('../assets/datePick.png')}
                  />

                  <Text style={styles.date}>04 August 2020</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.wrap}>
          <View style={styles.boxWhite}>
            <View style={{margin: 10}}>
              <View style={styles.label}>
                <Text style={styles.labelText}>BIOLOGY</Text>
              </View>

              <View>
                <Text style={styles.title}>GENETIKA</Text>
              </View>

              <View>
                <Text style={styles.caption}>
                  Genetika merupakan studi ilmu yang mempelajari sifat
                  keturunan.
                </Text>
              </View>

              <View style={{alignItems: 'flex-end', marginTop: 15}}>
                <View style={styles.dateWrap}>
                  <Image
                    style={styles.img}
                    source={require('../assets/datePick.png')}
                  />

                  <Text style={styles.date}>05 August 2020</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.wrap}>
          <View style={styles.boxWhite}>
            <View style={{margin: 10}}>
              <View style={styles.label}>
                <Text style={styles.labelText}>PAI</Text>
              </View>

              <View>
                <Text style={styles.title}>RAHMAT ISLAM BAGI NUSANTARA</Text>
              </View>

              <View>
                <Text style={styles.caption}>
                  Terdapat tiga teori yang dikemukakan para ahli sejarah terkait
                  dengan masuknya agama Islam ke Indonesia.
                </Text>
              </View>

              <View style={{alignItems: 'flex-end', marginTop: 15}}>
                <View style={styles.dateWrap}>
                  <Image
                    style={styles.img}
                    source={require('../assets/datePick.png')}
                  />

                  <Text style={styles.date}>04 August 2020</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.paginationWrap}>
        <TouchableOpacity
          style={styles.headerWrap}
          onPress={() => console.log('Jomblo')}>
          <Image
            source={require('../assets/back.png')}
            resizeMode="contain"
            style={styles.iconBack}
          />
          <View
            style={{
              padding: 20,
              borderRadius: 20,
              width: 30,
              backgroundColor: '#327fe3',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.backBtn}>1</Text>
          </View>
          <Image
            source={require('../assets/back.png')}
            resizeMode="contain"
            style={styles.iconBackFlip}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
  },
  boxWhite: {
    backgroundColor: '#fff',
    // position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  label: {
    backgroundColor: '#327fe3',
    width: 50,
    alignItems: 'center',
    borderRadius: 10,
    top: -15,
    left: 15,
    // position: 'absolute',
  },
  labelText: {
    color: '#fff',
    fontSize: 7.6,
    fontFamily: 'NunitoSemiBold',
  },
  title: {
    top: -6,
    fontSize: 9,
    fontFamily: 'NunitoSemiBold',
  },
  dateWrap: {
    flexDirection: 'row',
    // top: -6,
    margin: 1,
  },
  date: {
    fontSize: 9,
    fontFamily: 'NunitoSemiBold',
    marginLeft: 4,
  },
  img: {
    height: 11,
    width: 11,
  },
  caption: {
    color: '#888787',
    fontFamily: 'NunitoLight',
    fontSize: 10,
  },
  paginationWrap: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  backBtn: {
    marginLeft: 10,
    marginRight: 10,
    color: '#fff',
    fontFamily: 'NunitoSemiBold',
    position: 'absolute',
  },
  headerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  iconBackFlip: {
    width: 20,
    height: 20,
    tintColor: '#327fe3',
    transform: [{rotate: '180deg'}],
    marginLeft: 10,
  },
  iconBack: {
    width: 20,
    height: 20,
    tintColor: '#327fe3',
    marginRight: 10,
  },
});
