import axios from "../../utils/axios"
import params from "./paramsGenerator"
import AuthHeader from "./auth-header"



export const getForm = async (query) => {
    const data = 
    await axios.get(`form/single`, {
        params : {
            ...params(query , "eq" , true)
        }
    })
     
    return (data)
    // return await axios.get('global/teacher', { email, password })
}





const CourseApi = { getForm}

export default CourseApi


