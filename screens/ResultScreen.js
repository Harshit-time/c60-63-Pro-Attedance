import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import db from '../config';

import AttendanceScreen from '../screens/AttendanceScreen'

var attendanceRef, attendance;    
var a1,
  a2,
  a3,         
  a4,
  a5;

          
export default class Total extends React.Component {
       
  getAttendance = () => {
    attendanceRef = db.ref('/'); 
    attendanceRef.on('value', (data) => {
      attendance = data.val();
    
    a1 = attendance.abhijeet;
    a2 = attendance.bhavya;
    a3 = attendance.chetan;
    a4 = attendance.harshit;
    a5 = attendance.rishab;

    });
  };
   
  render() {
    return (
      <View style={{ marginTop: 25, marginLeft: 30 }}>
        {this.getAttendance()}
  <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Abhijeet: {a1}</Text>
  <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Bhavya : {a2}</Text>
  <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Chetan: {a3}</Text>
  <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Harshit: {a4}</Text>
  <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Rishab: {a5}</Text>
      </View>
    );
  }
}
