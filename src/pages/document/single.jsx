import {useState , useEffect} from "react"
import {useDispatch , useSelector } from "react-redux"
import {useLocation  ,  useParams , Navigate} from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Sidebar from  "../../components/sidebar/sidebar"
import Navbar from "../../components/navbar/navbar"
import Form from "../../components/form/form"
import {Breadcrumb, Container , Row,Col , BreadcrumbItem} from "reactstrap"

import dataHandler from "../../utils/document"



import { getFormFields } from "../../store/formFieldReducer"

import {updateForm , getForm} from  "../../store/formReducer"

import "./document.scss"




const Document = ()=>{
    const dispatch = useDispatch()
    const {form_id} = useParams()
    const form_fields = useSelector(state=>state.form_field.form_fields)
    const form  =useSelector(state=>state.form.details.form)
    const loading  =useSelector(state=>state.form.details.loading)
    const updated  =useSelector(state=>state.form.details.updated)
    const opened = useSelector(state=>state.nav.opened)

    useEffect( ()=>{
        dispatch(getFormFields({}))
        dispatch(getForm({form_id}))
    }, [])

    
    useEffect( ()=>{
        if(form_fields){
            const formExtracted = dataHandler.extractForm(form_fields)
        }
    }, [form_fields])

    

    const handleAddForm = (data)=>{
        let {farm_name , region , wilaya , daira , commune ,  date , ...form }  = data
        let wilaya_id = wilaya ? wilaya.wilaya_id ? wilaya.wilaya_id : null :null
        let region_id = region ? region.region_id ? region.region_id : null :null
        let commune_id = commune ? commune.commune_id ? commune.commune_id : null :null
        let daira_id = daira ? daira.daira_id ? daira.daira_id : null :null
        console.log(data)
        dispatch(updateForm({
            farm_name , 
            daira_id,
            commune_id,
            wilaya_id,
            region_id,
            form_id,
            date ,
            form
        }))
    }

    



    return(
        <div className="flex document">
            {
                updated && <Navigate to={`/document/${form_id}`} />
            }
            <Sidebar />
            <div className={`documentContainer ${opened ? "nav-opened" : "nav-closed"}`}>
                <Navbar />

                <Container className="py-4">
                    <div className="document_details shadow">
                            <Row className="top p-3 justify-content-between">
                                <Col className="d-flex flex-wrap align-items-baseline">
                                    <h1 className="title_enquete mr-3">enquete épidémiologique</h1>                           
                                </Col>
                            </Row>
                            
                            <PerfectScrollbar style={{maxHeight : "500px"}}>
                                <Row className="details ">
                                       <Form
                                            structure = {dataHandler.extractForm(form_fields)}
                                            submit={handleAddForm}
                                            data={dataHandler.dataForm(form)}
                                            loading={loading}
                                       />
                                </Row>
                            
                            </PerfectScrollbar>
                            
                            
                        
                    </div>
                    
                </Container>
            </div>
        </div>
    )
}


export default Document