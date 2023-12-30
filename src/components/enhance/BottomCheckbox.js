import React, { useEffect, useRef, useState } from 'react';
import {
    StyleSheet,
    View,
    useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { AppImages } from '../../assets';
import Checkbox from '../../misc/Checkbox';

export default function BottomCheckbox(
    {
        isRemove, setIsRemove,
        isEnhance, setIsEnhance,
        isUpscaler, setIsUpscaler
    }
) {
    const navigation = useNavigation();
    const insert = useSafeAreaInsets()
    const window = useWindowDimensions();


    return (<>
        <View style={[styles.searchInputMainContainer, {
            width: window.width * 0.9, height: window.width / 2
        }]}>
            <View style={styles.searchInputContainer}>
                <Checkbox isChecked={isRemove} setChecked={setIsRemove} label="Remove Backround" />
                <Checkbox isChecked={isEnhance} setChecked={setIsEnhance} label="Enhance Face" />
                <Checkbox isChecked={isUpscaler} setChecked={setIsUpscaler} label="Upscaler" />
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
        backgroundColor: '#F8FAFB',
        marginVertical: 8,
        borderRadius: 13,
        paddingHorizontal: 16,
        flexGrow: 1
    },
});