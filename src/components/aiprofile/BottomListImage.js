import React, { useEffect, useRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    useWindowDimensions,
    Image
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ImageButton from '../../misc/ImageButton';
import { AppImages } from '../../assets';
import RowImage from './RowImage';


const BottomListImage = ({
    title,
    width,
    height,
    onPress,
    ListImage
}) => {
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
        <View style={{

            flexDirection: 'column', paddingTop: insert.top,
            paddingBottom: insert.bottom,
        }}>
            <RowImage srcImage1={ListImage ? ListImage[0] : ListImage}
                srcImage2={ListImage ? ListImage[1] : ListImage} />
            <RowImage srcImage1={ListImage ? ListImage[2] : ListImage}
                srcImage2={ListImage ? ListImage[3] : ListImage} />
            <RowImage srcImage1={ListImage ? ListImage[4] : ListImage}
                srcImage2={ListImage ? ListImage[5] : ListImage} />

        </View>
    </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '50%',
    }
});

export default BottomListImage;
