import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import screenNames from '../utils/screenNames';
import {
  useFlipper,
  useReduxDevToolsExtension,
} from '@react-navigation/devtools';
import BottomTabs from './bottomTabs';
import ProductDetails from '../modules/product/screens';
import {navigationRef} from '../utils/common';

const Stack = createNativeStackNavigator();

const RootRouter = () => {
  useFlipper(navigationRef);
  useReduxDevToolsExtension(navigationRef);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={screenNames.TABS} component={BottomTabs} />
        <Stack.Screen name={screenNames.PRODUCT} component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootRouter;
