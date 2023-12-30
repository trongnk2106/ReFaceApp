import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Alert, Image } from "react-native";
import {
    FlingGestureHandler,
    Directions,
    State,
} from "react-native-gesture-handler";
import Animated, {
    withSpring,
    useAnimatedStyle,
    useAnimatedGestureHandler,
    useSharedValue
} from "react-native-reanimated";
import Icon from 'react-native-vector-icons/dist/FontAwesome';


import { theme } from "./theme";

const Message = ({ time, isLeft, message, onSwipe, img }) => {
    const startingPosition = 0;
    const x = useSharedValue(startingPosition);

    const isOnLeft = (type) => {
        if (isLeft && type === "messageContainer") {
            return {
                alignSelf: "flex-start",
                backgroundColor: "#f0f0f0",
                borderTopLeftRadius: 0,
            };
        } else if (isLeft && type === "message") {
            return {
                color: "#000",
            };
        } else if (isLeft && type === "time") {
            return {
                color: "darkgray",
            };
        } else {
            return {
                borderTopRightRadius: 0,
            };
        }
    };

    const eventHandler = useAnimatedGestureHandler({
        onStart: (event, ctx) => {

        },
        onActive: (event, ctx) => {
            x.value = isLeft ? 50 : -50;
        },
        onEnd: (event, ctx) => {
            x.value = withSpring(startingPosition);
        }
    });

    const uas = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: x.value }]
        }
    });
    // console.log(img)

    return (
        <FlingGestureHandler
            direction={isLeft ? Directions.RIGHT : Directions.LEFT}
            onGestureEvent={eventHandler}
            onHandlerStateChange={({ nativeEvent }) => {
                if (nativeEvent.state === State.ACTIVE) {
                    onSwipe(message, isLeft);
                }
            }}
        >
            <Animated.View style={[styles.container, uas]}>
                <View
                    style={[
                        styles.messageContainer,
                        isOnLeft("messageContainer"),
                    ]}
                >
                    <View style={styles.messageView}>
                        <Text style={[styles.message, isOnLeft("message")]}>
                            {message}
                        </Text>
                        {img && <Image source={{uri : img}} style={{width:100, height:100}} />}
                    </View>
                    <View style={styles.timeView}>
                        <Text style={[styles.time, isOnLeft("time")]}>
                            {time}
                        </Text>
                       
                    </View>
                  
                </View>
            </Animated.View>
        </FlingGestureHandler>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        marginVertical: 5,
    },
    messageContainer: {
        backgroundColor: 'white',
        maxWidth: "80%",
        alignSelf: "flex-end",
        flexDirection: "row",
        borderRadius: 15,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 10,
    },
    messageView: {
        backgroundColor: "transparent",
        maxWidth: "80%",
    },
    timeView: {
        backgroundColor: "transparent",
        justifyContent: "flex-end",
        paddingLeft: 10,
    },
    message: {
        color: "black",
        alignSelf: "flex-start",
        fontSize: 15,
    },
    time: {
        color: "lightgray",
        alignSelf: "flex-end",
        fontSize: 10,
    },
});

export default Message;