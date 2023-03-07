import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../../../components/header';
import {useDispatch, useSelector} from 'react-redux';
import {getAllProducts} from '../action';
import {productProps} from '../../../modals';
import ListCard from '../../../components/listCard';
import colors from '../../../utils/colors';
import {AppDispatch} from '../../../store';
import CarouselSlider from '../../../components/carouselSlider';

const HomeScreen = () => {
  const dispatch: AppDispatch = useDispatch();
  const products: productProps[] = useSelector(
    (state: any) => state.products?.data,
  );

  useEffect(() => {
    dispatch(getAllProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = React.useCallback(
    ({item}: any) => {
      return <ListCard data={item} />;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [products],
  );

  const handleData = () => {
    if (products?.length > 1) {
      return products;
    }
    return [1, 2, 3, 4, 5, 6, 7, 8];
  };

  const handleHeader = () => {
    if (products?.length > 1) {
      return <CarouselSlider />;
    }
    return null;
  };

  return (
    <View style={[styles.parentContainer]}>
      <Header />
      <FlatList
        // @ts-ignore
        data={handleData()}
        numColumns={2}
        renderItem={renderItem}
        ListHeaderComponent={handleHeader}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  parentContainer: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: colors.PARENTBACKGROUND,
  },
  contentContainerStyle: {
    paddingBottom: '45.7%',
  },
});
