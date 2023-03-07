import {createSlice} from '@reduxjs/toolkit';
import {HomeReducer} from '../../utils/reducerStates';
import {productReducer} from './extrareducer';
import {loaderReducer} from './reducer';

export const allProductSlice = createSlice({
  name: 'products',
  initialState: HomeReducer,
  reducers: loaderReducer,
  extraReducers: productReducer,
});

export const {setLoader} = allProductSlice.actions;

export default allProductSlice.reducer;
