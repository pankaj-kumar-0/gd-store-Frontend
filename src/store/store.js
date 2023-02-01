import {configureStore} from '@reduxjs/toolkit';
import {productsSlice ,productDetailSlice} from './Slices/ProductSlice';
import { allUsersSlice, operationUserSlice, singleUserSlice, updateUserSlice, userSlice } from './Slices/UserSlice';


const store = configureStore({
    reducer : {
        products : productsSlice.reducer,
        productDetail : productDetailSlice.reducer,
        user : userSlice.reducer,
        updateUserProfile :updateUserSlice.reducer,
        allUsers :allUsersSlice.reducer,
        singleUser : singleUserSlice.reducer,
        operationUser : operationUserSlice.reducer
    }
});



export default store;