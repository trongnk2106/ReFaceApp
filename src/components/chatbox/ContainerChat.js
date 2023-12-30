import React, { useState } from "react";
import { View, Text } from "react-native";

import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import MessagesList from "./MessagesList";

import { useData } from "../../context/useData";
const MessagesScreen = ({ navigation, route }) => {
	// const { username, bio, picture, isBlocked, isMuted } = route.params;
	const [reply, setReply] = useState("");
	const [isLeft, setIsLeft] = useState();

    const [messages, setMessages] = useState([
		{
			user: 1,
			// time: "12:05",
			content: "Can I help you?",
		},
		
	]);

    const [resquestChat, setRequestChat] = useState()

    // const {responseChat, setResponseChat} = useData()

    // console.log(responseChat)

	const swipeToReply = (message, isLeft) => {
		setReply(message.length > 50 ? message.slice(0, 50) + '...' : message);
		setIsLeft(isLeft);
	};

	const closeReply = () => {
		setReply("");
	};  
    const handleSend = (message, image, response_text, response_image) => {
        // console.log('in container',response)
        console.log('in container',response_text, response_image)
        const newMessage_ = {
                    user: 1,
                    // time: "12:05",
                    content: response_text?response_text:'',
                    img : response_image ? `data:image/png;base64,${response_image}` : response_image,
                }
        if (image) {
            const newMessage = {
                user: 0,
              
                content : message,
                img: image.uri,
            }
            setMessages([...messages, newMessage, newMessage_])
        }
        else {
            const newMessage = {
                user: 0,
           
                content : message,
                
            }
            setMessages([...messages, newMessage, newMessage_])
        }
        // console.log('in container',response_text, response_image)

        // if (response_text) {
        //     const newMessage = {
        //         user: 1,
        //         // time: "12:05",
        //         content: response_text,
        //     }
        //     setMessages([...messages, newMessage])
        // }
        // else if (response_image) {
        //     const newMessage = {
        //         user: 1,
        //         // time: "12:05",
        //         img:`data:image/png;base64,${response_image}`,
        //     }
        //     setMessages([...messages, newMessage])
        // }

    }

    // const handleResponse = (response_text, response_image) => {
    //     // console.log('in container',response)
    //     if (response_text) {
    //         const newMessage = {
    //             user: 1,
    //             // time: "12:05",
    //             content: response_text,
    //         }
    //         setMessages([...messages, newMessage])
    //     }
    //     else if (response_image) {
    //         const newMessage = {
    //             user: 1,
    //             // time: "12:05",
    //             img:`data:image/png;base64,${response_image}`,
    //         }
    //         setMessages([...messages, newMessage])
    //     }
    // }


	return (
		<View style={{ flex: 1 }}>
			<MessagesList onSwipeToReply={swipeToReply} messages={messages} />
			<ChatInput reply={reply} isLeft={isLeft} closeReply={closeReply} username={'username'} copy = {handleSend}  />
		</View>
	);
};

export default MessagesScreen;