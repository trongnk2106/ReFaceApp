import React, { useEffect, useRef } from 'react';
import {
    StyleSheet,
    View,
    Image,
    useWindowDimensions,
    Text
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ImageButton from '../../misc/ImageButton';
import { AppImages } from '../../assets';


export default function ResAnti(
    {
        title,
        onPress,
        Result
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
        <View
            style={{ flex: 1, paddingLeft: insert.left, width: '90%', alignSelf: 'center', height: window.width / 2 , paddingTop : 40}}
            // source={srcImage ? { uri: srcImage.uri } : AppImages.webInterFace}
            // resizeMode={srcImage ? "contain" : "cover"}
            
        >
            <Text style = {styles.categoryBtnText}> Predicted : {Result.Predicted}</Text>
            <Text style = {styles.categoryBtnText}> Confidence : {Result.Confidence}</Text>
            <Text style = {styles.categoryBtnText}> Face similarity : {Result.Similarity}</Text>
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
    },
    categoryBtnText: {
        padding: 18,
        paddingVertical: 12,
        fontSize: 18,
        fontFamily: 'WorkSans-SemiBold',
        letterSpacing: 0.27,
        alignSelf: 'center',
        color:'rgb(0, 182, 240)',
    },
});