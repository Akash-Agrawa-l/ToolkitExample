import {ImageStyle, StyleProp, StyleSheet, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';
import {useSelector} from 'react-redux';
import {normalize} from '../../utils/dimensions';

interface ImageProps {
  source: any;
  style?: StyleProp<ImageStyle> | any;
}

const Shimmer = createShimmerPlaceholder(LinearGradient);

const ImageWithShimmer = ({source, style}: ImageProps) => {
  const loader = useSelector((state: any) => state.products.loading);

  return (
    <View>
      {loader ? (
        <Shimmer
          shimmerColors={[
            colors.SHIMMERBACKGROUND,
            colors.SHIMMER,
            colors.SHIMMERBACKGROUND,
          ]}
          // shimmerColors={[colors.SHIMMER, '#131416', colors.SHIMMER]}
          height={normalize(99)}
          width={normalize(99)}
          location={[0.4, 0.5, 0.6]}
          shimmerStyle={styles.shimmerStyle}
        />
      ) : (
        <FastImage
          resizeMode="contain"
          source={source}
          style={[styles.imageStyle, style]}
        />
      )}
    </View>
  );
};

export default ImageWithShimmer;

const styles = StyleSheet.create({
  imageStyle: {borderRadius: normalize(5)},
  shimmerStyle: {alignSelf: 'center', borderRadius: normalize(5)},
});
