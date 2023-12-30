import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MyPressable from '../MyPressable';

export default function Bottom(
    {
        onPress,
        selected
    }
) {
    const insert = useSafeAreaInsets()

    return (<>
        <View style={{
            paddingTop: insert.top,
            paddingBottom: insert.bottom,
            flexDirection: 'row',
            justifyContent: 'center',
        }}>
            <View style={{
                marginRight: insert.right + 20,
                width: '40%'
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
                width: '40%'
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

const styleCatrgory = (selected) =>
    StyleSheet.create({
        categoryBtnContainer: {
            flex: 1,
            overflow: 'hidden',
            borderRadius: 12,
            borderColor: selected ? 'rgb(0, 182, 240)' : '#55535E',
            borderWidth: 2,
            backgroundColor: selected ? '#0A4882' : 'transparent',
        },
        categoryBtnText: {
            padding: 25,
            paddingVertical: 12,
            fontSize: 13,
            fontFamily: 'WorkSans-SemiBold',
            letterSpacing: 0.27,
            alignSelf: 'center',
            color: '#FAF4F1',
        },
    });