import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import BottomListImage from './BottomListImage';
import ImageButton from '../../misc/ImageButton';
import { useData } from '../../context/useData';
import { colors } from '../../assets';

const infoHeight = 364.0;

const ContainerAiProfiled = () => {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const { resultAiProfile } = useData()
    const handleRegenerate = async () => {
        navigation.navigate('AiUpScaler', { done: 'AiProfile' })
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
                    <BottomListImage title="Your result" ListImage={resultAiProfile} />
                    <View style={
                        {
                            paddingTop: insets.top,
                            paddingBottom: insets.bottom,

                        }}>
                        <ImageButton text="Regenerate" onPress={handleRegenerate} />
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
        shadowColor: 'grey',
        shadowOffset: { width: 1.1, height: 1.1 },
    },
    scrollContainer: {
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingHorizontal: 8,
    },
});

export default ContainerAiProfiled;