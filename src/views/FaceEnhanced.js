import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Config from '../Config';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContainerEnhanced from '../components/enhance/ContainerEnhanced';

const FaceEnhanced = () => {
    const { width } = useWindowDimensions();
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    const paddingTop = Config.isIos
        ? Math.max(insets.top, 20)
        : StatusBar.currentHeight;

    return (
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Header title='Face Enhance' />
            <ContainerEnhanced />
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    searchInputMainContainer: {
        marginTop: 8,
        marginLeft: 18,
        height: 64,
    },
    searchInputContainer: {
        flexDirection: 'row',
        backgroundColor: '#F8FAFB',
        marginVertical: 8,
        borderRadius: 13,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'WorkSans-SemiBold',
        color: 'dodgerblue',
    },
    sectionHeaderText: {
        color: 'black',
        fontSize: 22,
        fontFamily: 'WorkSans-SemiBold',
        letterSpacing: 0.27,
        paddingTop: 8,
        paddingLeft: 18,
        paddingRight: 16,
        marginBottom: 16,
    },
    categoryRowContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        marginBottom: 8,
    },
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
    },
});


export default FaceEnhanced;
