// action - state management
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import FormFieldApi from "./api/form_field"
import { setMessage } from "./apiMessageReducer"


export const initialState = {
    nav : {
        name :"",
        options :[],
        loading : false , 
        changed : false
    },
    search : "",
    opened : false
};

//-----------------------|| ACCOUNT REDUCER ||-----------------------//



export const navSlice = createSlice({
    name: 'nav',
    reducers : {
        setNav : (state , action) =>{
            state.loading =  true ;
            state.nav = action.payload;
            state.loading =  false ;
            state.changed =  !state.changed
        },
        setSearch : (state , action) =>{
            state.search = action.payload.search
        },
        toogleNavOpened :  (state , action) =>{
            state.opened = !state.opened
        },
        setOpened : (state , action) =>{
            state.opened = action.payload.opened
        }

    },
    initialState,
})

// Action creators are generated for each case reducer function

const { reducer, actions } = navSlice;

export const { setNav , setSearch ,toogleNavOpened , setOpened } = actions

export default reducer




