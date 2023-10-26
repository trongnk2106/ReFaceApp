import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    FlatList
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ImageButton from '../../misc/ImageButton';
import { useData } from '../../context/useData';
import axios from 'axios';
import { colors } from '../../assets';
import MyText from '../../misc/MyText';
import Popup from '../../misc/Popup';
import ViewImage from '../../misc/ViewImage';
import BottomPrompt from '../generate/BottomPrompt';

const infoHeight = 364.0;

const ContainerAiAvatarNext = () => {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const {
        CATEGORIES_TEMPLATE,
        imageAiAvatar,
        selectSexAiAvatar,
        promptAiAvatar, setPromptAiAvatar,
        tempAiAvatar, setTempAiAvatar,
        setResultAiAvatar } = useData()

    const [isVisible, setIsVisible] = useState(false)
    const [isCancel, setIsCancel] = useState(false)

    const uploadImage = async () => {

        const formData = new FormData();

        if (imageAiAvatar && selectSexAiAvatar) {

            formData.append('source_image', imageAiAvatar)
            formData.append('gender', selectSexAiAvatar)
            formData.append('style', tempAiAvatar)
            formData.append('prompt', promptAiAvatar)

            console.log(formData)
            try {
                const response = await axios.post('https://aiclub.uit.edu.vn/namnh/soict-app/api/v1/aiavatar', formData, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'multipart/form-data',
                    },
                })
                setResultAiAvatar(response.data.base64_image)
            } catch (error) {
                console.error('Error uploading image: ', error);
            }
        }
    }

    const handleTryNow = async () => {
        setIsCancel(false)
        setIsVisible(true)
        await uploadImage()
        setIsVisible(false)
        if (!isCancel) {
            navigation.navigate('AiUpScaler', { done: 'AiAvatar' })
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
                    <MyText title='Choose template' />
                    <FlatList
                        contentContainerStyle={{
                            flexGrow: 1,
                            paddingBottom: 16 + insets.bottom,
                            alignItems: "center",
                            paddingTop: 16,
                            marginBottom: 32,
                            justifyContent: 'center',
                        }}

                        columnWrapperStyle={{ paddingHorizontal: 8 }}
                        numColumns={3}
                        scrollEnabled={false}
                        data={CATEGORIES_TEMPLATE}
                        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                        renderItem={data => (
                            <ViewImage
                                data={data}
                                isNull={true}
                                onScreenClicked={() => setTempAiAvatar(data.item)}
                                height='27%'
                            />
                        )}
                    />
                    <MyText title='Custom Prompt' style={{ marginTop: 20 }} />
                    <BottomPrompt prompt={promptAiAvatar} setprompt={setPromptAiAvatar} />
                    <View style={
                        {
                            paddingTop: insets.top,
                            paddingBottom: insets.bottom,
                        }}>
                        <ImageButton text="Generate" onPress={handleTryNow} />
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

export default ContainerAiAvatarNext;