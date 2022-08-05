import {useState , useEffect} from "react"
import { useTranslation } from "react-i18next";
import  {useLocation , useParams , useNavigate} from "react-router-dom"
import {useDispatch , useSelector} from  'react-redux'
import Sidebar from  "../../components/sidebar/sidebar"
import Navbar from  "../../components/navbar/navbar"
import Form from "../../components/form/formCreate"
import SingleWrapper from  "../../components/singleWrapper/singleWrapper"
import {exportData} from  "../../utils/data"
import {getRegion , createRegion} from "../../store/regionReducer"
import {setNav} from "../../store/navReducer"

import structures from "../../structures/form"
import {getFormFieldsNav} from "../../store/formFieldReducer"
import './nav.scss'



const Region = ()=>{
    const {t} = useTranslation("common")
    const  dispatch = useDispatch();
    const navigate = useNavigate()
    const location = useLocation();
    
    const opened = useSelector(state=>state.nav.opened)
    const loading = useSelector(state=>state.nav.nav.loading)

    const handleEditNav = (e) =>{
        let form_fields_nav = e.form_fields_nav 
        let name = form_fields_nav.form_field_name
        let options = form_fields_nav.field_options.map(el=>el.field_option_value)
        dispatch(setNav({name , options}))
        navigate("/")
        
    }

    useEffect(() =>{
        dispatch(getFormFieldsNav({}))
    }, [])

   


   




    return(
        <div className="nav">
         <Sidebar />
        <div className={`navContainer ${opened ? "nav-opened" : "nav-closed"}`}>
            <Navbar />

            <div className="mainContainer">
                <Form
                    structure={structures[location.pathname.slice(1).split('/')[0]]} 
                    submit={handleEditNav}
                    loading={loading}

                >
                </Form>
            </div>
            
        </div>
    </div>
    )
}

export default Region