/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import screenNames from '../utils/screenNames';

import Cart from '../modules/cart/screens';
import Profile from '../modules/profile/screens';
import HomeScreen from '../modules/home/screens';
import localimages from '../utils/localimages';
import colors from '../utils/colors';
import {normalize} from '../utils/dimensions';
import {tabbarButtonProps} from '../modals';

const TabbarButton = ({
  label,
  isactive,
  defaultProps,
  source,
}: tabbarButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} {...defaultProps}>
      <Image
        style={isactive ? styles.activeImage : styles.inactiveImage}
        source={source}
      />
      <Text style={isactive ? styles.activeText : styles.inactiveText}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const Tabs = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tabs.Navigator screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name={screenNames.HOME}
        component={HomeScreen}
        options={{
          tabBarButton: (props: BottomTabBarButtonProps) => {
            let isactive = props?.accessibilityState?.selected;
            return (
              <TabbarButton
                isactive={isactive}
                label={screenNames.HOME}
                defaultProps={props}
                source={localimages.HOME}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name={screenNames.CART}
        component={Cart}
        options={{
          tabBarButton: (props: BottomTabBarButtonProps) => {
            let isactive = props?.accessibilityState?.selected;
            return (
              <TabbarButton
                isactive={isactive}
                label={screenNames.CART}
                defaultProps={props}
                source={localimages.CART}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name={screenNames.PROFILE}
        component={Profile}
        options={{
          tabBarButton: (props: BottomTabBarButtonProps) => {
            let isactive = props?.accessibilityState?.selected;
            return (
              <TabbarButton
                isactive={isactive}
                label={screenNames.PROFILE}
                defaultProps={props}
                source={localimages.PROFILE}
              />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  activeImage: {
    tintColor: colors.BLACK,
  },
  inactiveImage: {
    tintColor: colors.GREY,
  },
  activeText: {color: colors.BLACK, fontSize: normalize(12), fontWeight: '600'},
  inactiveText: {
    color: colors.GREY,
    fontSize: normalize(12),
    fontWeight: '600',
  },
});
