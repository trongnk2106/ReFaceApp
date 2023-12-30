import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { colors, AppImages } from '../assets';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper'
import { HomeScreen } from '../home';



const SwiperComponent = () => {

    const navigation = useNavigation();
    const handleClick = () => {
        navigation.navigate('Home')
    }
    return (
        <>

            <Swiper style={styles.wrapper} showsButtons={true} onIndexChanged={(index) => {
                
                if (index === 1) {
                    setTimeout(handleClick,
                        50
                    )
                }
            }}>

                <View style={styles.slide1}>
                    <Image source={AppImages.one} />
                    <Text style = {{textAlign: 'center', color: 'white', fontSize: 20, paddingTop : 30 }}> Professional profile pictures</Text>
                </View>
                <View style={styles.slide2}>
                    {/* <Image source={AppImages.thunail1} /> */}
                    {/* <Text style = {{textAlign: 'center', color: 'white', fontSize: 20, paddingTop : 30 }} > Professional artistic pictures</Text> */}
                </View>
             
          
            </Swiper>
            <View style={{ backgroundColor: colors.backround }}>
                <TouchableOpacity onPress={handleClick} activeOpacity={1} touchSoundDisabled={true}
                    style={{ backgroundColor: '#1076D5', padding: 15, borderRadius: 20, marginBottom: 20, marginLeft: 20, marginRight: 20 }} >
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 16 }}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backround,
        // textAlign: 'center', color: 'white', fontSize: 16 
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backround
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backround
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})


export default SwiperComponent;