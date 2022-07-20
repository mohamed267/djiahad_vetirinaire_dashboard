// action - state management
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import FormFieldApi from "./api/form_field"
import { setMessage } from "./apiMessageReducer"


export const initialState = {
    nav : {
        name :"",
        options :[]
    },
};

//-----------------------|| ACCOUNT REDUCER ||-----------------------//



export const navSlice = createSlice({
    name: 'nav',
    reducers : {
        setNav : (state , action) =>{
            state.nav = action.payload;
        }
    },
    initialState,
})

// Action creators are generated for each case reducer function

const { reducer, actions } = navSlice;

export const { setNav } = actions

export default reducer




