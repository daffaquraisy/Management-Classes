import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getHomeworksData} from '../redux/action';

export default function Content() {
  const dispatch = useDispatch();
  const {homework} = useSelector((state) => state.hwReducer);

  useEffect(() => {
    dispatch(getHomeworksData());
  }, []);

  return (
    <View>
      {homework.map((item) => {
        return (
          <View>
            <View style={styles.wrap}>
              <Text style={styles.title}>{item.hTitle}</Text>

              <View style={styles.label}>
                <Text style={styles.labelText}>{item.hCourse}</Text>
              </View>
            </View>
            <Text style={styles.caption}>{item.hDescription}</Text>
            <View style={styles.dateWrap}>
              <Image
                style={styles.img}
                source={require('../assets/datePick.png')}
              />

              <Text style={styles.date}>{item.hDueDate}</Text>
            </View>
            <View style={styles.line}></View>
          </View>
        );
      })}
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
    fontFamily: 'NunitoSemiBold',
    color: '#252b46',
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
    fontFamily: 'NunitoSemiBold',
  },
  caption: {
    color: '#888787',
    marginTop: 8,
    fontFamily: 'NunitoLight',
    fontSize: 10,
  },
  dateWrap: {
    flexDirection: 'row',
    marginTop: 10,
  },
  date: {
    fontSize: 11,
    fontFamily: 'NunitoSemiBold',
    marginLeft: 4,
    marginTop: 3,
    color: '#252b46',
  },
  img: {
    height: 18,
    width: 18,
  },
  line: {
    marginTop: 10,
    borderBottomColor: '#acacac',
    borderBottomWidth: 1,
    backgroundColor: '#888787',
    width: 230,
  },
});
