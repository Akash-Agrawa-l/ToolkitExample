// import {loaderReducer} from '../modules/home/reducer';
import {combineReducers} from '@reduxjs/toolkit';
import productReducer from '../modules/home/slice';
import itemReducer from '../modules/product/slice';

// const RootReducer = {
//   products: productReducer,
//   // loader: loaderReducer,
// };

const RootReducer = combineReducers({
  products: productReducer,
  item: itemReducer,
});

export default RootReducer;
