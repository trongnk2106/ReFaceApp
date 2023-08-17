import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { AppImages } from '../assets';
import Button from '../misc/Button';

export default function Footer({
}) {
  const navigation = useNavigation();
    return (
        <View style={styles.footer}>
            <View style={{ flex: 1, justifyContent: 'center', flexDirection:'row',}}>
              {/* <Text style={styles.headerTextBold}> {title}</Text> */}
              <Button title='Home' onClick={() => navigation.navigate('Home')}></Button>
              <Button title='Feature'></Button>
              <Button title='History'></Button>
              <Button title='Setting'></Button>
            </View>
        </View>
      )
}

const styles = StyleSheet.create({  
    footer: {
    flexDirection:'column',
    paddingTop: 8,
    paddingHorizontal: 18,
    width: '100%',
    height: 60

  },
  footerTextNormal: {
    color: 'grey',
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.2,
  },
  footerTextBold: {
    color: 'black',
    fontSize: 22,
    fontFamily: 'WorkSans-Bold',
    letterSpacing: 0.2,
  },})