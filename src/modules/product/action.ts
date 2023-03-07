import {createAsyncThunk} from '@reduxjs/toolkit';
import {$http} from '../../utils/apiServices';
import endpoints from '../../utils/endpoints';

export const getItem: any = createAsyncThunk(
  'item/getSingleItem',
  async (args: any) => {
    try {
      const response = await $http.get(`${endpoints.PRODUCTS}/${args.id}`);
      if (response.status === 200) {
        return response.data;
      }
      return response;
    } catch (error) {
      return error;
    }
  },
  {},
);
