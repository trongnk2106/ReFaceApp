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
import { AppImages } from '../../assets';


const Top = ({
  title,
  width,
  height,
}) => {
  const navigation = useNavigation();
  const insert = useSafeAreaInsets()
  const window = useWindowDimensions();

  return (<>
    <View style={[styles.container,
    {
      paddingTop: insert.top,
      paddingBottom: insert.bottom,
    }]}>
      <ImageButton text={title} />
    </View>
    <Image
      style={{ flex: 1, paddingLeft: insert.left, width: width ? width : '90%', alignSelf: 'center', height: height ? height : window.width / 2 }}
      source={AppImages.webInterFace}
    >
    </Image>
  </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
  }
});

export default Top;
