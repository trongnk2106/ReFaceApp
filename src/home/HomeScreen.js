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
import CategoryListView from './CategoryListView';
import PopulerCourseListView from './PopulerCourseListView';
import MyPressable from '../components/MyPressable';
import { CATEGORY_LIST, POPULAR_COURSE_LIST } from './model/category';
import { colors } from '../assets';
import Config from '../Config';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useData } from '../context/useData';


const HomeScreen = () => {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const paddingTop = Config.isIos
    ? Math.max(insets.top, 20)
    : StatusBar.currentHeight;

  const handleChat = () => {
    // console.log('handle chat')
    navigation.navigate('Chatbox')
  }


  return (
    <View style={{ flex: 1, backgroundColor: colors.backround, paddingTop }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Header />
      <View style={{ marginTop: 16, marginBottom: 16 }}>
        <View style={{
          display: 'flex', flexDirection: 'row',
          display: 'flex', justifyContent: 'space-between', marginRight: 90
        }}>
          <Text style={styles.sectionHeaderText}>Chat2Art</Text>
          <MyPressable style={{
            backgroundColor: '#1076D5', borderRadius: 20, display: 'flex',
            justifyContent: 'center', marginTop: 10,
            height: 25
          }} onPress = {handleChat}>
            <Text style={{
              color: 'white',
              paddingLeft: 40,
              paddingRight: 40,
              fontSize: 16,
            }} >Try now</Text>
          </MyPressable>
        </View>
        <Text style={[styles.sectionHeaderText, {
          color: 'white', 
          paddingTop: 8,
          paddingLeft: 10,
          paddingRight: 10,
          marginLeft: 0,
          paddingBottom: 5,
          paddingTop: 5,
          fontSize: 16,
          paddingTop: 4,
          paddingLeft: 18,
          paddingRight: 16,
          // textAlign: 'center'
          marginLeft: 30
        }]} >ChatGPT for personalizing your face</Text>
      </View>
      <View>
        <Text style={[styles.sectionHeaderText, { marginBottom: 0 }]}>Experience with yourself</Text>
        <Text style={[styles.sectionHeaderText, {
          color: 'white',
          paddingLeft: 10,
          paddingRight: 10,
          marginLeft: 0,
          paddingBottom: 16,
          fontSize: 16,
          paddingLeft: 18,
          paddingRight: 16,
          // textAlign: 'center'
          marginLeft: 30
        }]} >ChatGPT for personalizing your face</Text>
      </View>
      <FlatList
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 16 + insets.bottom,
          alignItems: "center",
          borderColor: '#F2BCEA',
          borderWidth: 1,
          paddingTop: 16,
          marginLeft: 32,
          marginRight: 32,
          borderRadius: 30,
          marginBottom: 32,
        }}
        columnWrapperStyle={{ paddingHorizontal: 8 }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={POPULAR_COURSE_LIST}
        // ListHeaderComponent={renderScrollableHeaderTop}
        ItemSeparatorComponent={() => <View style={{ height: 32 }} />}
        renderItem={data => (
          <PopulerCourseListView
            {...{ data }}
            onScreenClicked={(des) => navigation.navigate(des)}
          />
        )}
        keyExtractor={item => item.id.toString()
        }
      />
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
    // textAlign: 'center'
    marginLeft: 30
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

export default HomeScreen;
