import React, { useEffect, useRef, useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { AppImages } from '../../assets';
import Checkbox from '../../misc/Checkbox';
import ImageButton from '../../misc/ImageButton';
import MyPressable from '../MyPressable';

export default function Bottom(
    {
        title,
        onPress,
        selected
    }
) {
    const navigation = useNavigation();
    const insert = useSafeAreaInsets()
    const window = useWindowDimensions();


    return (<>
        <View style={[styles.container,
        {
            paddingTop: insert.top,
            paddingBottom: insert.bottom,
        }]}>
            <ImageButton text={title} />
        </View>
        <View style={{
            paddingTop: insert.top,
            paddingBottom: insert.bottom,
            flexDirection: 'row',
            justifyContent: 'center',
        }}>
            <View style={{
                marginRight: insert.right + 20,
            }}>
                <View style={{ margin: 7 }}>
                    <View style={styleCatrgory(selected === 'male').categoryBtnContainer}>
                        <MyPressable touchOpacity={0.6} onPress={() => onPress("male")}>
                            <Text style={styleCatrgory(selected === 'male').categoryBtnText}>
                                Male
                            </Text>
                        </MyPressable>
                    </View>
                </View>
            </View>
            <View style={{
                marginLeft: 20 + insert.left,
            }}>
                <View style={{ margin: 7 }}>
                    <View style={styleCatrgory(selected === 'female').categoryBtnContainer}>
                        <MyPressable touchOpacity={0.6} onPress={() => onPress("female")}>
                            <Text style={styleCatrgory(selected === 'female').categoryBtnText}>
                                Female
                            </Text>
                        </MyPressable>
                    </View>
                </View>
            </View>

        </View>
    </>)
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
    },
    searchInputMainContainer: {
        marginTop: 8,
        marginLeft: 18,
    },
    searchInputContainer: {
        flexDirection: 'column',
        backgroundColor: '#F8FAFB',
        marginVertical: 8,
        borderRadius: 13,
        paddingHorizontal: 16,
        flexGrow: 1
    },
});

const styleCatrgory = (selected) =>
    StyleSheet.create({
        categoryBtnContainer: {
            flex: 1,
            overflow: 'hidden',
            borderRadius: 12,
            borderColor: 'rgb(0, 182, 240)',
            borderWidth: 1,
            backgroundColor: selected ? 'rgb(0, 182, 240)' : 'transparent',
        },
        categoryBtnText: {
            padding: 18,
            paddingVertical: 12,
            fontSize: 12,
            fontFamily: 'WorkSans-SemiBold',
            letterSpacing: 0.27,
            alignSelf: 'center',
            color: selected ? 'white' : 'rgb(0, 182, 240)',
        },
    });