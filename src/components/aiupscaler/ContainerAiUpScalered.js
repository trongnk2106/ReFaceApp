import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Top from "../Top";
import ImageButton from '../../misc/ImageButton';
import { useData } from '../../context/useData';
import { colors } from '../../assets';
import MyText from '../../misc/MyText';

const infoHeight = 364.0;

const ContainerAiUpScalered = () => {
    const insets = useSafeAreaInsets();
    const { resultAiUpScaler } = useData()

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
                    <View style={{ flexGrow: 1, padding: 20 }}>
                        <Top title="Source Image" srcImage={{ uri: `data:image/png;base64,${resultAiUpScaler}` }} />
                    </View>
                    <View style={
                        {
                            paddingTop: insets.top,
                            paddingBottom: insets.bottom,
                        }}>
                        <ImageButton text="Download" isIcon={false} />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: colors.backround,
        // borderTopLeftRadius: 32,
        // borderTopRightRadius: 32,
        shadowColor: 'grey',
        shadowOffset: { width: 1.1, height: 1.1 },
        // shadowOpacity: 0.2,
        // shadowRadius: 10.0,
        // elevation: 16,
    },
    scrollContainer: {
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingHorizontal: 8,
    },
    courseTitle: {
        color: 'black',
        fontSize: 22,
        fontFamily: 'WorkSans-SemiBold',
        letterSpacing: 0.27,
        paddingTop: 32,
        paddingLeft: 18,
        paddingRight: 16,
    },
    priceRatingContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingTop: 12,
        paddingBottom: 8,
        alignItems: 'center',
    },
    price: {
        flex: 1,
        color: 'rgb(0, 182, 240)',
    },
    textStyle: {
        fontSize: 22,
        fontFamily: 'WorkSans-Regular',
        color: 'darkslategrey',
        letterSpacing: 0.27,
    },
    timeBoxContainer: {
        backgroundColor: 'white',
        borderRadius: 16,
        alignItems: 'center',
        margin: 8,
        paddingHorizontal: 18,
        paddingVertical: 12,
        elevation: 2,
        shadowColor: 'grey',
        shadowOffset: { width: 1.1, height: 1.1 },
        shadowOpacity: 0.22,
        shadowRadius: 8.0,
    },
    timeBoxTitle: {
        fontSize: 14,
        fontFamily: 'WorkSans-SemiBold',
        color: 'rgb(0, 182, 240)',
    },
    boxesContainer: {
        flexDirection: 'row',
        padding: 8,
    },
    courseDescription: {
        flex: 1,
        fontSize: 14,
        fontFamily: 'WorkSans-Regular',
        textAlign: 'justify',
        color: 'darkslategrey',
        letterSpacing: 0.27,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    footerContainer: {
        flexDirection: 'row',
        paddingHorizontal: 24,
        // paddingBottom: 16,
    },
    addView: {
        width: 48,
        height: 48,
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    joinCourse: {
        flex: 1,
        borderRadius: 16,
        backgroundColor: 'rgb(0, 182, 240)',
        elevation: 4,
        shadowColor: 'rgb(0, 182, 240)',
        shadowOffset: { width: 1.1, height: 1.1 },
        shadowOpacity: 0.5,
        shadowRadius: 10.0,
        ...Platform.select({ android: { overflow: 'hidden' } }),
    },
    joinCourseText: {
        padding: 18,
        paddingVertical: 12,
        fontSize: 18,
        fontFamily: 'WorkSans-SemiBold',
        alignSelf: 'center',
        color: 'white',
    },
    favoriteIcon: {
        position: 'absolute',
        right: 35,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'rgb(0, 182, 240)',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 18,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
    },
    backBtn: {
        position: 'absolute',
        width: 56,
        height: 56,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ContainerAiUpScalered
    ;