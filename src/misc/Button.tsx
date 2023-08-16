import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import MyPressable from '../components/MyPressable';

export default function Button({
    title = "Home",
    onClick =  ()=> {}
}) {
  return (
    <View style={styles.joinCourse}>
        <MyPressable onPress = {onClick}>
        <Text style={styles.joinCourseText}>{title}</Text>
        </MyPressable>
  </View>
  )
}

const styles = StyleSheet.create({
    joinCourse: {
        flex: 1,
        margin:2,
        borderRadius: 5,
        backgroundColor: 'rgb(0, 182, 240)',
        elevation: 4,
        shadowColor: 'rgb(0, 182, 240)',
        shadowOffset: { width: 1.1, height: 1.1 },
        shadowOpacity: 0.5,
        shadowRadius: 10.0,
      },
      joinCourseText: {
        padding: 5,
        paddingVertical: 12,
        fontSize: 15,
        fontFamily: 'WorkSans-SemiBold',
        alignSelf: 'center',
        color: 'white',
        textAlign: 'center',
      },
})