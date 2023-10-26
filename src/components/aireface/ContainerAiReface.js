import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Top from "../Top";
import ImageButton from '../../misc/ImageButton';
import { useData } from '../../context/useData';
import pickImage from '../../util/pickImage';
import axios from 'axios';
import { colors } from '../../assets';
import MyText from '../../misc/MyText';
import Popup from '../../misc/Popup';
import BottomPrompt from '../generate/BottomPrompt';

const infoHeight = 364.0;

const ContainerAiReface = () => {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const { imageAiReface, setImageAiReface,
        setResultAiReface, resultAiReface,
        promptAiReface, setPromptAiReface, } = useData()

    const [isVisible, setIsVisible] = useState(false)
    const [isCancel, setIsCancel] = useState(false)

    /**
     * Function to upload an image to a specific API endpoint
     */
    const uploadImage = async () => {
        // Create a new FormData instance
        const formData = new FormData();

        // Check if image are selected
        if (imageAiReface) {
            // Append image and prompt to the formData
            formData.append('source_image', imageAiReface);
            formData.append('prompt', promptAiReface);

            // Log the formData
            console.log(formData);

            try {
                // Make a POST request to the API endpoint
                const response = await axios.post(
                    'https://aiclub.uit.edu.vn/namnh/soict-app/api/v1/aireface',
                    formData,
                    {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'multipart/form-data',
                        },
                    }
                );

                // Set the result from the API response
                setResultAiReface(response.data.base64_image);
            } catch (error) {
                // Log any error that occurs during the request
                console.error('Error uploading image: ', error);
            }
        }
    };

    /**
     * Handles the "Generate" action.
     * Sets the visibility, uploads the image, and navigates to the 'AiRefaced' screen.
     */
    const handleGenerate = async () => {
        // Set visibility to true
        setIsVisible(true);

        // Upload the image
        await uploadImage();

        // Set visibility to false
        setIsVisible(false);

        // If not canceled, navigate to 'AiRefaced' screen
        if (!isCancel) {
            navigation.navigate('AiUpScaler', { image: resultAiReface, done: 'AiReface' });
        }
    }

    const handleCancel = () => {
        setIsCancel(true)
        setIsVisible(false)
    }

    const handleSources = async () => {
        // Pick an image
        const result = await pickImage()

        // If an image is picked, set it as the AI avatar
        if (result) {
            setImageAiReface({
                type: result.type, // Image type
                name: result.name, // Image name
                uri: result.uri, // Image URI
            })
        }
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
                    <Top title="Source Image" onPress={handleSources} srcImage={imageAiReface} />
                    <MyText title='Custom Color' style={{ marginTop: 20 }} />
                    <BottomPrompt prompt={promptAiReface} setprompt={setPromptAiReface} />
                    <View style={
                        {
                            paddingTop: insets.top,
                            paddingBottom: insets.bottom,
                        }}>
                        <ImageButton text="Generate" onPress={handleGenerate} />
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

export default ContainerAiReface;