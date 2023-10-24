import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { icons } from '../assets';

const Header = ({
  title = "Revolutionize Your Portraits: Your AI Hubs Awaits"
}
) => {
  return (
    <View style={styles.header}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        {/* <Text style={styles.headerTextBold}> {title}</Text> */}
        {title === "Revolutionize Your Portraits: Your AI Hubs Awaits" ?
          <>
            <Text style={styles.headerTextBold}> Revolutionize Your Portraits:</Text>
            <Text style={styles.headerTextBold}> Your AI Hubs Awaits</Text>
          </>
          : <Text style={styles.headerTextBold}> {title}</Text>
        }
      </View>
      <Image
        style={{ width: 45, height: 45 }}
        source={icons.setup}
      />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingHorizontal: 18,
  },
  headerTextNormal: {
    color: 'grey',
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.2,
  },
  headerTextBold: {
    color: '#EB6C6C',
    fontSize: 22,
    fontFamily: 'WorkSans',
    marginLeft: 0,
    letterSpacing: 0.4,
  },
})