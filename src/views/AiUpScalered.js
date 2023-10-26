import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useData } from '../context/useData';
import Config from '../Config';
import { colors } from '../assets';
import HeaderResult from '../components/HeaderResult';
import ContainerAiUpScalered from '../components/aiupscaler/ContainerAiUpScalered';

const AiUpScalered = () => {
    const insets = useSafeAreaInsets();
    const route = useRoute()
    const { done } = route.params

    const paddingTop = Config.isIos
        ? Math.max(insets.top, 20)
        : StatusBar.currentHeight;


    return (
        <View style={{ flex: 1, backgroundColor: colors.backround, paddingTop }}>
            <HeaderResult title='AI Profile' goto={done}/>
            <ContainerAiUpScalered />
        </View>
    );
};



export default AiUpScalered;
