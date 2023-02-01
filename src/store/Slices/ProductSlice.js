import {createAsyncThunk , createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import STATUSES from '../Statuses';



// fetching all products ========================
const productsSlice = createSlice({
    name : "products",
    initialState : {
        data :{},
        status : STATUSES.IDEAL,
        error : null
    },
    extraReducers : (builder)=>{
        builder
        .addCase(fetchProducts.pending, (state , action)=>{
            state.status = STATUSES.LOADING
        })

        .addCase(fetchProducts.fulfilled, (state , action)=>{
            state.data = action.payload
            state.status = STATUSES.SUCCESS
            state.error = null
        })

        .addCase(fetchProducts.rejected, (state , action)=>{
            state.error = action.payload
            state.status = STATUSES.ERROR
        })
    }
});
 
export const fetchProducts = createAsyncThunk( "products/fetch", async( {keyword ='' ,category ,currentPage= 1}, { rejectWithValue })=>{
    try {
        if(category){
            const link = `/products?keyword=${keyword}&category=${category}`;
            const response  = await axios.get(link);
            return response.data
        }
        const link = `/products?keyword=${keyword}&page=${currentPage}`
        const response  = await axios.get(link);
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})





// fetching product detail =========================
const productDetailSlice = createSlice({
    name : "productDetail",
    initialState : {
        data :{},
        status : STATUSES.IDEAL,
        error : null
    },
    extraReducers : (builder)=>{
        builder
        .addCase(fetchProductDetail.pending, (state , action)=>{
            state.status = STATUSES.LOADING
        })

        .addCase(fetchProductDetail.fulfilled, (state , action)=>{
            state.data = action.payload
            state.status = STATUSES.SUCCESS
        })

        .addCase(fetchProductDetail.rejected, (state , action)=>{
            state.error = action.payload
            state.status = STATUSES.ERROR
        })
    }
});
export const fetchProductDetail = createAsyncThunk( "productDetail/fetch", async(id,{ rejectWithValue })=>{
    try {
        const response  = await axios.get(`/product/${id}`);
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});






export {
    productsSlice,
    productDetailSlice
}

