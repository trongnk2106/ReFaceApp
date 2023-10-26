import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Config from '../Config';
import ContainerAiProfiled from '../components/aiprofile/ContainerAiProfiled';
import { colors } from '../assets';
import HeaderResult from '../components/HeaderResult';

const AiProfiled = () => {
  const insets = useSafeAreaInsets();

  const paddingTop = Config.isIos
    ? Math.max(insets.top, 20)
    : StatusBar.currentHeight;


  return (
    <View style={{ flex: 1, backgroundColor: colors.backround, paddingTop }}>
      <HeaderResult title='AI Profile' />
      <ContainerAiProfiled />
    </View>
  );
};

export default AiProfiled;
