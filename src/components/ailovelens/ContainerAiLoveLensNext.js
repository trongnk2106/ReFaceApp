import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  useWindowDimensions,
  FlatList,
  ScrollView
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


import MyPressable from '../MyPressable';
import { colors } from '../../assets';
import Config from '../../Config';

import { useData } from '../../context/useData';
import MyText from '../../misc/MyText';

import ImageButton from '../../misc/ImageButton';
import ViewImage from '../../misc/ViewImage';
import axios from 'axios';
import Popup from '../../misc/Popup';



const infoHeight = 364.0;


const ContainerTemplateLove = () => {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false)
  const [isCancel, setIsCancel] = useState(false)
  const { 
    LOVELENS_TEMPLATE,
    lovelenstemplate, setLoveLenstemplate,
    imageLoveLensWoman, 
    ismale,
   setResultLoveLens
  } = useData()

  const paddingTop = Config.isIos
    ? Math.max(insets.top, 20)
    : StatusBar.currentHeight;


  const handleTryNow = async () => {
    setIsCancel(false)
    setIsVisible(true)
    await uploadImage()
    setIsVisible(false)
    if (!isCancel) {
      navigation.navigate('AiLoveLensed')
    }

  }

  const handleCancel = () => {
    setIsCancel(true)
    setIsVisible(false)
  }
  const uploadImage = async () => {

    const formData = new FormData();

    if (imageLoveLensWoman) {

      if (ismale === 'male') {
        formData.append('file_male', imageLoveLensWoman)
        formData.append('theme', lovelenstemplate)
      }
      else if (ismale === 'female') {
        formData.append('file_female', imageLoveLensWoman)
        formData.append('theme', lovelenstemplate)
      }
      else {
        formData.append('file_male', imageLoveLensWoman)
        formData.append('file_female', imageLoveLensWoman)
        formData.append('theme', lovelenstemplate)
      }


      try {
        const response = await axios.post('https://aiclub.uit.edu.vn/namnh/soict-app/api/v1/ailovelens', formData, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
          },
        })
   
        setResultLoveLens(response.data.base64_image)
      } catch (error) {
        console.error('Error uploading image: ', error);
      }
    }
  }



  return (
    <View style={{ flex: 1 }}>
      <View style={{
        flex: 1,
        backgroundColor: colors.backround,
        shadowColor: 'grey',
        shadowOffset: { width: 1.1, height: 1.1 },
      }}>
        <ScrollView contentContainerStyle={{
          flexGrow: 1,
          minHeight: infoHeight,
        }}>
          <MyText title="Choose template" />
          <FlatList
            contentContainerStyle={{
              flexGrow: 1,
              paddingBottom: 16 + insets.bottom,
              alignItems: "center",
              paddingTop: 16,
              marginBottom: 32,
              justifyContent: 'center',
            }}
            columnWrapperStyle={{ paddingHorizontal: 8 }}
            numColumns={3}
            scrollEnabled={false}
            data={LOVELENS_TEMPLATE}
            ItemSeparatorComponent={() => <View style={{ height: 16 }} />}

            renderItem={data => (
              <ViewImage
                data={data}
                isNull={true}
                onScreenClicked={() => {
                  // console.log((data.index))
                  setLoveLenstemplate(data.item)
                }}
                height='27%'
                isSelected={lovelenstemplate === data.item}
              />
            )}
          />
          <View style={
            {
              paddingTop: insets.top,
              paddingBottom: insets.bottom,
            }}>
            <ImageButton text="Generate" onPress={handleTryNow} />
          </View>
        </ScrollView>
      </View>
      {isVisible && <Popup isVisible={isVisible} onPress={handleCancel} />}
    </View>
  );
};

const styles = StyleSheet.create({
  searchInputMainContainer: {
    marginTop: 8,
    marginLeft: 18,
    height: 64,
  },
  searchInputContainer: {
    flexDirection: 'row',
    backgroundColor: '#F8FAFB',
    marginVertical: 8,
    borderRadius: 13,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'WorkSans-SemiBold',
    color: 'dodgerblue',
  },
  sectionHeaderText: {
    color: '#F2BCEA',
    fontSize: 24,
    fontFamily: 'WorkSans-SemiBold',
    letterSpacing: 0.27,
    paddingTop: 8,
    paddingLeft: 18,
    paddingRight: 16,
    marginBottom: 32,
    marginTop: 16,
    textAlign: 'center'
  },
  categoryRowContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  header: {
    flexDirection: 'row',
    paddingTop: 8,
    paddingHorizontal: 18,
  },
  headerTextNormal: {
    color: 'grey',
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.2,
  },
  headerTextBold: {
    color: 'black',
    fontSize: 22,
    fontFamily: 'WorkSans-Bold',
    letterSpacing: 0.2,
  },
});

const styleCatrgory = (selected) =>
  StyleSheet.create({
    categoryBtnContainer: {
      flex: 1,
      overflow: 'hidden',
      borderRadius: 24,
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

export default ContainerTemplateLove;
