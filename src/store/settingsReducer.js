// action - state management
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import SessionApi from "./api/session"
import SettingsApi from "./api/settings"
import { setMessage } from "./apiMessageReducer"
import { ACCOUNT_INITIALIZE, LOGIN, LOGOUT } from './actions';

export const initialState = {
    loading: false,
    settings: {},
    address: {},
    upSuccess: false,
    upLoading: false,
    days: []
};

//-----------------------|| ACCOUNT REDUCER ||-----------------------//


export const getDays = createAsyncThunk(
    "settings/days",
    async (thunkAPI) => {
        try {
            const res = await SettingsApi.days()
            const { days } = res.data.data
            return ({ days })

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

export const getSettings = createAsyncThunk(
    "settings/general",
    async (thunkAPI) => {
        try {
            const res = await SettingsApi.getSettings()
            return ({ settings: res.data.data })

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
/*address shows in client */
export const getAddressInfo = createAsyncThunk(
    "settings/address",
    async (thunkAPI) => {
        try {
            const res = await SettingsApi.address()
            return ({ address: res.data.data })

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
/*updates */

export const updateSettings = createAsyncThunk(
    "settings/general/update",
    async (data, thunkAPI) => {
        try {
            let time = new Date()
            let diff_time_zoneminute = -time.getTimezoneOffset()
            await SettingsApi.updateSettings({ ...data, diff_time_zoneminute })
            return ({})

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

export const updateDay = createAsyncThunk(
    "settings/day/update",
    async ({ id, working }, thunkAPI) => {
        try {
            await SettingsApi.updateDay(id, working)
            return ({})

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

export const updateAddress = createAsyncThunk(
    "settings/address/update",
    async (data, thunkAPI) => {
        try {
            const res = await SettingsApi.updateAddress(data)
            return ({})

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


export const SettingsSlice = createSlice({
    name: 'settings',
    initialState,
    extraReducers: {
        /*getDays  */
        [getDays.pending]: (state, action) => {
            state.loading = true
        },
        [getDays.fulfilled]: (state, action) => {
            state.days = action.payload.days
            state.loading = false
            state.error = false
            state.upLoading = false
        },
        [getDays.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        /*update day */
        [updateDay.pending]: (state, action) => {
            state.upLoading = true
            state.upSuccess = false
        },
        [updateDay.fulfilled]: (state, action) => {
            state.upSuccess = true
        },
        /*get settings */
        [getSettings.pending]: (state, action) => {
            state.loading = true
        },
        [getSettings.fulfilled]: (state, action) => {
            state.settings = action.payload.settings
            state.loading = false
            state.error = false
        },
        [getSettings.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
        },

        /*update settings */
        [updateSettings.pending]: (state, action) => {
            state.loading = true
        },
        [updateSettings.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
        },
        [updateSettings.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
        },

        /* get address info*/
        [getAddressInfo.pending]: (state, action) => {
            state.loading = true
        },
        [getAddressInfo.fulfilled]: (state, action) => {
            state.address = action.payload.address
            state.loading = false
            state.error = false
        },
        [getAddressInfo.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
        },

        /*update address */
        [updateAddress.pending]: (state, action) => {
            state.loading = true
        },
        [updateAddress.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
        },
        [updateAddress.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
        },


    }
})

// Action creators are generated for each case reducer function

const { reducer, actions } = SettingsSlice;

// export const { getTeachers } = actions

export default reducer




