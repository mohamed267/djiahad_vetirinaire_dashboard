// import { useSelector } from "../index"
import axios from "../../utils/axios"
const AuthHeader = store => next => action => {
    console.log("our auth header is auth");
    let {auth} = store.getState()
    axios.defaults.headers.common['authorization'] = `Bearer ${auth.token ?  auth.token : ""}`;
   return (next(action))
}


export default AuthHeader