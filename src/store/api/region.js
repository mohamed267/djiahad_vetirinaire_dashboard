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





const RegionApi = { getRegion , getRegions}

export default RegionApi


