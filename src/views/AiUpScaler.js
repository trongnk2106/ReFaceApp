import React, { useState, useEffect } from 'react';
import {
    View,
    StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { useData } from '../context/useData';
import Config from '../Config';
import { colors } from '../assets';
import HeaderResult from '../components/HeaderResult';
import ContainerAiUpScaler from '../components/aiupscaler/ContainerAiUpScaler';


const AiUpScaler = () => {
    const insets = useSafeAreaInsets();
    const { resultAiReface, imageRegenAiProfile, resultAiAvatar } = useData()
    const route = useRoute();
    const [image, setImage] = useState()

    const { done } = route.params;

    const paddingTop = Config.isIos
        ? Math.max(insets.top, 20)
        : StatusBar.currentHeight;

    useEffect(() => {
        if (done === "AiReface") {
            setImage(resultAiReface)
        }
        else if (done === "AiProfile") {
            setImage(imageRegenAiProfile)
        }
        else if (done === "AiAvatar") {
            setImage(resultAiAvatar)
        }
    }, [done])

    return (
        <View style={{ flex: 1, backgroundColor: colors.backround, paddingTop }}>
            <HeaderResult goto={done} />
            <ContainerAiUpScaler image={image} goto={done} />
        </View>
    );
};

export default AiUpScaler;