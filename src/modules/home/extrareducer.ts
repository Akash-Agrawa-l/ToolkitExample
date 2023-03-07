import {getAllProducts} from './action';

export const productReducer = (builder: any) => {
  builder.addCase(getAllProducts.pending, (state: any) => {
    console.log('%c Pending ', 'color: white; background-color: #E67C00');
    state.loading = true;
  });
  builder.addCase(getAllProducts.fulfilled, (state: any, action: any) => {
    console.log(
      '%c Response ',
      'color: white; background-color: #429a34',
      action.payload,
    );
    state.data = action.payload;
    state.loading = false;
  });
  builder.addCase(getAllProducts.rejected, (state: any, action: any) => {
    console.log(
      '%c Error ',
      'color: white; background-color: #D33F49',
      action.payload,
    );
    state.loading = false;
  });
};
