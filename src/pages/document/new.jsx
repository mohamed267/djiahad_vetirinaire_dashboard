import {useState , useEffect} from "react"
import {useDispatch , useSelector } from "react-redux"
import PerfectScrollbar from 'react-perfect-scrollbar'
import Sidebar from  "../../components/sidebar/sidebar"
import Navbar from "../../components/navbar/navbar"
import Form from "../../components/form/formCreate"
import {Breadcrumb, Container , Row,Col , BreadcrumbItem} from "reactstrap"
import "./document.scss"

import {getForm , setDataExtracted  , setFilteredData} from "../../store/formReducer"
import {extractForm } from "../../utils/document"

import { getFormFields } from "../../store/formFieldReducer"

import {createForm} from  "../../store/formReducer"





const Document = ()=>{
    const dispatch = useDispatch()
    const form_fields = useSelector(state=>state.form_field.form_fields)

    useEffect( ()=>{
        dispatch(getFormFields({}))
    }, [])

    
    useEffect( ()=>{
        if(form_fields){
            const formExtracted = extractForm(form_fields)
            console.log("frm extra ",formExtracted)
        }
    }, [form_fields])

    const handleAddForm = (data)=>{
        console.log("our form ", data )
        let {farm_name , region , wilaya , commune ,  date , ...form }  = data
        let wilaya_id = wilaya ? wilaya.wilaya_id ? wilaya.wilaya_id : null :null
        let region_id = region ? region.region_id ? region.region_id : null :null
        let commune_id = commune ? commune.commune_id ? commune.commune_id : null :null
        console.log(data)
        dispatch(createForm({
            farm_name , 
            commune_id,
            wilaya_id,
            region_id,
            date ,
            form
        }))
    }

    



    return(
        <div className="flex document">
            <Sidebar />
            <div className="documentContainer">
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
                                            structure = {extractForm(form_fields)}
                                            submit={handleAddForm}
                                            data={{}}
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