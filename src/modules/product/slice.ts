import {createSlice} from '@reduxjs/toolkit';
import {ItemReducer} from '../../utils/reducerStates';
import {itemExtraReducer} from './extraReducers';
import {itemReducer} from './reducer';

export const itemSlice = createSlice({
  name: 'item',
  initialState: ItemReducer,
  reducers: itemReducer,
  extraReducers: itemExtraReducer,
});

export default itemSlice.reducer;
