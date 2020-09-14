import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import AttendanceScreen from './screens/AttendanceScreen';
import ResultScreen from './screens/ResultScreen';

import firebase from 'firebase';
import db from './config';

export default function App() {
  return (
    <View>
      <AppContainer />
    </View>
  );
}

var AppNavigator = createSwitchNavigator({
  AttendanceScreen: AttendanceScreen,
  ResultScreen: ResultScreen,
});

const AppContainer = createAppContainer(AppNavigator);
