import React, {  useState } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';
import { useData } from '../../context/useData';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Top from "../Top";
import ImageButton from '../../misc/ImageButton';
import axios from 'axios';
import { colors } from '../../assets';
import MyText from '../../misc/MyText';
import Popup from '../../misc/Popup';

const infoHeight = 364.0;

const ContainerAiUpScaler = ({ image, goto }) => {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();

    const [isVisible, setIsVisible] = useState(false)
    const [isCancel, setIsCancel] = useState(false)
    const { setResultAiUpScaler } = useData()

    const uploadImage = async () => {

        const formData = new FormData();

        if (image) {
            formData.append('source_image', image)

            console.log("uploading")
            try {
                const response = await axios.post('https://aiclub.uit.edu.vn/namnh/soict-app/api/v1/aiupscaler', formData, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'multipart/form-data',
                    },
                })
                setResultAiUpScaler(response.data.base64_image)
            } catch (error) {
                console.log('Error uploading image: ', error);
            }
        }
    }

    const handleTryNow = async () => {
        setIsCancel(false)
        setIsVisible(true)
        await uploadImage()
        setIsVisible(false)
        if (!isCancel) {
            navigation.navigate('AiUpScalered', { done: goto })
        }
    }

    const handleCancel = () => {
        setIsCancel(true)
        setIsVisible(false)
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
                    <MyText title='User photo' />
                    <Top title="Source Image" srcImage={{ uri: `data:image/png;base64,${image}` }} />
                    <View style={
                        {
                            paddingTop: insets.top,
                            paddingBottom: insets.bottom,
                        }}>
                        <ImageButton text="High Quality (4K)" onPress={handleTryNow} />
                        <ImageButton text="Download" isIcon={false} />
                    </View>
                </ScrollView>
            </View>
            {isVisible && <Popup isVisible={isVisible} onPress={handleCancel} />}
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

export default ContainerAiUpScaler;
