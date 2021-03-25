import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

export default function List() {
  return (
    <ScrollView>
      <View style={styles.bodyWrap}>
        <View style={{marginVertical: 5}}>
          <Text style={styles.daysTitle}>Senin</Text>
        </View>
        <View style={styles.boxWhite}>
          <View style={{margin: 10}}>
            <View style={styles.label}>
              <Text style={styles.labelText}>Kuliah</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  top: -6,
                  fontSize: 9,
                  fontFamily: 'NunitoSemiBold',
                  color: '#252b46',
                }}>
                Qira'ah Bashithoh
              </Text>

              <Text
                style={{
                  top: -6,
                  fontSize: 9,
                  fontFamily: 'NunitoLight',
                  color: '#888787',
                }}>
                8.00 - 9.40
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.boxWhite}>
          <View style={{margin: 10}}>
            <View style={styles.label}>
              <Text style={styles.labelText}>Kuliah</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  top: -6,
                  fontSize: 9,
                  fontFamily: 'NunitoSemiBold',
                  color: '#252b46',
                }}>
                Istima Al-Hamisy
              </Text>

              <Text
                style={{
                  top: -6,
                  fontSize: 9,
                  fontFamily: 'NunitoLight',
                  color: '#888787',
                }}>
                10.00 - 11.40
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.boxWhite}>
          <View style={{margin: 10}}>
            <View style={styles.label}>
              <Text style={styles.labelText}>Kuliah</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  top: -6,
                  fontSize: 9,
                  fontFamily: 'NunitoSemiBold',
                  color: '#252b46',
                }}>
                Pendidikan Pancasila
              </Text>

              <Text
                style={{
                  top: -6,
                  fontSize: 9,
                  fontFamily: 'NunitoLight',
                  color: '#888787',
                }}>
                13.00 - 14.40
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.boxWhite}>
          <View style={{margin: 10}}>
            <View style={styles.label}>
              <Text style={styles.labelText}>Kuliah</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  top: -6,
                  fontSize: 9,
                  fontFamily: 'NunitoSemiBold',
                  color: '#252b46',
                }}>
                Qira'ah Bashithoh
              </Text>

              <Text
                style={{
                  top: -6,
                  fontSize: 9,
                  fontFamily: 'NunitoLight',
                  color: '#888787',
                }}>
                15.00 - 16.20
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bodyWrap: {
    margin: 20,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  boxWhite: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
  },
  daysTitle: {
    fontFamily: 'NunitoSemiBold',
    color: '#252b46',
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
});
