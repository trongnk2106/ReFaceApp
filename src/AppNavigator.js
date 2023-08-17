import React from 'react';
import { StatusBar, StyleSheet, useWindowDimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { CourseInfoScreen, HomeDesignCourse } from './home';
import {
  FaceSwap,
  FaceSwaped,
  Generate,
  Generated,
  FaceEnhance,
  FaceEnhanced
} from './views';

const Stack = createStackNavigator();

export default () => {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FaceEnhance" component={FaceEnhance} />
        <Stack.Screen name="FaceEnhanced" component={FaceEnhanced} />
        <Stack.Screen name="Generate" component={Generate} />
        <Stack.Screen name="Generated" component={Generated} />
        <Stack.Screen name="FaceSwap" component={FaceSwap} />
        <Stack.Screen name="FaceSwaped" component={FaceSwaped} />
        <Stack.Screen name="DesignCourse" component={HomeDesignCourse} />
        <Stack.Screen name="CourseInfo" component={CourseInfoScreen} />

      </Stack.Navigator>
    </>
  );
};

