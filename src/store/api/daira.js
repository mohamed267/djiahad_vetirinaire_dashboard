import axios from "../../utils/axios"
import params from "./paramsGenerator"



export const getDairas = async (query) => {
    const data = 
    await axios.get(`address/daira`, {
        params : {
            ...params(query , "eq" , true)
        }
    })
     
    return (data)
    // return await axios.get('global/teacher', { email, password })
}







const DairaApi = { getDairas}

export default DairaApi


