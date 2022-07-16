import axios from "../../utils/axios"
import params from "./specparamsgenerator"
import AuthHeader from "./auth-header"



export const students = async (page, limit, search) => {
    const data = await axios.get(`global/student?page=${page}&limit=${limit}&${params({ search }, true)}`)

    return (data)
    // return await axios.get('global/teacher', { email, password })
}





export const payments = async (page, limit, student_id, accepted, refuced) => {
    const data = await axios.get(`admin/student/payment?page=${page}&limit=${limit}&${params({ accepted, refuced, student_id })}`)

    return (data)
    // return await axios.get('global/teacher', { email, password })
}




export const sessions = async (page, limit, id) => {
    const data = await axios.get(`admin/student/session/${id}?page=${page}&limit=${limit}`)

    return (data)
    // return await axios.get('global/teacher', { email, password })
}

export const session = async (id, enrollement_id) => {
    const data = await axios.get(`admin/student/session/selected?id=${id}&enrollement_id=${enrollement_id}`)

    return (data)
    // return await axios.get('global/teacher', { email, password })
}





/*account */

export const account = async (id) => {
    const data = await axios.get(`admin/student/account?id=${id}`)

    return (data)
    // return await axios.get('global/teacher', { email, password })
}
/*update payment */
export const updatePayment = async (student_id, accepted, refuced) => {

    const data = await
        axios.patch(
            `admin/student/payment?${params({ student_id, accepted, refuced }, true)}`,
            { accepted, refuced }
        )

    return (data)
    // return await axios.get('global/teacher', { email, password })
}

/*refuse Payment */
export const refusePayment = async (payment_id) => {
    console.log("we are updating payment ", payment_id)
    const data = await
        axios.patch(
            `admin/student/payment/refuse?${params({ payment_id }, true)}`
        )

    return (data)
    // return await axios.get('global/teacher', { email, password })
}







const StudentApi = { refusePayment, students, payments, account, updatePayment, sessions, session }

export default StudentApi


