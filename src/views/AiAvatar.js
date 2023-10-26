import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Config from '../Config';
import Header from '../components/Header';
import ContainerAiAvatar from '../components/aiavatar/ContainerAiAvatar';
import { colors } from '../assets';

const AiAvatar = () => {
  const insets = useSafeAreaInsets();

  const paddingTop = Config.isIos
    ? Math.max(insets.top, 20)
    : StatusBar.currentHeight;

  return (
    <View style={{ flex: 1, backgroundColor: colors.backround, paddingTop }}>
      <Header title='AI Avatar' />
      <ContainerAiAvatar />
    </View>
  );
};

export default AiAvatar;
