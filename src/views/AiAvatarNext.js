import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Config from '../Config';
import ContainerAiAvatarNext from '../components/aiavatar/ContainerAiAvatarNext';

import { colors } from '../assets';
import Header from '../components/Header';

const AiAvatarNext = ({route}) => {
  const insets = useSafeAreaInsets();
  const {list} = route.params
  const paddingTop = Config.isIos
    ? Math.max(insets.top, 20)
    : StatusBar.currentHeight;

  return (
    <View style={{ flex: 1, backgroundColor: colors.backround, paddingTop }}>
      <Header title='AI Avatar'  />
      <ContainerAiAvatarNext list={list}/>
    </View>
  );
};


export default AiAvatarNext;
