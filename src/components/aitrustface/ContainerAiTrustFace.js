import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Platform,
  Modal,
  Text
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import RenderList from '../../misc/RenderList';
import Top from "../Top";
import Bottom from './Bottom';
import ImageButton from '../../misc/ImageButton';
import { useData } from '../../context/useData';
import pickImage from '../../util/pickImage';
import axios from 'axios';
import { colors } from '../../assets';
import MyText from '../../misc/MyText';
import Popup from '../../misc/Popup';
import { isCancel } from 'react-native-document-picker';

const infoHeight = 364.0;

const ContainerAiTrustFace = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { CATEGORIES_PERSONALIZE,
    selectedCategoryPerson,
    setSelectedCategoryPerson,
    imageAiProfile,
    setImageAiProfile,
    selectSex,
    setSelectSex,
    resultAiProfile,
    setResultAiProfile,
    imagetrustface, setImagetrustface,
    resImagetrustface, setResImagetrustface } = useData()

  const [isVisible, setIsVisible] = useState(false)
  const [isCancel, setIsCancel] = useState(false)
  
  const uploadImage = async () => {

    const formData = new FormData();

    if (imagetrustface) {

      formData.append('source_image', imagetrustface)


      console.log(formData)
      try {
        const response = await axios.post('https://aiclub.uit.edu.vn/namnh/soict-app/api/v1/aitrustface', formData, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
          },
        })
        // setImageResultSwap(`data:image/png;base64,${response.data.image_data}`)
        // console.log(response.data.output_images)
        setResImagetrustface(response.data.output_images)
      } catch (error) {
        console.error('Error uploading image: ', error);
      }
    }
  }

  const handleTryNow = async () => {
    setIsCancel(false)
    setIsVisible(true)
    await uploadImage()
    setIsVisible(false)
    if (!isCancel) {
      navigation.navigate('AiTrustFaced')
    }
  }

  const handleCancel = () => {
    setIsCancel(true)
    setIsVisible(false)
  }

  const handleSources = async () => {
    const result = await pickImage()
    if (result) {
        setImagetrustface({
        type: result.type,
        name: result.name,
        uri: result.uri,
      })
    }
  }
  const handleSex = (text) => {
    setSelectSex(text)
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
          <Top title="Source Image" onPress={handleSources} srcImage={imagetrustface} />
          <View style={
            {
              paddingTop: insets.top,
              paddingBottom: insets.bottom,
            }}>
            <ImageButton text="Recognize" onPress={handleTryNow} />
          </View>
        </ScrollView>
      </View>
      {isVisible && <Popup isVisible={isVisible} onPress={handleCancel} />}
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

export default ContainerAiTrustFace;
