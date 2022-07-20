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
        dataExtracted : [],
        updated : false

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


export const getForms = createAsyncThunk(
    "form/fetchAll",
    async ({page , limit , ...query}, thunkAPI) => {
        try {
            const response = await FormApi.getForms({page , limit , ...query})
            const {forms , count} = response.data.data
            return ({ forms, pages: Math.floor(count / limit) + ((count % limit) > 0 ? 1 : 0) })


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

export const createForm = createAsyncThunk(
    "form/create",
    async (query, thunkAPI) => {
        try {
            const response = await FormApi.createForm(query)
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


export const updateForm = createAsyncThunk(
    "form/update",
    async ({form_id , ...query}, thunkAPI) => {
        try {
            const response = await FormApi.updateForm(query , {form_id})
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
        /*getform  */
        [getForm.pending]: (state, action) => {
            state.details.loading = true
            state.details.updated =  false 
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
        /*createform  */
        [createForm.pending]: (state, action) => {
            state.details.loading = true
        },
        [createForm.fulfilled]: (state, action) => {
            state.details.form = action.payload
            state.details.loading = false
            state.details.error = false
        },
        [createForm.rejected]: (state, action) => {
            state.details.loading = false;
            state.details.error = true;
        },
        /*update form */
        [updateForm.pending]: (state, action) => {
            state.details.loading = true
        },
        [updateForm.fulfilled]: (state, action) => {
            state.details.form = action.payload
            state.details.loading = false
            state.details.error = false
            state.details.updated =  true 
        },
        [updateForm.rejected]: (state, action) => {
            state.details.loading = false;
            state.details.error = true;
        },


        /*get forms */
        [getForms.pending]: (state, action) => {
            state.loading = true
        },
        [getForms.fulfilled]: (state, action) => {
            state.forms = action.payload.forms
            state.loading = false
            state.error = false
        },
        [getForms.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
        },



    }
})

// Action creators are generated for each case reducer function

const { reducer, actions } = formSlice;

export const { setFilteredData , setDataExtracted } = actions

export default reducer




