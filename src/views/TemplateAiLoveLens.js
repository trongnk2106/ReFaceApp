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
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import CategoryListView from '../home/CategoryListView';

import PopulerCourseListView from '../home/PopulerCourseListView';

import MyPressable from '../components/MyPressable';
import { CATEGORY_LIST, POPULAR_COURSE_LIST } from '../home/model/category';
import { colors } from '../assets';
import Config from '../Config';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useData } from '../context/useData';
import ContainerTemplateLove from '../components/ailovelens/ContainerAiLoveLensNext';
import ImageButton from '../misc/ImageButton';

const CategoryButton = ({ text, selectedCat, onPress }) => (
  <View style={{ margin: 7 }}>
    <View style={styleCatrgory(selectedCat === text).categoryBtnContainer}>
      <MyPressable touchOpacity={0.6} onPress={onPress}>
        <Text style={styleCatrgory(selectedCat === text).categoryBtnText}>
          {text}
        </Text>
      </MyPressable>
    </View>
  </View>
);

const TemplateAiLoveLens = () => {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const { CATEGORIES_PERSONALIZE,
    CATEGORIES_PROTECT,
    selectedCategoryPerson,
    setSelectedCategoryPerson,
    selectedCategoryProtect,
    setSelectedCategoryProtect } = useData()

  const paddingTop = Config.isIos
    ? Math.max(insets.top, 20)
    : StatusBar.currentHeight;


  return (
  
    <View style={{ flex: 1, backgroundColor: colors.backround, paddingTop }}>
    {/* <StatusBar backgroundColor="white" barStyle="dark-content" /> */}
    <Header title='AI Love Lens' />
    <ContainerTemplateLove />
    {/* <Footer /> */}
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

export default TemplateAiLoveLens;
