import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Config from '../Config';
import Header from '../components/Header';
import ContainerAiReface from '../components/aireface/ContainerAiReface';
import { colors } from '../assets';

/**
 * A functional component that renders the AI Reface screen.
 * It uses the SafeAreaInsets hook to get the insets of the device's screen.
 * The paddingTop is calculated based on the device's operating system.
 * The ContainerAiReface component is rendered inside a View.
 */
const AiReface = () => {
  // Get the insets of the device's screen
  const insets = useSafeAreaInsets();

  // Calculate the paddingTop based on the device's operating system
  const paddingTop = Config.isIos
    ? Math.max(insets.top, 20)
    : StatusBar.currentHeight;

  // Render the AI Reface screen
  return (
    <View 
      style={{ 
        flex: 1, 
        backgroundColor: colors.backround, 
        paddingTop 
      }}
    >
      <Header title='AI Reface' />
      <ContainerAiReface />
    </View>
  );
};

export default AiReface;
