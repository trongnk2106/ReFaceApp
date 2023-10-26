import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  Image
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import ImageButton from '../../misc/ImageButton';
import { AppImages, icons, colors } from '../../assets';

import MyPressable from '../MyPressable';


const TopImage = ({
  title,
  width,
  height,
  onPress,
  srcImage
}) => {
  const navigation = useNavigation();
  const insert = useSafeAreaInsets()
  const window = useWindowDimensions();

//   const handleroute = (navi) => {
//     console.log('fowrd', navi)
//     if (navi) {
//       navigation.navigate(navi)
//     }
//   }
    // console.log(navi)


  // const handleRoute = () =>{
  //   console.log('bride')
  // }
 
  return (<>
    <MyPressable onPress = {onPress}>
      <Image
      source={srcImage}
      style={{ height: 180 , borderColor: '#5AA8F8', 
      aspectRatio: 0.9, flexGrow: 1, borderWidth: 4, 
      borderRadius: 20, borderColor: '#5AA8F8', width : 180, marginTop : 50 ,}}
      >
      </Image>
    </MyPressable>
  </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
  }
});

export default TopImage;
