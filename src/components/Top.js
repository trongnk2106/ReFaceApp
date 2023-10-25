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
import ImageButton from '../misc/ImageButton';
import { AppImages, icons, colors } from '../assets';
import MyPressable from './MyPressable';


const Top = ({
  title,
  width,
  height,
  onPress,
  srcImage
}) => {
  const navigation = useNavigation();
  const insert = useSafeAreaInsets()
  const window = useWindowDimensions();

  return (<>
    <MyPressable onPress={onPress} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingLeft: insert.left, width: width ? width : '80%', alignSelf: 'center', height: height ? height : window.width / 2 }}>
      <Image
        style={srcImage ? {
          height: '100%', width: '100%', aspectRatio: 0.7,
          borderRadius: 20, borderWidth: 4,
          borderColor: colors.boder,
    
        } : { height: 100, width: 100 }}
        source={srcImage ? { uri: srcImage.uri } : icons.upload}
      resizeMode={ "contain"}
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

export default Top;
