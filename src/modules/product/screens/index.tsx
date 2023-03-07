/* eslint-disable react-hooks/exhaustive-deps */
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';

import ImageWithShimmer from '../../../components/imageWithShimmer';
import Header from '../../../components/header';

import colors from '../../../utils/colors';
import {getEMI, navigationRef, priceFormatter} from '../../../utils/common';
import {getItem} from '../action';
import {productProps} from '../../../modals';
import {setLoader} from '../../home/slice';
import {normalize, screenWidth} from '../../../utils/dimensions';
import strings from '../../../utils/strings';
import {buttons, offers} from '../../../utils/dummyData';
import localimages from '../../../utils/localimages';

const renderOffers = ({item}: {item: string}) => {
  return (
    <View style={styles.offerItem}>
      <Image source={localimages.TAG} style={styles.offerTag} />
      <Text style={styles.offerText}>{item}</Text>
    </View>
  );
};

const renderBullets = ({item}: {item: string}) => {
  return (
    <View style={styles.pointContainer}>
      <Text style={styles.offerText}>
        <Text style={styles.bulletPoint}>{'\u2022  '}</Text>
        {item}
      </Text>
    </View>
  );
};

const ProductDetails = () => {
  const inset = useSafeAreaInsets();
  const id = navigationRef?.current?.getCurrentRoute()?.params?.id;
  const dispatch = useDispatch();
  const data: productProps = useSelector((state: any) => state.item?.itemData);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [textShown, setTextShown] = useState(false);
  const [numLines, setNumLines] = useState(0);

  const highlights = data?.description?.split(/[.]\s/);

  useEffect(() => {
    dispatch(setLoader(true));
    dispatch(
      getItem({
        id,
        callback: func,
      }),
    );
  }, []);

  const func = () => {
    console.log('invoked');
  };

  useEffect(() => {
    if (data?.id === id) {
      dispatch(setLoader(false));
    }
  }, [data]);

  const toggleTextShown = useCallback(() => {
    setTextShown(!textShown);
    setNumLines(0);
  }, [textShown]);

  const onTextLayout = useCallback(
    (e: any) => {
      if (e.nativeEvent.lines.length > 2 && !textShown) {
        setShowMoreButton(true);
        setNumLines(2);
      }
    },
    [textShown],
  );

  const renderButtons = useCallback(
    ({item, index}: {item: string; index: number}) => {
      const emi = getEMI(data.price);
      return (
        <View
          style={[
            styles.buttonContainer,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              marginHorizontal: index === 1 ? normalize(10) : 0,
            },
          ]}>
          <Text style={styles.buttonText}>
            {index === 1 ? `${item}${emi}` : item}
          </Text>
        </View>
      );
    },
    [],
  );

  const renderItem = useCallback(() => {
    return (
      <View style={{backgroundColor: colors.BUTTON_COLOR}}>
        <ImageWithShimmer
          source={{uri: data?.image}}
          style={styles.imageStyle}
        />
        <View style={styles.detailContainer}>
          <Text
            numberOfLines={numLines}
            style={styles.itemTitle}
            onTextLayout={onTextLayout}>
            {data?.title}
          </Text>
          {showMoreButton ? (
            <Text onPress={toggleTextShown} style={styles.seeMoreText}>
              {textShown ? strings.SEE_LESS : strings.SEE_MORE}
            </Text>
          ) : null}
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingStyle}>{data?.rating?.rate} </Text>
            <Text style={styles.ratingStyle}>
              ({data?.rating?.count} {strings.RATINGS})
            </Text>
          </View>
          <Text style={styles.priceStyle}>{priceFormatter(data?.price)}</Text>
        </View>
        <View style={styles.offerContainer}>
          <Text style={styles.offerHeader}>{strings.AVAILABLE_OFFERS}</Text>
          <FlatList
            data={offers}
            renderItem={renderOffers}
            scrollEnabled={false}
          />
          <FlatList
            data={buttons}
            horizontal
            scrollEnabled={false}
            renderItem={renderButtons}
            style={{marginVertical: normalize(24)}}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.offerHeader}>{strings.HIGHLIGHTS}</Text>
          <FlatList
            data={highlights}
            renderItem={renderBullets}
            scrollEnabled={false}
          />
        </View>
      </View>
    );
  }, [data, showMoreButton, textShown, numLines]);

  return (
    <View style={[styles.parentContainer, {paddingBottom: inset.bottom}]}>
      <Header />
      <FlatList
        data={[1]}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        bounces={false}
      />
    </View>
  );
};

export default React.memo(ProductDetails);

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: colors.PARENTBACKGROUND,
    height: '100%',
  },
  imageStyle: {
    width: screenWidth,
    aspectRatio: 1 / 0.65,
    resizeMode: 'contain',
    borderRadius: 0,
    backgroundColor: colors.PARENTBACKGROUND,
  },
  detailContainer: {
    paddingHorizontal: normalize(27),
    paddingTop: normalize(20),
    paddingBottom: normalize(20),
    borderBottomWidth: normalize(2),
    borderColor: colors.SEPERATOR,
    backgroundColor: colors.PARENTBACKGROUND,
  },
  itemTitle: {
    fontSize: normalize(20),
  },
  seeMoreText: {
    fontSize: normalize(16),
    fontWeight: '700',
    marginTop: normalize(5),
  },
  priceStyle: {
    marginTop: normalize(10),
    fontSize: normalize(22),
    fontWeight: '900',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingStyle: {
    marginTop: normalize(16),
  },
  offerContainer: {
    paddingHorizontal: normalize(27),
    paddingTop: normalize(9),
    backgroundColor: colors.PARENTBACKGROUND,
    borderBottomWidth: normalize(1),
    borderColor: colors.SEPERATOR,
  },
  offerHeader: {
    fontSize: normalize(17),
    fontWeight: 'bold',
    marginBottom: normalize(20),
  },
  offerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: normalize(4),
  },
  offerTag: {
    height: normalize(16),
    width: normalize(16),
    resizeMode: 'contain',
    marginRight: normalize(14),
  },
  offerText: {
    fontSize: normalize(14),
    lineHeight: normalize(18),
    width: '90%',
  },
  buttonContainer: {
    width: normalize(99.9),
    height: normalize(50),
    borderWidth: normalize(1),
    borderColor: colors.LIGHT_GREY40,
    backgroundColor: colors.BUTTON_COLOR,
    borderRadius: normalize(6),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: normalize(4),
  },
  buttonText: {fontSize: normalize(12), textAlign: 'center'},
  descriptionContainer: {
    marginTop: normalize(10),
    marginBottom: normalize(10),
    backgroundColor: colors.PARENTBACKGROUND,
    borderBottomWidth: normalize(1),
    borderTopWidth: normalize(1),
    borderColor: colors.SEPERATOR,
    paddingHorizontal: normalize(27),
    paddingVertical: normalize(18),
  },
  pointContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(8),
  },
  bulletPoint: {
    fontSize: normalize(18),
    fontWeight: '900',
  },
});
