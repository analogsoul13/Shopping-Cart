import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        wishlist: []
    },
    reducers: {
        addToWishlist(state, action) {
            const existing = state.wishlist.find(item => item.id == action.payload.id)
            if (existing) {
                alert("Product Already exist in wishlist !!")
            }
            else {
                state.wishlist.push(action.payload)
            }
        },
        removeFromWishlist(state,action){
            state.wishlist=state.wishlist.filter(item=>item.id!=action.payload)
        }
    }
})

export default wishlistSlice.reducer
export const {addToWishlist, removeFromWishlist} = wishlistSlice.actions