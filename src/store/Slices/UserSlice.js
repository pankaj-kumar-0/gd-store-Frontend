import {createAsyncThunk , createSlice, isAnyOf} from '@reduxjs/toolkit';
import axios from 'axios';
import STATUSES from '../Statuses';



const userSlice = createSlice({
    name : "user",
    initialState :{
        data : {},
        isAuthenticated : false,
        status : STATUSES.IDEAL,
        error : null
    },
    reducers:{
        clearError: ((state,action)=>{
            state.error = null
            state.status = STATUSES.IDEAL
        })
    },

    extraReducers:(builder)=>{
        builder
        // user Details
        .addCase( UserDetail.pending  ,(state , action)=>{
            state.status = STATUSES.LOADING
        })
        .addCase(UserDetail.fulfilled ,(state , action)=>{
            state.data = action.payload
            state.status = STATUSES.SUCCESS
            state.isAuthenticated = true
            state.error = null
        })
        .addCase(UserDetail.rejected ,(state , action)=>{
            // state.error = action.payload
            state.data = {}
            state.status = STATUSES.ERROR
            state.isAuthenticated = false
        })


        // logout user 
        .addCase( LogoutUser.pending  ,(state , action)=>{
            state.status = STATUSES.LOADING
        })
        .addCase(LogoutUser.fulfilled ,(state , action)=>{
            state.data = {}
            state.status = STATUSES.SUCCESS
            state.isAuthenticated = false
            state.error = null
        })

        
        .addMatcher( isAnyOf(LoginUser.pending ,RegisterUser.pending), (state , action)=>{
            state.status = STATUSES.LOADING
        })
        .addMatcher( isAnyOf(LoginUser.fulfilled ,RegisterUser.fulfilled) ,(state , action)=>{
            state.data = action.payload
            state.status = STATUSES.SUCCESS
            state.isAuthenticated = true
            state.error = null
        })
        .addMatcher( isAnyOf(LoginUser.rejected ,RegisterUser.rejected)  ,(state , action)=>{
            state.data = {}
            state.error = action.payload
            state.status = STATUSES.ERROR
            state.isAuthenticated = false
        })



    }
});

const updateUserSlice = createSlice({
    name : "updateUser",
    initialState : {
        data : {},
        status : STATUSES.IDEAL,
        error : null
    },
    reducers : {
        clearUpdatedUserError :((state , action)=>{
            state.error = null
            state.status = STATUSES.IDEAL
        }),
        resetUpdatedUserState :((state , action)=>{
            state.error = null
            state.status = STATUSES.IDEAL
            state.data = {}
        })
    },
    extraReducers: (builder)=>{
        builder
        .addCase(UpdateUserProfile.pending, (state,action)=>{
            state.status = STATUSES.LOADING
        })
        .addCase(UpdateUserProfile.fulfilled, (state,action)=>{
            state.data = action.payload
            state.status = STATUSES.SUCCESS
            state.error = null
        })
        .addCase(UpdateUserProfile.rejected, (state,action)=>{
            state.data = {}
            state.status = STATUSES.ERROR
            state.error = action.payload
        })
    }
});

const allUsersSlice = createSlice({
    name : "All Users",
    initialState : {
        data : {},
        status : STATUSES.IDEAL,
        error : null
    },
    extraReducers : (builder)=>{
        builder
        .addCase(AllUsers.pending , (state ,action)=>{
            state.status = STATUSES.LOADING
        })
        .addCase(AllUsers.fulfilled , (state ,action)=>{
            state.data = action.payload
            state.status = STATUSES.SUCCESS
            state.error = null
        })
        .addCase(AllUsers.rejected , (state ,action)=>{
            state.data = {}
            state.status = STATUSES.ERROR
            state.error = action.payload
        })
    }

});

const singleUserSlice = createSlice({
    name : "Single User",
    initialState : {
        data : {},
        status : STATUSES.IDEAL,
        error : null
    },
    extraReducers : (builder)=>{
        builder
        .addCase(SingleUser.pending , (state ,action)=>{
            state.status = STATUSES.LOADING
        })
        .addCase(SingleUser.fulfilled , (state ,action)=>{
            state.data = action.payload
            state.status = STATUSES.SUCCESS
        })
        .addCase(SingleUser.rejected , (state ,action)=>{
            state.error = action.payload
            state.status = STATUSES.ERROR
        })
    }

})


