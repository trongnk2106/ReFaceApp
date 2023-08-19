import React, { useEffect, useRef, useState } from 'react';
import {
    StyleSheet,
    View,
    useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function BottomNone(
    {
    }
) {
    const navigation = useNavigation();
    const window = useWindowDimensions();


    return (<>
        <View style={[styles.searchInputMainContainer, {
            width: window.width * 0.9, height: window.width / 2
        }]}>
            <View style={styles.searchInputContainer}>
            </View>
        </View>
    </>)
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
    },
    searchInputMainContainer: {
        marginTop: 8,
        marginLeft: 18,
    },
    searchInputContainer: {
        flexDirection: 'column',
        backgroundColor: '#FFF',
        marginVertical: 8,
        borderRadius: 13,
        paddingHorizontal: 16,
        flexGrow: 1
    },
});