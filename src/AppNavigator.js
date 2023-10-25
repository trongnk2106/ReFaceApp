import React from 'react';
import { StatusBar, StyleSheet, useWindowDimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { CourseInfoScreen, HomeScreen } from './home';
import {
  FaceSwap,
  FaceSwaped,
  Generate,
  Generated,
  FaceEnhance,
  FaceEnhanced,
  AntiDreamBooth,
  AntiDreamBoothed,
  DeepFake,
  DeepFaked,
  AiProfile,
  AiProfiled,
  AiProfiledReGen,
  AiProfileReGened,
  AiAvatar,
  AiAvatared,
  AiAvatarReGen,
  AiAvatarReGened,
  AiAvatarNext
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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FaceEnhance" component={FaceEnhance} />
        <Stack.Screen name="FaceEnhanced" component={FaceEnhanced} />
        <Stack.Screen name="Generate" component={Generate} />
        <Stack.Screen name="Generated" component={Generated} />
        <Stack.Screen name="FaceSwap" component={FaceSwap} />
        <Stack.Screen name="FaceSwaped" component={FaceSwaped} />
        <Stack.Screen name="DesignCourse" component={HomeScreen} />
        <Stack.Screen name="AntiDreamBooth" component={AntiDreamBooth} />
        <Stack.Screen name="AntiDreamBoothed" component={AntiDreamBoothed} />
        <Stack.Screen name="DeepFake" component={DeepFake}/>
        <Stack.Screen name="DeepFaked" component={DeepFaked}/>

        <Stack.Screen name="AiProfile" component={AiProfile}/>
        <Stack.Screen name="AiProfiled" component={AiProfiled}/>
        <Stack.Screen name="AiProfileReGen" component={AiProfiledReGen}/>
        <Stack.Screen name="AiProfileReGened" component={AiProfileReGened}/>

        <Stack.Screen name="AiAvatar" component={AiAvatar}/>
        <Stack.Screen name="AiAvatarNext" component={AiAvatarNext}/>
        <Stack.Screen name="AiAvatared" component={AiAvatared}/>
        <Stack.Screen name="AiAvatarReGen" component={AiAvatarReGen}/>
        <Stack.Screen name="AiAvatarReGened" component={AiAvatarReGened}/>
        {/* <Stack.Screen name="CourseInfo" component={CourseInfoScreen} /> */}

      </Stack.Navigator>
    </>
  );
};

