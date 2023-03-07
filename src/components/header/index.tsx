import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../../utils/colors';
import {normalize} from '../../utils/dimensions';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import localimages from '../../utils/localimages';
import {navigationRef} from '../../utils/common';

const Header = () => {
  const insets = useSafeAreaInsets();
  const StatusBarHeight = {paddingTop: normalize(insets?.top)};
  const isHome = navigationRef?.current?.getCurrentRoute()?.name === 'Home';

  const backHandler = () => {
    navigationRef.current.goBack();
  };

  return (
    <View style={[styles.parentContainer, StatusBarHeight]}>
      {isHome ? (
        <Image source={localimages.LOGO} style={styles.logoStyle} />
      ) : (
        <TouchableOpacity onPress={backHandler}>
          <Image source={localimages.ARROW} style={styles.backIcon} />
        </TouchableOpacity>
      )}
      <View style={styles.rightIconContainer}>
        {/* <TouchableOpacity>
          <Image source={localimages.CART} style={styles.iconStyle} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={localimages.CART} style={styles.iconStyle} />
        </TouchableOpacity> */}
        <TouchableOpacity>
          <Image source={localimages.CART} style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: colors.PARENTBACKGROUND,
    width: '100%',
    paddingBottom: normalize(20),
    paddingHorizontal: normalize(18),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  rightIconContainer: {
    flexDirection: 'row',
  },
  logoStyle: {height: normalize(25), aspectRatio: 5.2 / 1},
  iconStyle: {
    width: normalize(25),
    aspectRatio: 1 / 1,
    marginLeft: normalize(15),
  },
  backIcon: {
    width: normalize(25),
    height: normalize(25),
    resizeMode: 'contain',
  },
});
