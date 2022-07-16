// action - state management
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import UserApi from "./api/user"
import { setMessage } from "./apiMessageReducer"

import { ACCOUNT_INITIALIZE, LOGIN, LOGOUT } from './actions';
import StudentApi from './api/student';

export const initialState = {
    error: false,
    loading: false,
    students: [],
    payments: [],
    details: {
        payments: [],
        materials: [],
        submition: [],
        student: {},
        loading: false,
        error: false,
        actLoading: false,
        actError: false,
        delLoading: false,
        delError: false,
        delSuccess: false,
        actSuccess: false
    },
};

var pages = 0


export const getStudents = createAsyncThunk(
    "student/students",
    async ({ page, limit, search }, thunkAPI) => {
        try {
            const student = await StudentApi.students(page, limit, search)
            const { students, count } = student.data.data
            return ({ students, pages: Math.floor(count / limit) + ((count % limit) > 0 ? 1 : 0) })

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


/*get sessions */


export const getSessions = createAsyncThunk(
    "student/sessions",
    async ({ page, limit, student_id }, thunkAPI) => {
        try {
            const payment = await StudentApi.sessions(page, limit, student_id)
            const { enrollements, count } = payment.data.data
            return ({ sessions: enrollements, pages: Math.floor(count / limit) + ((count % limit) > 0 ? 1 : 0) })

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

/*get session*/

export const getSession = createAsyncThunk(
    "student/session",
    async ({ student_id, enrollement_id }, thunkAPI) => {
        try {
            const payment = await StudentApi.session(student_id, enrollement_id)
            const { session, enrollement } = payment.data.data
            return ({ session, enrollement })

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
/*get teacher account */

export const getAccount = createAsyncThunk(
    "student/details/account",
    async ({ student_id }, thunkAPI) => {
        try {
            const payment = await StudentApi.account(student_id)
            const { dept, student } = payment.data.data
            return ({ dept, student })

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

/*ban student updateBanUser */
export const updateBanUser = createAsyncThunk(
    "student/ban",
    async ({ id, suspended }, thunkAPI) => {
        try {
            await UserApi.updateBanUser(id, suspended)
            return ({ "message": "student deleted " })
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

/*delete student  */
export const deleteStudent = createAsyncThunk(
    "student/delete",
    async ({ id }, thunkAPI) => {
        try {
            await UserApi.deleteUser(id)
            return ({ "message": "student deleted " })
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

export const getPayments = createAsyncThunk(
    "student/payments",
    async ({ page, limit, refuced, accepted }, thunkAPI) => {
        try {
            const payment = await StudentApi.payments(page, limit, null, refuced, accepted)
            const { payments, count } = payment.data.data
            return ({ payments, pages: Math.floor(count / limit) + ((count % limit) > 0 ? 1 : 0) })

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

export const getStudentPayments = createAsyncThunk(
    "student/details/payments",
    async ({ page, limit, student_id, accepted, refuced }, thunkAPI) => {
        try {
            const payment = await StudentApi.payments(page, limit, student_id, accepted, refuced)
            const { payments, count } = payment.data.data
            return ({ payments, pages: Math.floor(count / limit) + ((count % limit) > 0 ? 1 : 0) })

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

/* updatePayment */
export const acceptPayment = createAsyncThunk(
    "student/details/payments/acccept",
    async ({ student_id }, thunkAPI) => {
        try {
            await StudentApi.updatePayment(student_id, true)
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
/* updatePayment */
export const refucePayment = createAsyncThunk(
    "student/details/payments/refuce",
    async ({ student_id }, thunkAPI) => {
        try {
            await StudentApi.updatePayment(student_id, null, true)
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


// refusePayment
/* refuse receipt */
export const refuceReceipt = createAsyncThunk(
    "student/details/payments/receipt/refuce",
    async ({ id }, thunkAPI) => {
        try {
            await StudentApi.refusePayment(id)
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


})




        export const studentSlice = createSlice({
            name: 'student',
            initialState,
            extraReducers: {
                /*getStudents  */
                [getStudents.pending]: (state, action) => {
                    state.loading = true
                },
                [getStudents.fulfilled]: (state, action) => {
                    state.students = action.payload.students
                    state.pages = action.payload.pages
                    state.loading = false
                    state.error = false
                },
                [getStudents.rejected]: (state, action) => {
                    state.loading = false;
                    state.error = true;
                },
                /*get account */
                [getAccount.pending]: (state, action) => {
                    state.details.loading = true
                },
                [getAccount.fulfilled]: (state, action) => {
                    state.details.dept = action.payload.dept
                    state.details.student = action.payload.student
                    state.details.pages = action.payload.pages
                    state.details.loading = false
                    state.details.error = false
                },
                [getAccount.rejected]: (state, action) => {
                    state.details.loading = false;
                    state.details.error = true;
                },
                /*get sessions */
                [getSessions.pending]: (state, action) => {
                    state.details.loading = true
                },
                [getSessions.fulfilled]: (state, action) => {
                    state.details.sessions = action.payload.sessions
                    state.details.pages = action.payload.pages
                    state.details.loading = false
                    state.details.error = false
                },
                [getSessions.rejected]: (state, action) => {
                    state.details.loading = false;
                    state.details.error = true;
                },
                /*get session */
                [getSession.pending]: (state, action) => {
                    state.details.loading = true
                },
                [getSession.fulfilled]: (state, action) => {
                    state.details.session = action.payload.session
                    state.details.enrollement = action.payload.enrollement
                    state.details.loading = false
                    state.details.error = false
                },
                [getSession.rejected]: (state, action) => {
                    state.details.loading = false;
                    state.details.error = true;
                },
                /*get payments */
                [getPayments.pending]: (state, action) => {
                    state.loading = true
                },
                [getPayments.fulfilled]: (state, action) => {
                    state.payments = action.payload.payments
                    state.pages = action.payload.pages
                    state.loading = false
                    state.error = false
                },
                [getPayments.rejected]: (state, action) => {
                    state.loading = false;
                    state.error = true;
                },
                /*get payments */
                [getStudentPayments.pending]: (state, action) => {
                    state.details.loading = true
                },
                [getStudentPayments.fulfilled]: (state, action) => {
                    state.details.payments = action.payload.payments
                    state.details.pages = action.payload.pages
                    state.details.loading = false
                    state.details.error = false
                },
                [getStudentPayments.rejected]: (state, action) => {
                    state.details.loading = false;
                    state.details.error = true;
                },

                /*delete student  */
                [deleteStudent.pending]: (state, action) => {
                    state.details.delLoading = true
                    state.details.delSuccess = false
                    state.details.delError = false
                },
                [deleteStudent.fulfilled]: (state, action) => {
                    state.details.delLoading = false
                    state.details.deltError = false
                    state.details.delSuccess = true
                },
                [deleteStudent.rejected]: (state, action) => {
                    state.details.delLoading = false
                    state.details.delError = true
                },
                /*update student */
                [updateBanUser.pending]: (state, action) => {
                    state.details.banLoading = true
                    state.details.banSuccess = false
                    state.details.banError = false
                },
                [updateBanUser.fulfilled]: (state, action) => {
                    state.details.banLoading = false
                    state.details.bantError = false
                    state.details.banSuccess = true
                },
                [updateBanUser.rejected]: (state, action) => {
                    state.details.banLoading = false
                    state.details.banError = true
                },



                /*acceptPayment */
                [acceptPayment.pending]: (state, action) => {
                    state.details.actLoading = true
                },
                [acceptPayment.fulfilled]: (state, action) => {
                    state.details.actLoading = false
                    state.details.actError = false
                    state.details.actSuccess = true
                },
                [acceptPayment.rejected]: (state, action) => {
                    state.details.actLoading = false;
                    state.details.actError = true;
                },

                /*refucePayment */
                [refucePayment.pending]: (state, delion) => {
                    state.details.delLoading = true
                },
                [refucePayment.fulfilled]: (state, delion) => {
                    state.details.delLoading = false
                    state.details.delError = false
                    state.details.delSuccess = true
                },
                [refucePayment.rejected]: (state, delion) => {
                    state.details.delLoading = false;
                    state.details.delError = true;
                },
                /*refuceReceipt*/
                [refuceReceipt.pending]: (state, delion) => {
                    state.details.delLoading = true
                },
                [refuceReceipt.fulfilled]: (state, delion) => {
                    state.details.delLoading = false
                    state.details.delError = false
                    state.details.delSuccess = true
                },
                [refuceReceipt.rejected]: (state, delion) => {
                    state.details.delLoading = false;
                    state.details.delError = true;
                },





            }
        })


        // Action creators are generated for each case reducer function

        const { reducer, actions } = studentSlice;

        // export const { getTeachers } = actions

        export default reducer

