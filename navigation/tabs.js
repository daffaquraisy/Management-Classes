import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Profile, List, PR, AddNew} from '../screens';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const TabBarButton = ({
  accessibilityLabel,
  accessibilityState,
  children,
  onPress,
}) => {
  var isSelected = accessibilityState.selected;

  if (isSelected) {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{flexDirection: 'row', position: 'absolute', top: 0}}>
          <View style={{flex: 1, backgroundColor: '#fff'}}></View>
          <View style={{backgroundColor: '#fff'}} width={75} height={61}></View>
          <View style={{flex: 1, backgroundColor: '#fff'}}></View>
        </View>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '95%',
            height: 25,
            borderRadius: 25,
            backgroundColor: '#efefef',
            marginTop: 10,
          }}
          onPress={onPress}>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: 50,
          height: 50,
          backgroundColor: '#fff',
        }}
        activeOpacity={1}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="home"
                  size={20}
                  style={{
                    width: 20,
                    height: 20,
                    color: '#0059D0',
                    marginRight: 5,
                  }}
                />
                <Text
                  style={{
                    fontSize: 10,
                    color: '#0059D0',
                    fontFamily: 'NunitoSemiBold',
                  }}>
                  Home
                </Text>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="home"
                  size={20}
                  style={{
                    width: 20,
                    height: 20,
                    color: '#888787',
                    marginRight: 5,
                  }}
                />
              </View>
            ),
          tabBarButton: (props) => <TabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name="List"
        component={List}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="book"
                  size={20}
                  style={{
                    width: 20,
                    height: 20,
                    color: '#0059D0',
                    marginRight: 5,
                  }}
                />
                <Text
                  style={{
                    fontSize: 10,
                    color: '#0059D0',
                    fontFamily: 'NunitoSemiBold',
                  }}>
                  Schedules
                </Text>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="book"
                  size={20}
                  style={{
                    width: 20,
                    height: 20,
                    color: '#888787',
                    marginRight: 5,
                  }}
                />
              </View>
            ),
          tabBarButton: (props) => <TabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name="AddNew"
        component={AddNew}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="plus"
                  size={20}
                  style={{
                    width: 20,
                    height: 20,
                    color: '#0059D0',
                    marginRight: 5,
                  }}
                />
                <Text
                  style={{
                    fontSize: 10,
                    color: '#0059D0',
                    fontFamily: 'NunitoSemiBold',
                  }}>
                  New
                </Text>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="plus"
                  size={20}
                  style={{
                    width: 20,
                    height: 20,
                    color: '#888787',
                    marginRight: 5,
                  }}
                />
              </View>
            ),
          tabBarButton: (props) => <TabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name="PR"
        component={PR}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="bookmark"
                  size={20}
                  style={{
                    width: 20,
                    height: 20,
                    color: '#0059D0',
                    marginRight: 5,
                  }}
                />
                <Text
                  style={{
                    fontSize: 10,
                    color: '#0059D0',
                    fontFamily: 'NunitoSemiBold',
                  }}>
                  Tasks
                </Text>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="bookmark"
                  size={20}
                  style={{
                    width: 20,
                    height: 20,
                    color: '#888787',
                    marginRight: 5,
                  }}
                />
              </View>
            ),
          tabBarButton: (props) => <TabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="user"
                  size={20}
                  style={{
                    width: 20,
                    height: 20,
                    color: '#0059D0',
                    marginRight: 5,
                  }}
                />
                <Text
                  style={{
                    fontSize: 10,
                    color: '#0059D0',
                    fontFamily: 'NunitoSemiBold',
                  }}>
                  Profile
                </Text>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="user"
                  size={20}
                  style={{
                    width: 20,
                    height: 20,
                    color: '#888787',
                    marginRight: 5,
                  }}
                />
              </View>
            ),
          tabBarButton: (props) => <TabBarButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
