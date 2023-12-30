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
import ContainerAiRefaced from '../components/aireface/ContainerAiUpScalered';
import { colors } from '../assets';
import HeaderResult from '../components/HeaderResult';

const AiRefaced = () => {
    const insets = useSafeAreaInsets();

    const paddingTop = Config.isIos
        ? Math.max(insets.top, 20)
        : StatusBar.currentHeight;
    
    return (
        <View style={{ flex: 1, backgroundColor: colors.backround, paddingTop }}>
            <HeaderResult goto='AiReface' />
            <ContainerAiRefaced />
        </View>
    );
};

export default AiRefaced;
