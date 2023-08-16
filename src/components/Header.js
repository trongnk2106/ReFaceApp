import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { AppImages } from '../assets';

const Header = ({
  title = "Home"
}
  ) => {
  return (
    <View style={styles.header}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={styles.headerTextBold}> {title}</Text>
        </View>
        <Image
        style={{ width: 60, height: 60 }}
        source={AppImages.design_header_image}
        />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({  
    header: {
    flexDirection: 'row',
    paddingTop: 8,
    paddingHorizontal: 18,
  },
  headerTextNormal: {
    color: 'grey',
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.2,
  },
  headerTextBold: {
    color: 'black',
    fontSize: 22,
    fontFamily: 'WorkSans-Bold',
    letterSpacing: 0.2,
  },})