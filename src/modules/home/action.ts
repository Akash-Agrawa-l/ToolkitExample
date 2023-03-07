import {createAsyncThunk} from '@reduxjs/toolkit';
import {$http} from '../../utils/apiServices';
import endpoints from '../../utils/endpoints';

export const getAllProducts: any = createAsyncThunk(
  'product/getAllProducts',
  async () => {
    try {
      const response = await $http.get(endpoints.PRODUCTS);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  {},
);
