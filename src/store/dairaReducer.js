// action - state management
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import DairaApi from "./api/daira"
import { setMessage } from "./apiMessageReducer"


export const initialState = {
    error: false,
    loading: false,
    dairas: [],
    details : {
        error: false,
        loading: false,
        daira : {},

    },
    pages: 0
};

//-----------------------|| ACCOUNT REDUCER ||-----------------------//


export const getDaira = createAsyncThunk(
    "daira/fetchOne",
    async (query, thunkAPI) => {
        try {
            const response = await DairaApi.getDaira(query)
            const daira = response.data.data

            return (daira)

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

export const getDairas = createAsyncThunk(
    "daira/fetchAll",
    async (query, thunkAPI) => {
        try {
            const response = await DairaApi.getDairas(query)
            const daira = response.data.data

            return (daira)

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
    name: 'daira',
    initialState,
    reducers : {
        setDaira : (state,  action) =>{
            state.daira_id = action.payload.daira_id
        }
    },
    extraReducers: {
        /*get dairas */
        [getDairas.pending]: (state, action) => {
            state.loading = true
        },
        [getDairas.fulfilled]: (state, action) => {
            state.dairas = action.payload
            state.loading = false
            state.error = false
        },
        [getDairas.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
        },

        /*get daira  */
        [getDaira.pending]: (state, action) => {
            state.details.loading = true
        },
        [getDaira.fulfilled]: (state, action) => {
            state.details.daira = action.payload
            state.details.loading = false
            state.details.error = false
        },
        [getDaira.rejected]: (state, action) => {
            state.details.loading = false;
            state.details.error = true;
        },

        



    }
})

// Action creators are generated for each case reducer function

const { reducer, actions } = formSlice;

export const { setDaira} = actions

export default reducer




