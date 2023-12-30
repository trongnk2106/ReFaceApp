import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Config from '../Config';
import Header from '../components/Header';
import ContainerAiProfile from '../components/aiprofile/ContainerAiProfile';
import { colors } from '../assets';

import ContainerChatbox from '../components/chatbox/ContainerChat';

/**
 * AiProfile component.
 *
 * This component displays an AI profile.
 */
const Chatbox = () => {
  // Get the safe area insets
  const insets = useSafeAreaInsets();

  // Calculate the padding top based on the platform
  const paddingTop = Config.isIos
    ? Math.max(insets.top, 20)
    : StatusBar.currentHeight;

  // Render the component
  return (
    <View style={{ 
      flex: 1, 
      backgroundColor: colors.backround, 
      paddingTop 
    }}>
      <Header title='Chat' />
      <ContainerChatbox />
    </View>
  );
};

export default Chatbox;
