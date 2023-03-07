import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import {ImageSourcePropType} from 'react-native/types';

export interface productProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: ImageSourcePropType | undefined;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductState {
  data?: [productProps] | [];
  loading?: boolean;
  itemData?: productProps | {};
}

export interface tabbarButtonProps {
  label: string;
  isactive?: boolean;
  defaultProps: BottomTabBarButtonProps;
  source: ImageSourcePropType;
}
