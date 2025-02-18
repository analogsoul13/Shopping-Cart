import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice"
import wishSlice from "./slices/wishSlice"
import cartSlice from "./slices/cartSlice"
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage"
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";



const persistConfig = {
    key: "root",
    storage,
    whitelist: ["wishReducer", "cartReducer"]
    
}

const rootReducer = combineReducers({
    productReducer:productSlice,
    wishReducer:wishSlice,
    cartReducer:cartSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const productStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, 
        }),
})

export const persistor = persistStore(productStore)
export default productStore 