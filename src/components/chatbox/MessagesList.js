import React, { useState, useRef, useEffect } from "react";
import { ScrollView } from "react-native";

import Message from "./Message";

import { theme } from "./theme";
import { colors } from "../../assets";
import { useData } from "../../context/useData";


const MessagesList = ({ onSwipeToReply,messages }) => {
	
    // const {messages} = useData()

    // console.log(messages)


	const user = useRef(0);
	const scrollView = useRef();

	return (
		<ScrollView style={{ backgroundColor: colors.backround, flex: 1 }}
			ref={ref => scrollView.current = ref}
			onContentChange={() => {
				scrollView.current.scrollToEnd({ animated: true })
			}}
		> 
			{messages.map((message, index) => (
				<Message
					key={index}
					// time={message.time}
					isLeft={message.user !== user.current}
					message={message.content}
					onSwipe={onSwipeToReply}
                    img = {message.img}
				/>
			))}
		</ScrollView>
	);
};

export default MessagesList;