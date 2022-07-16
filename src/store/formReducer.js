// action - state management
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import FormApi from "./api/form"
import { setMessage } from "./apiMessageReducer"


export const initialState = {
    error: false,
    loading: false,
    forms: [],
    details : {
        error: false,
        loading: false,
        filtereddata : [],
        dataExtracted : []

    },
    pages: 0
};

//-----------------------|| ACCOUNT REDUCER ||-----------------------//


export const getForm = createAsyncThunk(
    "form/fetchOne",
    async (query, thunkAPI) => {
        try {
            const response = await FormApi.getForm(query)
            const form = response.data.data

            return (form)

        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }

    }
)

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers : {
        setFilteredData :  (state, action) => {
            
            console.log("data extracted is ",action.payload.filtereddata)
            state.details.filtereddata = [...action.payload.filtereddata]
        },
        setDataExtracted : (state, action) => {
            state.details.dataExtracted = action.payload.dataExtracted
        }
    },
    extraReducers: {
        /*getSessions  */
        [getForm.pending]: (state, action) => {
            state.details.loading = true
        },
        [getForm.fulfilled]: (state, action) => {
            state.details.form = action.payload
            state.details.loading = false
            state.details.error = false
        },
        [getForm.rejected]: (state, action) => {
            state.details.loading = false;
            state.details.error = true;
        },



    }
})

// Action creators are generated for each case reducer function

const { reducer, actions } = formSlice;

export const { setFilteredData , setDataExtracted } = actions

export default reducer




