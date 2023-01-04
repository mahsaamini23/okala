import { createSlice } from '@reduxjs/toolkit'

export interface typeState {
  total: number,
  cart: [{
    id: number,
    order: number
  }]
}

const initialState: typeState = {
  total: 0,
  cart: [{ id: -1, order: 0 }]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.total += 1;
      state.cart.find(item => item?.id == action.payload)
        ?
        state.cart.map((item, index) => item.id == action.payload ? state.cart[index].order += 1 : null)
        :
        state.cart.push({ id: action.payload, order: 1 })
    },
    removeProduct: (state, action) => {
      state.total -= 1;
      if (state.cart.find(item => item?.id == action.payload)) {
        state.cart.map((item, index) => {
          if (item.id == action.payload) {
            if (state.cart[index].order <2){
              state.cart.splice(index,1);
            }else state.cart[index].order -= 1;
            
          }
        }
        )
      }

    }
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = cartSlice.actions

export default cartSlice.reducer