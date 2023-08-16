import React, { useState, useRef, useImperativeHandle, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  ToastAndroid,
  useWindowDimensions,
  Platform,
} from 'react-native';


export const DURATION = {
  LENGTH_SHORT: 2000,
  FOREVER: 0,
};

const Toast = React.forwardRef((_props, ref) => {
  const { height } = useWindowDimensions();

  const [isShow, setShow] = useState(false);
  const [toastText, setToastText] = useState('');
  const opacityValue = useRef(new Animated.Value(1)).current;
  let animation = null;
  let timer = null;
  let isShowing = false;

  useEffect(() => {
    return () => {
      animation && animation.stop();
      timer && clearTimeout(timer);
    };
  }, [animation, timer]);

  useImperativeHandle(ref, () => ({
    show: (text) => {
      Platform.OS === 'android'
        ? ToastAndroid.show(text, ToastAndroid.SHORT)
        : show(text);
    },
  }));

  const show = (text) => {
    setShow(true);
    setToastText(text);

    animation = Animated.timing(opacityValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    });
    animation.start(() => {
      isShowing = true;
      close();
    });
  };

  const close = () => {
    let delay = DURATION.LENGTH_SHORT;

    if (!isShowing && !isShow) {
      return;
    }
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      animation = Animated.timing(opacityValue, {
        toValue: 0.0,
        duration: 500,
        useNativeDriver: true,
      });
      animation.start(() => {
        setShow(false);
        isShowing = false;
      });
    }, delay);
  };

  return (
    <>
      {isShow && Platform.OS !== 'android' && (
        <View
          style={[styles.container, { top: height - 120 }]}
          pointerEvents="none"
        >
          <Animated.View style={[styles.content, { opacity: opacityValue }]}>
            <Text style={styles.text}>{toastText}</Text>
          </Animated.View>
        </View>
      )}
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    elevation: 999,
    alignItems: 'center',
    zIndex: 10000,
  },
  content: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 12,
    padding: 10,
    bottom: 64,
    maxWidth: '80%',
  },
  text: {
    fontSize: 14,
    color: '#f8f8f8',
    textAlign: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});

export default Toast;
