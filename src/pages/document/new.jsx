import {useState , useEffect} from "react"
import {useDispatch , useSelector } from "react-redux"
import {Navigate} from "react-router-dom"
import PerfectScrollbar from 'react-perfect-scrollbar'
import Sidebar from  "../../components/sidebar/sidebar"
import Navbar from "../../components/navbar/navbar"
import Form from "../../components/form/formCreate"
import {Breadcrumb, Container , Row,Col , BreadcrumbItem} from "reactstrap"
import "./document.scss"

import {getForm , setDataExtracted  , setFilteredData} from "../../store/formReducer"
import dataHandler from "../../utils/document"

import { getFormFields } from "../../store/formFieldReducer"

import {createForm} from  "../../store/formReducer"





const Document = ()=>{
    const dispatch = useDispatch()
    const form_fields = useSelector(state=>state.form_field.form_fields)
    const loading  =useSelector(state=>state.form.details.loading)
    const created  =useSelector(state=>state.form.details.created)
    
    const opened = useSelector(state=>state.nav.opened)

    useEffect( ()=>{
        dispatch(getFormFields({}))
    }, [])

    
    

    const handleAddForm = (data)=>{
        let {farm_name , region , wilaya , commune , daira ,   date , ...form }  = data
        let wilaya_id = wilaya ? wilaya.wilaya_id ? wilaya.wilaya_id : null :null
        let region_id = region ? region.region_id ? region.region_id : null :null
        let commune_id = commune ? commune.commune_id ? commune.commune_id : null :null
        let daira_id = daira ? daira.daira_id ? daira.daira_id : null :null
        dispatch(createForm({
            farm_name , 
            commune_id,
            wilaya_id,
            region_id,
            daira_id,
            date ,
            form
        }))
    }

    



    return(
        <div className="flex document">
            {
                created && <Navigate to={`/document/filter`} />
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
                                            d
                                            ata={{}}
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