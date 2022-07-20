import axios from "../../utils/axios"
import params from "./paramsGenerator"
import AuthHeader from "./auth-header"



export const getRegion = async (query) => {
    const data = 
    await axios.get(`region/single`, {
        params : {
            ...params(query , "eq" , true)
        }
    })
     
    return (data)
    // return await axios.get('global/teacher', { email, password })
}

export const getRegions = async (query) => {
    const data = 
    await axios.get(`region`, {
        params : {
            ...params(query , "eq" , true)
        }
    })
     
    return (data)
    // return await axios.get('global/teacher', { email, password })
}

export const createRegion = async (data) => {
    const response =  await axios.post(`region`,data)
    return (response)
}


export const updateRegions =  async (query , param) => {
    const data = 
    await axios.put(`region`, query , {
        params : {
            ...param
        }
    })
     
    return (data)
    // return await axios.get('global/teacher', { email, password })
}





const RegionApi = { getRegion , getRegions , createRegion , updateRegions}

export default RegionApi


