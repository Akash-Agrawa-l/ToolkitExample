import {PayloadAction} from '@reduxjs/toolkit';
import {ProductState} from '../../modals';

export const loaderReducer = {
  setLoader(state: ProductState, action: PayloadAction<boolean>) {
    state.loading = action.payload;
  },
};
