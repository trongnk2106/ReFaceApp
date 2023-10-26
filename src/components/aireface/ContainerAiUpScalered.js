import React, { useEffect, useRef, useState } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ImageButton from '../../misc/ImageButton';
import { useData } from '../../context/useData';
import Top from '../Top';
import { colors } from '../../assets';


const infoHeight = 364.0;

const ContainerAiRefaced = () => {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const { resultAiReface,} = useData()

    const handleHightquality = async () => {
        navigation.navigate('AiProfileReGen')
    }

    return (
        <View style={{ flex: 1 }}>
            <View
                style={[
                    styles.contentContainer,
                ]}>
                <ScrollView
                    style={styles.scrollContainer}
                    contentContainerStyle={{
                        flexGrow: 1,
                        minHeight: infoHeight,
                    }}
                >
                    <View style={{ flexGrow: 1, padding: 20 }}>
                        <Top srcImage={{ uri: `data:image/png;base64,${resultAiReface}` }}></Top>
                    </View>

                    <View style={
                        {
                            paddingTop: insets.top,
                            paddingBottom: insets.bottom,

                        }}>
                        <ImageButton text="High Quality (4K)" onPress={handleHightquality} />
                        <ImageButton text="Download" isIcon={false} />
                    </View>
                </ScrollView>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: colors.backround,
        shadowColor: 'grey',
        shadowOffset: { width: 1.1, height: 1.1 },
    },
    scrollContainer: {
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingHorizontal: 8,
    },
});

export default ContainerAiRefaced;