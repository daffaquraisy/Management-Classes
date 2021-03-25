import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AddNew() {
  return (
    <View>
      <ScrollView>
        <View style={styles.wrap}>
          <View style={styles.header}>
            <View style={{marginTop: 50, marginLeft: 20}}>
              <Text style={styles.title}>Add New Note</Text>
            </View>
          </View>
          <View style={styles.formWrap}>
            <Text
              style={{
                color: '#888787',
                marginTop: 20,
                marginLeft: 20,
                fontFamily: 'NunitoRegular',
              }}>
              Please to fill all this form.
            </Text>
            <View>
              {/* Title */}
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Title</Text>
                <Icon name="book" style={styles.iconFA} size={20} />
                <TextInput
                  style={styles.formInput}
                  placeholder="Enter Title"
                  placeholderTextColor="#888787"
                  selectionColor="#aeaeae"
                />
              </View>
              {/* TitleEnd */}

              {/* Title */}
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Courses</Text>
                <Icon name="clipboard" style={styles.iconFA} size={20} />
                <TextInput
                  style={styles.formInput}
                  placeholder="Enter Courses"
                  placeholderTextColor="#888787"
                  selectionColor="#aeaeae"
                />
              </View>
              {/* TitleEnd */}

              {/* DueDate */}
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Due Date</Text>
                <Icon name="calendar" style={styles.iconFA} size={20} />
                <TextInput
                  style={styles.formInput}
                  placeholder="Enter Due Date"
                  placeholderTextColor="#888787"
                  selectionColor="#aeaeae"
                />
              </View>
              <Text
                style={{
                  color: '#888787',
                  fontFamily: 'NunitoRegular',
                  fontSize: 10,
                  marginHorizontal: 20,
                }}>
                ex: 06 August 2021
              </Text>
              {/* DueDateEnd */}

              {/* Desc */}
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Description</Text>

                <TextInput
                  style={styles.formInputDesc}
                  placeholder="Enter Description"
                  placeholderTextColor="#888787"
                  selectionColor="#aeaeae"
                />
              </View>
              {/* DescEnd */}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#327fe3',
    width: 400,
    height: 100,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'NunitoSemiBold',
  },
  formWrap: {
    backgroundColor: '#fff',
    height: 500,
    borderRadius: 10,
    top: -10,
  },
  formField: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  formInput: {
    borderColor: '#efefef',
    borderWidth: 1.3,
    height: 40,
    color: '#000',
    opacity: 0.6,
    fontFamily: 'NunitoLight',
    borderRadius: 3,
    backgroundColor: '#efefef',
  },
  formInputDesc: {
    borderColor: '#efefef',
    borderWidth: 1.3,
    height: 90,
    color: '#000',
    opacity: 0.6,
    fontFamily: 'NunitoLight',
    borderRadius: 3,
    backgroundColor: '#efefef',
  },
  formLabel: {
    color: '#327fe3',
    fontFamily: 'NunitoSemiBold',
    marginBottom: 7,
    fontSize: 12.5,
  },
  wrapIcon: {
    position: 'absolute',
    right: 0,
    bottom: 1,
    height: 30,
    width: 30,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#888787',
  },
  iconFA: {
    position: 'absolute',
    right: 0,
    bottom: 1,
    height: 30,
    width: 25,
    color: '#888787',
  },
});
