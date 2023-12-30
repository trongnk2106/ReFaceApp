import React, { useEffect, useRef } from 'react';
import {
    StyleSheet,
    View,
    Image,
    useWindowDimensions,
    TextInput
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ImageButton from '../../misc/ImageButton';
import { AppImages } from '../../assets';
import Config from '../../Config';

export default function BottomPrompt(
    {
        prompt,
        setprompt
    }
) {
    const navigation = useNavigation();
    const insert = useSafeAreaInsets()
    const window = useWindowDimensions();

    return (<>
        <View style={[styles.searchInputMainContainer, {
            width: window.width * 0.9, height: window.width / 2
        }]}>
            <View style={styles.searchInputContainer}>
                <TextInput
                    style={[
                        styles.searchInput,
                        !Config.isAndroid && { paddingVertical: 16 },
                        {
                            height: window.width / 2
                        }
                        ,{
                           flexBasis:'100%'
                        }
                    ]}
                    value={prompt}
                    onChangeText={text => setprompt(text)}
                    autoCapitalize="none"
                    selectionColor="dodgerblue"
                    placeholderTextColor="#B9BABC"
                    placeholder="Enter Prompt here"
                    multiline={true}
                />
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
        flexDirection: 'row',
        backgroundColor: '#1C1927',
        marginVertical: 8,
        borderRadius: 13,
        paddingHorizontal: 16,
        alignItems: 'flex-start',
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'WorkSans-SemiBold',
        color: 'white',
    },
});