import {FlatList, Image, StyleSheet} from 'react-native';
import React from 'react';
import {sliderData} from '../../utils/dummyData';
import {normalize, screenWidth, vw} from '../../utils/dimensions';

const renderItem = ({item}: any) => {
  return <Image style={styles.imageStyle} source={item.source} />;
};

const CarouselSlider = () => {
  const offsets = [0, vw(230)];

  return (
    <FlatList
      data={sliderData}
      renderItem={renderItem}
      horizontal
      style={styles.listStyle}
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      snapToOffsets={offsets}
    />
  );
};

export default CarouselSlider;

const styles = StyleSheet.create({
  listStyle: {
    paddingTop: normalize(10),
    height: '8%',
    width: screenWidth,
  },
  imageStyle: {
    height: '100%',
    resizeMode: 'contain',
    borderRadius: normalize(8),
    marginHorizontal: normalize(11),
  },
});