const operationUserSlice = createSlice({
    name : "Operation User",
    initialState : {
        data : {},
        status : STATUSES.IDEAL,
        error : null
    },
    reducers : {
        clearOperationUserError :((state , action)=>{
            state.error = null
            state.status = STATUSES.IDEAL
        }),
        resetOperationUserState :((state , action)=>{
            state.error = null
            state.status = STATUSES.IDEAL
            state.data = {}
        })
    },
    extraReducers : (builder)=>{
        builder
        .addMatcher( isAnyOf(UpdateUserRole.pending ,DeleteUser.pending), (state , action)=>{
            state.status = STATUSES.LOADING
        })
        .addMatcher( isAnyOf(UpdateUserRole.fulfilled ,DeleteUser.fulfilled) ,(state , action)=>{
            state.data = action.payload.message
            state.status = STATUSES.SUCCESS
            state.error = null
        })
        .addMatcher( isAnyOf(UpdateUserRole.rejected ,DeleteUser.rejected)  ,(state , action)=>{
            state.error = action.payload
            state.status = STATUSES.ERROR
            state.data = {}
        })
    }
})






// Login user 
export const LoginUser = createAsyncThunk( "user/login", async ({email,password}, { rejectWithValue })=>{
    try {
        const config = { headers: { "Content-Type": "application/json" } }

        const responce = await axios.post('/login',{email, password}, config);
        return responce.data;

    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})



// Register user 
export const RegisterUser = createAsyncThunk( "user/register", async ({name,email,password}, { rejectWithValue })=>{
    try {
        const config = { headers: { "Content-Type": "application/json" } }

        const responce = await axios.post('/signup',{name,email, password}, config);
        return responce.data;

    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})



// Load user 
export const UserDetail = createAsyncThunk( "user/detail", async ({id=null}, { rejectWithValue })=>{
    try {

        const responce = await axios.get('/user');
        return responce.data;

    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});

// user logout
export const LogoutUser = createAsyncThunk( "user/logout", async ()=>{
    try {
        await axios.get('/logout');

    } catch (error) {
        console.log(error)
    }
});


// Update User Profile - email, name , password
export const UpdateUserProfile = createAsyncThunk( "user/Update", async ({name ,email ,password}, { rejectWithValue })=>{
    try {
        const config = { headers: { "Content-Type": "application/json" } }

        const responce = await axios.put('/user',{name,email, password}, config);
        return responce.data;

    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});


// Admin All Users
export const AllUsers = createAsyncThunk( "admin/allUsers", async({id=null},{rejectWithValue})=>{
    try {
        const responce = await axios.get('/admin/allUser');
        return responce.data;

    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})



// Admin single User
export const SingleUser = createAsyncThunk( "admin/user", async({id},{rejectWithValue})=>{
    try {
        const responce = await axios.get(`/admin/user/${id}`);
        return responce.data;

    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


// Admin update user role
export const UpdateUserRole = createAsyncThunk( "admin/userRoleUpdate", async({id,isAdmin},{rejectWithValue})=>{
    try {
        const config = { headers: { "Content-Type": "application/json" } }
        const responce = await axios.put(`/admin/user/${id}`,{isAdmin} ,config);
        return responce.data;

    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

// Admin user Deletee
export const DeleteUser = createAsyncThunk( "admin/userDelete", async({id},{rejectWithValue})=>{
    try {
        const responce = await axios.delete(`/admin/user/${id}`);
        return responce.data;

    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})





export {userSlice ,updateUserSlice ,allUsersSlice ,singleUserSlice ,operationUserSlice };
export const {clearError} = userSlice.actions;
export const {clearUpdatedUserError,resetUpdatedUserState} = updateUserSlice.actions;
export const {clearOperationUserError,resetOperationUserState} = operationUserSlice.actions;