import {createSlice} from '@reduxjs/toolkit';


const initialCartState = {
    isCart: false,
    itemTotal: 0,
    priceTotal: 0
  };
  
  const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        toogleCart(state) {
            state.isCart = !state.isCart;
        }
    },
  });

    export const cartActions = cartSlice.actions;


  export default cartSlice.reducer;