import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { icons } from '../assets';
import MyPressable from './MyPressable';
import { useNavigation } from '@react-navigation/native';

const HeaderResult = ({
    goto = 'AiProfile'
}
) => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <MyPressable
                style={{
                    aspectRatio: 0.8,
                    width: 30, height: 20,
                }}
                touchOpacity={0.6}
                onPress={() => navigation.goBack()}
            >
                <Image
                    style={{ width: '100%', height: '100%', }}
                    source={icons.back}
                />

            </MyPressable>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={styles.headerTextBold}> Result</Text>
                {/* {title === "Revolutionize Your Portraits: Your AI Hubs Awaits" ?
                    <>
                        <Text style={styles.headerTextBold}> Revolutionize Your Portraits:</Text>
                        <Text style={styles.headerTextBold}> Your AI Hubs Awaits</Text>
                    </>
                    : <Text style={styles.headerTextBold}> {title}</Text>
                } */}
            </View>
            <MyPressable
                style={{
                    aspectRatio: 0.8,
                     justifyContent: 'center'
                }}
                touchOpacity={0.6}
                onPress={() => navigation.navigate(goto)}
            >
                <Text style={[styles.headerTextBold, {color: '#74B0E7'}]}> Done</Text>

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
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTextNormal: {
        color: 'grey',
        fontFamily: 'WorkSans-Regular',
        letterSpacing: 0.2,
    },
    headerTextBold: {
        color: '#fff',
        fontSize: 22,
        fontFamily: 'WorkSans',
        marginLeft: 0,
        letterSpacing: 0.4,
        textAlign: 'center',
    },
})