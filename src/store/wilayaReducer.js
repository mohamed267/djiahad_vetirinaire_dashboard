// action - state management
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import WilayaApi from "./api/wilaya"
import { setMessage } from "./apiMessageReducer"


export const initialState = {
    error: false,
    loading: false,
    wilayas: [],
    details : {
        error: false,
        loading: false,
        wilaya : {},

    },
    pages: 0
};

//-----------------------|| ACCOUNT REDUCER ||-----------------------//


export const getWilaya = createAsyncThunk(
    "wilaya/fetchOne",
    async (query, thunkAPI) => {
        try {
            const response = await WilayaApi.getWilaya(query)
            const wilaya = response.data.data

            return (wilaya)

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

export const getWilayas = createAsyncThunk(
    "wilaya/fetchAll",
    async (query, thunkAPI) => {
        try {
            const response = await WilayaApi.getWilayas(query)
            const wilaya = response.data.data

            return (wilaya)

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


export const getRegionWilayas = createAsyncThunk(
    "wilaya/region/fetchAll",
    async (query, thunkAPI) => {
        try {
            const response = await WilayaApi.getRegionWilayas(query)
            const wilaya = response.data.data

            console.log("wilayas ", wilaya)

            return (wilaya)

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
    name: 'wilaya',
    initialState,
    reducers : {
        setWilaya : (state,  action) =>{
            state.wilaya_id = action.payload.wilaya_id
        }
    },
    extraReducers: {
        /*get wilayas */
        [getWilayas.pending]: (state, action) => {
            state.loading = true
        },
        [getWilayas.fulfilled]: (state, action) => {
            state.wilayas = action.payload
            state.loading = false
            state.error = false
        },
        [getWilayas.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
        },

        /*get wilaya  */
        [getWilaya.pending]: (state, action) => {
            state.details.loading = true
        },
        [getWilaya.fulfilled]: (state, action) => {
            state.details.wilaya = action.payload
            state.details.loading = false
            state.details.error = false
        },
        [getWilaya.rejected]: (state, action) => {
            state.details.loading = false;
            state.details.error = true;
        },

        /*get region  wilayas */
        [getRegionWilayas.pending]: (state, action) => {
            state.details.loading = true
        },
        [getRegionWilayas.fulfilled]: (state, action) => {
            state.wilayas = action.payload
            state.loading = false
            state.error = false
        },
        [getRegionWilayas.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
        },



    }
})

// Action creators are generated for each case reducer function

const { reducer, actions } = formSlice;

export const { setWilaya} = actions

export default reducer




