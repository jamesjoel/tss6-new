import { createSlice }  from '@reduxjs/toolkit'

const CartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        addCart(currentState, action){
            currentState.push(action.payload);
        },
        removeOneItem(currentState, action){
            return currentState.filter(item=> item._id != action.payload._id);
        }
    }
});

export default CartSlice.reducer;

export let {addCart, removeOneItem} = CartSlice.actions;