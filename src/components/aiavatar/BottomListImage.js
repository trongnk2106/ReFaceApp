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
import ViewImage from '../../misc/ViewImage';
import { useData } from '../../context/useData';


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
    const [isNull, setisNull] = useState(false)
    const [listImages, setlistImages] = useState(ListImage)
    const {setImageRegenAiProfile} = useData()

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
                />
            )}
        // keyExtractor={item => item.id.toString()
        // }
        />

    </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '50%',
        flexGrow: 1
    }
});

export default BottomListImage;
