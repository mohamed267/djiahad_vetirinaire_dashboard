import {useState , useEffect} from "react"
import { useTranslation } from "react-i18next";
import  {useLocation , useParams , Navigate} from "react-router-dom"
import {useDispatch , useSelector} from  'react-redux'
import Sidebar from  "../../components/sidebar/sidebar"
import Navbar from  "../../components/navbar/navbar"
import SingleWrapper from  "../../components/singleWrapper/singleWrapper"
import {exportData} from  "../../utils/data"
import { createFormField} from "../../store/formFieldReducer"
import Form from "../../components/form/formCreate"

import structures from "../../structures/form"
import './form_field.scss'



const FieldFrom = ()=>{
    // const {t} = useTranslation("common")
    const  dispatch = useDispatch();
    const location = useLocation();
    const loading = useSelector(state=>state.form_field.details.loading)
    const created = useSelector(state=>state.form_field.details.created)
    
    const opened = useSelector(state=>state.nav.opened)
    // const {region_id} = useParams()


    


    const handleAddFormField = (data) =>{
        dispatch(createFormField(
            {
                ...data , 
                field_group_name : data.field_group.value ? data.field_group.value :  data.field_group.field_group_name,
                form_field_type : data.form_field_type? data.form_field_type.value : "",
                field_options : data.field_options ? data.field_options.map(option=>option.label) : null
            }
        
        ))
    }

    console.log("fffd " ,structures[location.pathname.slice(1).split('/')[0]])
   




    return(
        <div className="form_field">
            {
                created  && <Navigate to="/form_field" />
            }
         <Sidebar />
        <div className={`form_fieldContainer ${opened ? "nav-opened" : "nav-closed"}`}>
            <Navbar />

            <div className="mainContainer">
                <Form
                    structure={structures[location.pathname.slice(1).split('/')[0]]} 
                    submit={handleAddFormField}
                    restricted={true}
                    loading={loading}
                >
                </Form>
            </div>
            
        </div>
    </div>
    )
}

export default FieldFrom