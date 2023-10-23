import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './AppNavigator';
import Toast from './components/Toast';
import { toastRef } from './util/action';
import { DataProvider } from './context/useData';

const AppControlFlow = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DataProvider>
          <AppNavigator />
        </DataProvider>
      </NavigationContainer>
      <Toast {...{ ref: toastRef }} />
    </SafeAreaProvider>
  );
};

export default AppControlFlow;
