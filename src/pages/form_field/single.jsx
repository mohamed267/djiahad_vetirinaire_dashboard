import {useState , useEffect} from "react"
import { useTranslation } from "react-i18next";
import  {useLocation , useParams , Navigate} from "react-router-dom"
import {useDispatch , useSelector} from  'react-redux'
import Sidebar from  "../../components/sidebar/sidebar"
import Navbar from  "../../components/navbar/navbar"
import SingleWrapper from  "../../components/singleWrapper/singleWrapper"
import {exportData} from  "../../utils/data"
import { getFormField , updateFormField} from "../../store/formFieldReducer"
import Form from "../../components/form/form"

import structures from "../../structures/form"
import './form_field.scss'



const FieldFrom = ()=>{
    // const {t} = useTranslation("common")
    const {form_field_id} = useParams()
    const  dispatch = useDispatch();
    const location = useLocation();
    const form_field = useSelector(state=>state.form_field.details.form_field)
    const loading = useSelector(state=>state.form_field.details.loading)
    const updated = useSelector(state=>state.form_field.details.updated)
    const created = useSelector(state=>state.form_field.details.created)
    


    // const {region_id} = useParams()


    useEffect( ()=>{
        dispatch(getFormField({form_field_id}))
    }, [])


    const handleUpdateFormField = (data) =>{
        console.log("data is   form ", data)
        dispatch(updateFormField(
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
                (created || updated )  && <Navigate to="/form_field" />
            }
         <Sidebar />
        <div className="form_fieldContainer">
            <Navbar />

            <div className="mainContainer">
                <Form
                    structure={structures[location.pathname.slice(1).split('/')[0]]} 
                    submit={handleUpdateFormField}
                    restricted={true}
                    loading={loading}
                    data={form_field}
                >
                </Form>
            </div>
            
        </div>
    </div>
    )
}

export default FieldFrom