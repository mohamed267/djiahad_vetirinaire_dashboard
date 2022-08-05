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

export const createForm = async (query) => {
    const data = 
    await axios.post(`form`, query)
     
    return (data)
    // return await axios.get('global/teacher', { email, password })
}

export const getForms =  async({page , limit ,filter , search ,  ...query}) => {
    const data = 
    await axios.get(`form`, {
        params : {
            page , limit ,filter, search, 
            ...params(query , "eq" , true)
        }
    })
     
    return (data)
    // return await axios.get('global/teacher', { email, password })
}


const updateForm =  async (query , param) => {
    const data = await axios.put(`form`, 
    query , {
        params : {
            ...param
        }
    })
     
    return (data)
    // return await axios.get('global/teacher', { email, password })
}

const deleteForms =  async (query ) => {
    const data = await axios.delete(`form`, 
    {
        params : {
            ...params(query , "eq" , true)
        }
    }
    )
     
    return (data)
    // return await axios.get('global/teacher', { email, password })
}







const FormApi = { getForm , createForm , getForms , updateForm , deleteForms}

export default FormApi


