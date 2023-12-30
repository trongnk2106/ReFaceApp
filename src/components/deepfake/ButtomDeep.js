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


export default function Bottom(
    {
        title,
        onPress,
        srcImage
    }
) {
    const navigation = useNavigation();
    const insert = useSafeAreaInsets()
    const window = useWindowDimensions();

    return (<>
        <View style={[styles.container,
        {
            paddingTop: insert.top,
            paddingBottom: insert.bottom,
        }]}>
            <ImageButton text={title} onPress={onPress} />
        </View>
        <Image
            style={{ flex: 1, paddingLeft: insert.left, width: '90%', alignSelf: 'center', height: window.width / 2 }}
            source={srcImage ? { uri: srcImage.uri } : AppImages.webInterFace}
            resizeMode={srcImage ? "contain" : "cover"}
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