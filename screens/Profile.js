import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function Profile({navigation}) {
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
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Edit')}
                  style={styles.btn}>
                  <Text style={styles.btnLabel}>Edit Profile</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.btnLogout}>
                  <Text style={styles.btnLabel}>Logout</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.bioWrap}>
              <Text style={styles.title}>Data Pribadi</Text>
            </View>
            <View
              style={{
                borderWidth: 0.4,
                color: '#888787',
                opacity: 0.15,
                marginHorizontal: 20,
              }}></View>

            <View style={styles.info}>
              <View>
                <View style={styles.birthBio}>
                  <Text style={styles.bioTl}>Tempat Lahir</Text>
                  <Text style={styles.bioDesc}>Bogor</Text>
                </View>
                <View style={styles.birthBio}>
                  <Text style={styles.bioTl}>Tanggal Lahir</Text>
                  <Text style={styles.bioDesc}>06 Agustus 2002</Text>
                </View>
                <View style={styles.birthBio}>
                  <Text style={styles.bioTl}>Jenis Kelamin</Text>
                  <Text style={styles.bioDesc}>Pria</Text>
                </View>
                <View style={styles.birthBio}>
                  <Text style={styles.bioTl}>Agama</Text>
                  <Text style={styles.bioDesc}>Islam</Text>
                </View>
                <View style={styles.birthBio}>
                  <Text style={styles.bioTl}>Email</Text>
                  <Text style={styles.bioDesc}>daffaquraisy@gmail.com</Text>
                </View>
              </View>

              <View>
                <View style={styles.birthBio}>
                  <Text style={styles.bioTl}>Golongan Darah</Text>
                  <Text style={styles.bioDesc}>O</Text>
                </View>
                <View style={styles.birthBio}>
                  <Text style={styles.bioTl}>Status Perkawinan</Text>
                  <Text style={styles.bioDesc}>Belum Menikah</Text>
                </View>
                <View style={styles.birthBio}>
                  <Text style={styles.bioTl}>Warga Negara</Text>
                  <Text style={styles.bioDesc}>WNI</Text>
                </View>
                <View style={styles.birthBio}>
                  <Text style={styles.bioTl}>Nomor HP</Text>
                  <Text style={styles.bioDesc}>085878085670</Text>
                </View>
              </View>
            </View>

            {/* Akademik */}
            <View style={styles.akaWrap}>
              <Text style={styles.title}>Data Akademik</Text>
            </View>
            <View
              style={{
                borderWidth: 0.4,
                color: '#888787',
                opacity: 0.15,
                marginHorizontal: 20,
              }}></View>

            <View style={styles.info}>
              <View>
                <View style={styles.birthBio}>
                  <Text style={styles.bioTl}>Jalur Masuk</Text>
                  <Text style={styles.bioDesc}>UTM-BK</Text>
                </View>
                <View style={styles.birthBio}>
                  <Text style={styles.bioTl}>Tanggal Masuk</Text>
                  <Text style={styles.bioDesc}>06 Agustus 2020</Text>
                </View>
              </View>
            </View>

            {/* Pendidikan */}
            <View style={styles.penWrap}>
              <Text style={styles.title}>Data Pendidikan</Text>
            </View>
            <View
              style={{
                borderWidth: 0.4,
                color: '#888787',
                opacity: 0.15,
                marginHorizontal: 20,
              }}></View>

            <View style={styles.info}>
              <View>
                <View style={styles.birthBio}>
                  <Text style={styles.bioTl}>Pendidikan Sebelumnya</Text>
                  <Text style={styles.bioDesc}>SMK</Text>
                </View>
                <View style={styles.birthBio}>
                  <Text style={styles.bioTl}>Asal Pendidikan</Text>
                  <Text style={styles.bioDesc}>SMKS BINA INFORMATIKA</Text>
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
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bodyWrap: {
    alignItems: 'center',
    height: 600,
  },
  body: {
    backgroundColor: '#fff',
    marginTop: -60,
    borderRadius: 5,
    height: '100%',
    width: '90%',
    elevation: 5,
  },
  img: {
    height: 85,
    width: 85,
    top: -50,
    left: 20,
    borderWidth: 5,
    borderRadius: 50,
    borderColor: '#fff',
  },
  textWrap: {
    alignItems: 'flex-start',
    marginTop: 45,
    marginLeft: 45,
  },
  name: {
    fontFamily: 'NunitoSemiBold',
    fontSize: 15,
    color: '#fff',
  },
  kelas: {
    fontFamily: 'NunitoLight',
    fontSize: 13,
    color: '#fff',
  },
  btnWrap: {
    alignItems: 'flex-start',
    left: 120,
    top: -75,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  btn: {
    height: 30,
    width: 90,
    backgroundColor: '#327fe3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginHorizontal: 5,
  },
  btnLogout: {
    height: 30,
    width: 90,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  btnLabel: {
    color: '#fff',
    fontSize: 10,
    fontFamily: 'NunitoSemiBold',
  },
  bioWrap: {
    marginTop: -60,
    marginHorizontal: 20,
    marginBottom: 5,
  },
  title: {
    fontSize: 12.1,
    fontFamily: 'NunitoSemiBold',
    color: '#252b46',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  birthBio: {
    marginVertical: 9.5,
  },
  bioTl: {
    fontSize: 10,
    fontFamily: 'NunitoSemiBold',
    textAlign: 'left',
    color: '#252b46',
  },
  bioDesc: {
    fontSize: 12,
    fontFamily: 'NunitoLight',
    textAlign: 'left',
    color: '#888787',
  },
  akaWrap: {
    marginTop: 5,
    marginHorizontal: 20,
    marginBottom: 5,
  },
  penWrap: {
    marginTop: 5,
    marginHorizontal: 20,
    marginBottom: 5,
  },
});
