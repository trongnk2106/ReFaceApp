import React, { useEffect, useRef } from 'react';
import {
    StyleSheet,
    View,
    Image,
    useWindowDimensions
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ImageButton from '../../misc/ImageButton';
import { AppImages } from '../../assets';


export default function BottomImage(
    {
        imageResultGenerate
    }
) {
    const navigation = useNavigation();
    const insert = useSafeAreaInsets()
    const window = useWindowDimensions();

    return (<>
        <Image
            style={{
                flex: 1, paddingLeft: insert.left, width: '90%',
                alignSelf: 'center', height: window.width / 2,
                marginTop: insert.top
            }}
            source={imageResultGenerate ? { uri: `data:image/png;base64,${imageResultGenerate[1]}` } : AppImages.webInterFace}
            resizeMode={imageResultGenerate ? "contain" : "cover"}
        >
        </Image>
        
    </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
    }
});