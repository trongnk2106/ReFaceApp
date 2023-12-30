import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Platform,
  ToastAndroid
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Top from "../Top";
import Bottom from './Bottom';
import ImageButton from '../../misc/ImageButton';
import { useData } from '../../context/useData';
import pickImage from '../../util/pickImage';
import { colors } from '../../assets';
import MyText from '../../misc/MyText';


const infoHeight = 364.0;

const ContainerAiAvatar = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const {
    imageAiAvatar, setImageAiAvatar,
    selectSexAiAvatar, setSelectSexAiAvatar,
    AIAVATAR_MALE, AIAVATAR_FEMALE } = useData()

  const handleTryNow = async () => {

    if (imageAiAvatar && selectSexAiAvatar) {
      if (selectSexAiAvatar === 'male'){
      
        navigation.navigate('AiAvatarNext', {list : AIAVATAR_MALE})
      }
      else(
        navigation.navigate('AiAvatarNext', {list : AIAVATAR_FEMALE})
      )
      
    }
    else {
      ToastAndroid.show("You have not selected a photo or gender", ToastAndroid.SHORT)
    }
  }

  const handleSources = async () => {
    const result = await pickImage()
    if (result) {
      setImageAiAvatar({
        type: result.type,
        name: result.name,
        uri: result.uri,
      })
    }
  }
  const handleSex = (text) => {
    setSelectSexAiAvatar(text)
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
          <Top title="Source Image" onPress={handleSources} srcImage={imageAiAvatar} />
          <MyText title='Choose gender' style={{ marginTop: 20 }} />
          <Bottom title="Sex" onPress={handleSex} selected={selectSexAiAvatar} />
          <View style={
            {
              paddingTop: insets.top,
              paddingBottom: insets.bottom,
            }}>
            <ImageButton text="Continue" onPress={handleTryNow} />
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

export default ContainerAiAvatar;
