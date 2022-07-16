import {useState , useEffect} from "react"
import { useTranslation } from "react-i18next";
import  {useLocation , useParams} from "react-router-dom"
import {useDispatch , useSelector} from  'react-redux'
import Sidebar from  "../../components/sidebar/sidebar"
import Navbar from  "../../components/navbar/navbar"
import SingleWrapper from  "../../components/singleWrapper/singleWrapper"
import {exportData} from  "../../utils/data"
import {getRegion} from "../../store/regionReducer"
import Form from "../../components/form/form"

import structures from "../../structures/form"
import './region.scss'



const Region = ()=>{
    const {t} = useTranslation("common")
    const  dispatch = useDispatch();
    const location = useLocation();
    const {region_id} = useParams()


    useEffect( ()=>{
        dispatch(getRegion({region_id}))
    }, [])


    const handleLogin = () =>{
        alert("login")
    }
   




    return(
        <div className="region">
         <Sidebar />
        <div className="regionContainer">
            <Navbar />

            <div className="mainContainer">
                <Form
                    structure={structures[location.pathname.slice(1).split('/')[0]]} 
                    submit={handleLogin}
                >
                </Form>
            </div>
            
        </div>
    </div>
    )
}

export default Region