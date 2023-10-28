import React, { useRef } from 'react';
import {
    View,
    StatusBar,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Config from '../Config';
import { colors, AppImages } from '../assets';
import Swiper from 'react-native-swiper';

const WellCome = () => {
    const insets = useSafeAreaInsets();
    const paddingTop = Config.isIos
        ? Math.max(insets.top, 20)
        : StatusBar.currentHeight;
    const swiperRef = useRef(null);

    const handleScroll = () => {
        swiperRef.current.scrollBy(1);
    };

    return (
        <View style={{ flex: 1, backgroundColor: colors.backround, paddingTop }}>
            <Swiper style={{ flexGrow: 1, flexBasis: '90%' }} ref={swiperRef}>
                <TouchableOpacity style={{ flexGrow: 1, backgroundColor: 'white', width: '100%', height: '100%' }} onPress={handleScroll}>
                    <Image source={AppImages.one} />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'white', width: '100%', height: '100%' }} onPress={handleScroll} activeOpacity={1} touchSoundDisabled={true} >
                </TouchableOpacity>
            </Swiper>
            <TouchableOpacity onPress={handleScroll} activeOpacity={1} touchSoundDisabled={true}
                style={{ backgroundColor: '#1076D5', padding: 15, borderRadius: 20, marginBottom: 20, marginLeft: 20, marginRight: 20 }} >
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 16 }}>Get Started</Text>
            </TouchableOpacity>
        </View >
    );
};

export default WellCome;
