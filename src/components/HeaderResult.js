import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { icons } from '../assets';
import MyPressable from './MyPressable';
import { useNavigation } from '@react-navigation/native';

const HeaderResult = ({
    title = "Revolutionize Your Portraits: Your AI Hubs Awaits"
}
) => {
    const navigation = useNavigation();

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
            <MyPressable
                style={{
                    aspectRatio: 0.8,
                    width: 45, height: 45,
                }}
                touchOpacity={0.6}
                onPress={() => navigation.navigate('Home')}
            >
                <Image
                    style={{ width: '100%', height: 45 }}
                    source={icons.home}
                />

            </MyPressable>
        </View>
    )
}

export default HeaderResult

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