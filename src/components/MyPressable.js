import React from 'react';
import { Pressable, StyleProp, ViewStyle, PressableProps } from 'react-native';
import Config from '../Config';


const MyPressable = ({
  style,
  android_ripple = { color: 'lightgrey' },
  touchOpacity = 0.4,
  children,
  ...restOfPRops
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        style,
        { opacity: !Config.isAndroid && pressed ? touchOpacity : 1 },
      ]}
      android_ripple={android_ripple}
      {...restOfPRops}
    >
      {children}
    </Pressable>
  );
};

export default MyPressable;
