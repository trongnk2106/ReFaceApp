import React, { useEffect, useRef, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    useWindowDimensions,
    Image,
    FlatList
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ImageButton from '../../misc/ImageButton';
import { AppImages, colors } from '../../assets';
import RowImage from './RowImage';
import ViewImage from '../../misc/ViewImage';
import { useData } from '../../context/useData';


const BottomListImage = ({
    ListImage
}) => {
    const insert = useSafeAreaInsets()
    const [isNull, setisNull] = useState(false)
    const [listImages, setlistImages] = useState(ListImage)
    const { imageRegenAiProfile, setImageRegenAiProfile } = useData()

    useEffect(() => {
        if (!ListImage) {
            setlistImages([AppImages.webInterFace, AppImages.webInterFace, AppImages.webInterFace, AppImages.webInterFace])
            setisNull(true)
        }
    }, [])

    return (<>
        <FlatList
            contentContainerStyle={{
                flexGrow: 1,
                paddingBottom: 16 + insert.bottom,
                alignItems: "center",
                paddingTop: 16,
                marginBottom: 32,
                justifyContent: 'center',
            }}

            columnWrapperStyle={{ paddingHorizontal: 8 }}
            // showsVerticalScrollIndicator={false}
            numColumns={2}
            scrollEnabled={false}
            data={listImages}
            ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
            renderItem={data => (
                <ViewImage
                    data={data}
                    isNull={isNull}
                    onScreenClicked={() => setImageRegenAiProfile(data.item)}
                    isSelected={imageRegenAiProfile === data.item}
                />
            )}
        />

    </>
    );
};

export default BottomListImage;
