import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MyPressable from '../components/MyPressable';
import { icons } from '../assets';


export default function ImageButton({
  text, 
  onPress,
  isIcon = true,
}) {
  return (
    <View style={{ margin: 7 }}>
      <View style={styleCatrgory(true).categoryBtnContainer}>
        <MyPressable touchOpacity={0.6} onPress={onPress} style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
          <Text style={styleCatrgory(true).categoryBtnText}>
            {text}
          </Text>
          {isIcon && <Image source={icons.snow} style={{ marginTop: 10 }}></Image>}
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
      borderRadius: 20,
      backgroundColor: '#1076D5',
      marginBottom: 10
    },
    categoryBtnText: {
      padding: 25,
      paddingVertical: 12,
      fontSize: 16,
      fontFamily: 'WorkSans-SemiBold',
      letterSpacing: 0.27,
      alignSelf: 'center',
      color: 'white',
      paddingRight: 0,
    },
  });