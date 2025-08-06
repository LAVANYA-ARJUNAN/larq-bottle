import { createSlice } from '@reduxjs/toolkit'
// const storedItem = localStorage.getItem("cartItem");
// const initialState = { cartItem: storedItem ? JSON.parse(storedItem) : [] };
const CartSlice = createSlice({
    name: "mycart",
    initialState:[],
    reducers: {
        addToCart: (state, action) => {
            const newProduct = action.payload;
            const existProduct = state.find((items) => items._id === newProduct._id);
            if (existProduct) {
                existProduct.quantity += newProduct.quantity;
            }
            else {
                state.push({
                    _id: newProduct._id,
                    img: newProduct.img,
                    title: newProduct.title,
                    inform: newProduct.inform,
                    inform1: newProduct.inform1,
                    price: newProduct.price,
                    quantity: 1
                })
            }
            // localStorage.setItem("cartItem", JSON.stringify(state.cartItem))
        },
        deleteFromCart: (state, action) => {
            return state.filter(
                (items) => items._id !== action.payload._id
            );
            // localStorage.setItem("cartItem", JSON.stringify(state.cartItem))
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const update = state.find((items) => items._id === id)
            if (update) {
                update.quantity = quantity;
                // localStorage.setItem("cartItem", JSON.stringify(state.cartItem))
            }
        }
    }
})
export default CartSlice.reducer;
export const { addToCart, deleteFromCart, updateQuantity } = CartSlice.actions;