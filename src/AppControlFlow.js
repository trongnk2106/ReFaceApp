import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './AppNavigator';
import Toast from './components/Toast';
import { toastRef } from './util/action';
import { DataProvider } from './context/useData';

/**
 * Renders the main component of the application.
 *
 * @return {JSX.Element} The rendered main component.
 */
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
