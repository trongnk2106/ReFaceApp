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

const ContainerUploadLove = () => {
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
    imageLoveLensWoman, setImageLoveLensWoman,
    imageLoveLensMan, setImageLoveLensMan,
    ismale, setIsmale

  } = useData()

  const [isVisible, setIsVisible] = useState(false)
  const [isCancel, setIsCancel] = useState(false)
  const [chooseType, setChooseType] = useState('male')

  const handleSources = async () => {
    const result = await pickImage()
    if (result) {
      setImageLoveLensWoman({
        type: result.type,
        name: result.name,
        uri: result.uri,
      })
    }
  }

  const handleSourcesCouple = async () => {
    if (chooseType === 'male') {
      const result = await pickImage()
      if (result) {
        setImageLoveLensMan({
          type: result.type,
          name: result.name,
          uri: result.uri,
        })
      }
    } else {
      const result = await pickImage()
      if (result) {
        setImageLoveLensWoman({
          type: result.type,
          name: result.name,
          uri: result.uri,
        })
      }
    }

  }


  const handleContinue = () => {
    navigation.navigate('TemplateAiLoveLens')
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
          {/* <RenderList title='Personalize Face' data={CATEGORIES_PERSONALIZE}
            selectedCategory={selectedCategoryPerson}
            setSelectedCategory={setSelectedCategoryPerson}></RenderList> */}
          {ismale === 'female' || ismale === 'male' ?
            <>
              <MyText title='User photo' />
              <View style={{ flexGrow: 1, padding: 30 }}>
                <Top title="Source Image" onPress={handleSources} srcImage={imageLoveLensWoman} />
              </View>

            </> :
            <>

              <MyText title='Male' />
              <Top title="Male Image" onPress={handleSourcesCouple} srcImage={imageLoveLensMan} />


              <MyText title='Female' />
              <Top title="Female Image" onPress={() => {
                setChooseType('female')
                handleSources()
              }} srcImage={imageLoveLensWoman} />

            </>
          }

          <View style={
            {
              paddingTop: insets.top,
              paddingBottom: insets.bottom,
            }}>
            <ImageButton text="Continue" onPress={handleContinue} />
          </View>

        </ScrollView>
      </View>
      {/* {isVisible && <Popup isVisible={isVisible} onPress={handleCancel} />} */}
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

export default ContainerUploadLove;
