import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  Image
} from 'react-native';
import MyPressable from '../components/MyPressable';
import MyImage from '../misc/MyImage';


const ViewImage = ({ data, isNull, onScreenClicked, height = '45%' }) => {
  const { index, item } = data;
  const translateY = useRef(new Animated.Value(50)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 1000,
        delay: index * (1000 / 3),
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        delay: index * (1000 / 3),
        useNativeDriver: true,
      }),
    ]).start();
  });

  return (
    <Animated.View
      style={[styles.container, { opacity, transform: [{ translateY }], flexBasis: height }]}
      renderToHardwareTextureAndroid // just to avoid UI glitch when animating view with elevation
    >
      <MyPressable
        style={{
          flex: 1, aspectRatio: 0.8,
        }}
        touchOpacity={0.6}
        onPress={onScreenClicked}
      >
        <View style={{ ...StyleSheet.absoluteFillObject }}>
          <View style={{ flex: 1, alignItems: 'center', }}>
            <Animated.View style={[styles.imageContainer /*, { opacity }, */, { display: 'flex', alignItems: 'center' }]}>
              {/* <Image
                style={{ height: '100%', borderColor: '#5AA8F8', aspectRatio: 0.9, borderWidth: 4, borderRadius: 20, borderColor: '#5AA8F8', }}
                source={item.imagePath}
              /> */}
              <Image source={isNull ? item : { uri: `data:image/png;base64,${item}` }}
                style={{ height: '100%', borderColor: '#5AA8F8', aspectRatio: 0.85, borderWidth: 4, borderRadius: 20, borderColor: '#5AA8F8', }} />
            </Animated.View>
          </View>
        </View>
      </MyPressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: 'hidden',
    marginHorizontal: 16,
    padding: 5

  },
  title: {
    fontSize: 16,
    fontFamily: 'Abel',
    letterSpacing: 0.27,
    color: 'rgb(255, 255, 255)',
    textAlign: 'center',
  },
  imageContainer: {
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 4,
  },
});

export default ViewImage;
