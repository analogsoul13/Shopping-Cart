import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        wishlist: []
    },
    reducers: {
        addToWishlist(state, action) {
            const existing = state.wishlist.find(item => item.id == action.payload.id)
            if (existing) {
                toast.warning("Product Already exist in wishlist !!")
            }
            else {
                state.wishlist.push(action.payload)
                toast.success("Product added to wishlist")
            }
        },
        removeFromWishlist(state,action){
            state.wishlist=state.wishlist.filter(item=>item.id!=action.payload)
            toast.error("Product removed from wishlist!!")
        }
    }
})

export default wishlistSlice.reducer
export const {addToWishlist, removeFromWishlist} = wishlistSlice.actions