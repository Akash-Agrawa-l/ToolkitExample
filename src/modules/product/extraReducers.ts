import {getItem} from './action';

export const itemExtraReducer = (builder: any) => {
  builder.addCase(getItem.pending, (state: any) => {
    console.log(
      '%c Pending ',
      'color: white; background-color: #E67C00',
      state,
    );
  });
  builder.addCase(getItem.fulfilled, (state: any, action: any) => {
    console.log(
      '%c Response ',
      'color: white; background-color: #429a34',
      action.payload,
    );
    state.itemData = action.payload;
  });
  builder.addCase(getItem.rejected, (state: any, action: any) => {
    console.log(
      '%c Error ',
      'color: white; background-color: #D33F49',
      action.payload,
    );
  });
};
