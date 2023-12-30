import {
    StyleSheet, Text, View, Image,
    useWindowDimensions
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { AppImages, colors } from '../../assets';


export default function RowImage(
    {
        srcImage1,
        srcImage2,
        width,
        height,
    }
) {
    const insert = useSafeAreaInsets()
    const window = useWindowDimensions();

    return (
        <View style={{
            flexDirection: 'row',
            paddingBottom: insert.bottom + 10,
        }}>
            <Image
                style={{
                    flex: 1, paddingLeft: insert.left, width: width ? width : '90%',
                    alignSelf: 'center', height: height ? height : window.width / 2,
                    marginRight: insert.right + 5,
                    borderRadius: 20, borderColor: colors.boder, borderWidth:4
                }}
                source={srcImage1 ? { uri: `data:image/png;base64,${srcImage1}` } : AppImages.webInterFace}
                resizeMode={srcImage1 ? "contain" : "cover"}
            >
            </Image>
            <Image
                style={{
                    flex: 1, paddingLeft: insert.left, width: width ? width : '90%',
                    alignSelf: 'center', height: height ? height : window.width / 2,
                    marginLeft: insert.left + 5,
                    borderRadius: 20, borderColor: colors.boder, borderWidth:4
                }}
                source={srcImage2 ? { uri: `data:image/png;base64,${srcImage2}` } : AppImages.webInterFace}
                resizeMode={srcImage2 ? "contain" : "cover"}
            >
            </Image>
        </View>
    )
}