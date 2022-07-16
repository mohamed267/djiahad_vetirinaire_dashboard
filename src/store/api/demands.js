import axios from "../../utils/axios"
import params from "./paramsGenerator"
import AuthHeader from "./auth-header"



export const getDemands = async () => {
   const data = await axios.get('demand/user/filter')
    return (data)
}





const UserApi = {
    getDemands
}

export default UserApi


