import {createSlice} from '@reduxjs/toolkit';
import {useSelector, useDispatch} from 'react-redux';

const initialItemState = {
    itemQuantity: 0,
    itemPrice: 0,
    totalPrice: 0
  };
  
  const itemSlice = createSlice({
    name: 'item',
    initialState: initialItemState,
    reducers: {
        addItem(state, action){
            state.itemQuantity++;
            state.totalPrice+=action.payload;
        },
        substractItem(state, action) {
            state.itemQuantity--;
            state.totalPrice-=action.payload;
        }
    },
  });

    export const authActions = itemSlice.actions;


  export default itemSlice.reducer;