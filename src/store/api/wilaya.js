import axios from "../../utils/axios"
import params from "./paramsGenerator"



export const getWilayas = async (query) => {
    const data = 
    await axios.get(`address/wilaya`, {
        params : {
            ...params(query , "eq" , true)
        }
    })
     
    return (data)
    // return await axios.get('global/teacher', { email, password })
}


export const getRegionWilayas = async (query) =>{
    const data = 
    await axios.get(`address/wilaya/region`, {
        params : {
            ...params(query , "eq" , true)
        }
    })
    
    return (data)
}





const WilayaApi = { getWilayas ,getRegionWilayas}

export default WilayaApi


