import React, { useState, useEffect, useRef, memo } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    TouchableOpacity, Image
} from "react-native";

import Animated, {
    useSharedValue,
    withSpring,
    withTiming,
    useAnimatedStyle,
} from "react-native-reanimated";


import Icon from 'react-native-vector-icons/dist/FontAwesome';
import pickImage from "../../util/pickImage";

import { useKeyboard } from "@react-native-community/hooks";

import { theme } from "./theme";
import { colors, AppImages } from "../../assets";
import axios from 'axios';
import { useData } from "../../context/useData";

// import { Image } from "react-native-reanimated/lib/typescript/Animated";


const ChatInput = ({ reply, closeReply, isLeft, username, copy, res }) => {
    const [message, setMessage] = useState();
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [imageAttached, setImageAttached] = useState()
    const height = useSharedValue(70);

    const {setResponseChat} = useData()

    const [responseText, setResponseText] = useState()
    const [responseImage, setResponseImage] = useState()

    useEffect(() => {
        if (reply) {
            height.value = showEmojiPicker ? withTiming(450) : withTiming(130);
        } else {
            height.value = showEmojiPicker ? withSpring(400) : withSpring(70);
        }
    }, [reply]);


    const heightAnimatedStyle = useAnimatedStyle(() => {
        return {
            height: height.value
        }
    })


    const handleSources = async () => {
        const result = await pickImage()
        if (result) {
            setImageAttached({
                type: result.type,
                name: result.name,
                uri: result.uri,
            })
        }
    }


    const handleQuery = async () => {
        const formData = new FormData();

        if (message) {
            formData.append('text', message)
            formData.append('image', imageAttached)
            
            // console.log(message)
            // console.log('form data',formData)
            try {
                const response = await axios.post('https://aiclub.uit.edu.vn/namnh/soict-app/api/v1/chat2art', formData, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'multipart/form-data',
                    },
                })
                console.log('response', response.data.base64_image)
                console.log('text', response.data.text)
                
                // setResponse(response.data)
                // setResponseChat({text : response.data.text ,img :response.data.base64_image})
                // res(response.data.text, response.data.base64_image)
                // setResponseText(response.data.text)
                // setResponseImage( response.data.base64_image)
                copy(message, imageAttached, response.data.text, response.data.base64_image )
               
                setMessage('')
                
                return true
            } catch (error) {
                console.error('Error uploading image: ', error);
                return false
            }
        }
        // else {
        //     ToastAndroid.show("Please select gender and image", ToastAndroid.SHORT)
        //     return false
        // }
    }


    return (
        <Animated.View style={[styles.container, heightAnimatedStyle]}>
            {reply ? (
                <View style={styles.replyContainer}>
                    <TouchableOpacity
                        onPress={closeReply}
                        style={styles.closeReply}
                    >
                        <Icon name="close" color="#000" size={20} />
                    </TouchableOpacity>
                    <Text style={styles.title}>
                        Response to {isLeft ? username : "Me"}
                    </Text>
                    <Text style={styles.reply}>{reply}</Text>
                </View>
            ) : null}
            <View style={styles.innerContainer}>
                <View style={styles.inputAndMicrophone}>
                    <TextInput
                        multiline
                        placeholder={"Type something..."}
                        style={styles.input}
                        value={message}
                        onChangeText={(text) => setMessage(text)}
                    />
                    <TouchableOpacity style={styles.rightIconButtonStyle} onPress={() => {
                        handleSources()
                       
                        
                        }}>
                        <Image source={AppImages.image_attached} style={{ width: 40, height: 40 }} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.sendButton} onPress={handleQuery}>
                    <Image source={AppImages.send_icon} style={{ width: 30, height: 30, aspectRatio: 1 }} />
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        backgroundColor: colors.backround,
    },
    replyContainer: {
        paddingHorizontal: 10,
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    title: {
        marginTop: 5,
        fontWeight: "bold",
    },
    closeReply: {
        position: "absolute",
        right: 10,
        top: 5,
    },
    reply: {
        marginTop: 5,
    },
    innerContainer: {
        paddingHorizontal: 10,
        marginHorizontal: 10,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: 10,
    },
    inputAndMicrophone: {
        flexDirection: "row",
        backgroundColor: theme.colors.inputBackground,
        flex: 3,
        marginRight: 10,
        paddingVertical: Platform.OS === "ios" ? 10 : 0,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "space-between",
    },
    input: {
        backgroundColor: "transparent",
        paddingLeft: 20,
        color: theme.colors.inputText,
        flex: 3,
        fontSize: 15,
        height: 50,
        alignSelf: "center",
    },
    rightIconButtonStyle: {
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 15,
        paddingLeft: 10,
        borderLeftWidth: 1,
        borderLeftColor: "#fff",
    },
    swipeToCancelView: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 30,
    },
    swipeText: {
        color: theme.colors.description,
        fontSize: 15,
    },
    emoticonButton: {
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 10,
    },
    recordingActive: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 10,
    },
    recordingTime: {
        color: theme.colors.description,
        fontSize: 20,
        marginLeft: 5,
    },
    microphoneAndLock: {
        alignItems: "center",
        justifyContent: "flex-end",
    },
    lockView: {
        backgroundColor: "#eee",
        width: 60,
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 130,
        paddingTop: 20,
    },
    sendButton: {
        // backgroundColor: theme.colors.primary,
        borderRadius: 50,
        height: 50,
        width: 50,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default ChatInput;