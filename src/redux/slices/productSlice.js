import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductsThunk = createAsyncThunk('products/fetchProductsThunk', async()=>{
    const response = await axios.get('https://dummyjson.com/products')
    return response.data.products
})

const productSlice = createSlice({
    name:'products',
    initialState:{
        product:[],
        loading:false,
        error:""
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProductsThunk.fulfilled,(state, action)=>{
            state.product=action.payload
            state.loading=false
        }),
        builder.addCase(fetchProductsThunk.pending,(state,action) => {
            state.product=[]
            state.loading=true
        }),
        builder.addCase(fetchProductsThunk.rejected,(state,action)=>{
            state.product=[]
            state.loading=false
            state.error="API Fetching Failed !!"
        })

    }
})

export default productSlice.reducer