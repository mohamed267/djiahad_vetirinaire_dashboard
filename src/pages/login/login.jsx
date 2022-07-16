import {useState , useEffect} from "react"
import {useTranslation} from "react-i18next"
import {useLocation } from "react-router-dom"
import {useDispatch} from "react-redux"
import {login , logout} from "../../store/authReducer"

import Form from "../../components/form/form"
import structures from "../../structures/form"
import Bg from "../../assets/images/bg.png"

import "./login.scss"

const Login = ()=>{
    const {t} = useTranslation("commmon")
    const location = useLocation()
    const dispatch =  useDispatch()
    // useEffect( ()=>{
    //     dispatch(logout({admin_username : "admin" , admin_password : "password"}))
    // }, [])

    const handleLogin = (data)=>{
        dispatch(login(data))
    }

    return(
        <div className="login" style={{backgroundImage: `url(${Bg})`}}>
            <div className="login_wrapper m-auto">
                <h4 className="login_title mb-2">{t("welcome")}</h4>
                <p className="login_desc mb-2">{t("admin login")}</p>
                <Form 
                    onSubmit={handleLogin}
                    structure={structures[location.pathname.slice(1).split('/')[0]]} 
                    submit={handleLogin}
                />

            </div>  
        </div>
    )
}

export default Login