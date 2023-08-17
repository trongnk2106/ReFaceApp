import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyPressable from '../components/MyPressable';



export default function ImageButton({ 
    text,onPress,
}) {
  return (
  <View style={{ margin: 7 }}>
    <View style={styleCatrgory(true).categoryBtnContainer}>
      <MyPressable touchOpacity={0.6} onPress={onPress}>
        <Text style={styleCatrgory(true).categoryBtnText}>
          {text}
        </Text>
      </MyPressable>
    </View>
  </View>
  )
}

const styleCatrgory = (selected) =>
  StyleSheet.create({
    categoryBtnContainer: {
      flex: 1,
      overflow: 'hidden',
      borderRadius: 7,
      borderColor: 'rgb(0, 182, 240)',
      borderWidth: 1,
      backgroundColor:  'transparent',
    },
    categoryBtnText: {
      padding: 18,
      paddingVertical: 12,
      fontSize: 12,
      fontFamily: 'WorkSans-SemiBold',
      letterSpacing: 0.27,
      alignSelf: 'center',
      color:'rgb(0, 182, 240)',
    },
  });