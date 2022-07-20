import {useState , useEffect} from 'react'
import {Form , FormGroup ,Label , Row , Col  } from  "reactstrap"
import {useLocation} from "react-router-dom"
import {useTranslation} from  "react-i18next"
import SwitchToogle from '../switchToggle/switchToggle'
import FileInput   from '../fileInput/fileInput'
import Input from '../input/input'
import TextArea from "../input/textarea"
import AddressInput from '../input/address'
import GpsInput from "../input/gps"
import Button from '../button/button'
import Select from "../select/select"
import ComplexSelect from "../select/selectComplex"
import StoredSelect from "../select/storedSelect"
import Map from "../map/map"
import Loader from "../../layouts/loader/loader"
import {exportData , reformate} from  "../../utils/data" 
import "./form.scss"

const extractComponents = (data ={} , fields = []  , t , handleChange , isRacine  , loading )=>{
    if(isRacine){    
        let form_field_type =  data && data.form_field_type   
        if(form_field_type && (form_field_type.value ==="SELECT" || form_field_type.value ==="COMPLEXSELECT" ) ){
             fields[3] =  {
                type : "select", 
                label : "options",
                creatable : true,
                field : "field_options",
                name: "field_options",  
                isMulti : true,   
                // icon : "las la-lock input-icon",
                placeholder : "enter your options",
                xl :6,
                id :  "field_options"
            }
        }else{
            fields[3] =  {
                type :  "none"
            }
        }
    }
    
    return (
        fields.map(field=>{
            if(field.type == "none"){
                return null
            }
            else if(field.type=="title"){
                return (
                    <Col md={12} className='d-flex gap-3 align-items-center mb-3 '>
                        <p className="title_details">{field.label}</p>
                        <p className="divider mx-4"></p>
                    </Col>
                )
            }else if(field.type){
                if(field.type=="imageInput"){
                    return(
                        <Col xl={field.xl}>
                            <FileInput 
                                src={exportData(data , field.field)} 
                                name={field.name}/>
                        </Col>
                    )
                }else if(field.type=="input"){
                    return ( 
                        <Col xl={field.xl}>
                            <Input 
                                label={field.label}
                                value={exportData(data , field.field)}
                                name={field.name}
                                field={field.field}
                                placeholder={field.placeholder}
                                className={field.className}
                                type={field.typeInput}
                                id={`id_form_${field.id}`}
                                changed={handleChange}
                            />
                        </Col>
                    )
                }else if(field.type=="textarea"){
                    return ( 
                        <Col xl={field.xl}>
                            <TextArea 
                                label={field.label}
                                value={exportData(data , field.field)}
                                name={field.name}
                                field={field.field}
                                placeholder={field.placeholder}
                                className={field.className}
                                id={`id_form_${field.id}`}
                                changed={handleChange}
                            />
                        </Col>
                    )

                }else if(field.type =="address"){
                    return (
                        <Col xl={field.xl}>
                            <AddressInput 
                                id={field.id}
                                value=  {exportData(data , field.field)} 
                                field = {field.field}
                                label = {field.label}
                                name={field.name}
                                changed={handleChange}
                            />
                        </Col>
                    )
                    
                }else if(field.type =="gps"){
                    return (
                        <Col xl={field.xl}>
                            <GpsInput 
                                id={field.id}
                                value=  {exportData(data , field.field)} 
                                field = {field.field}
                                label = {field.label}
                                name={field.name}
                                changed={handleChange}
                            />
                        </Col>
                    )
                    
                }else if(field.type=="button"){
                    return (
                        <Col xl={field.xl}>
                            {
                                loading ? <div>loading </div> : null
                            }
                            <Button 
                                className={field.className}
                                text={field.text}

                            />
                        </Col>
                    )
                }else if(field.type=="switch"){
                    return(
                        <Col xl={field.xl}>
                            <SwitchToogle
                                id={field.id}
                                value=  {exportData(data , field.field)} 
                                checkedOn = {field.checkedOn}
                                on = {field.on}
                                off = {field.off}
                                label = {field.label}
                                name={field.name}
                                field={field.field}
                                 changed={handleChange}
                            />
                        </Col>
                    )
                }else if(field.type=="select"){
                    return(
                        <Col xl={field.xl} className={field.className}>
                            {
                                (field.typeSelect == "store")
                                ?  
                                <StoredSelect 
                                    id={field.id}
                                    value=  {exportData(data , field.field)} 
                                    field = {field.field}
                                    field_deleted ={field.field_deleted}
                                    options={field.options}
                                    label = {field.label}
                                    name={field.name}
                                    isMulti={field.isMulti}
                                    creatable={field.creatable}
                                    changed={handleChange} />
                                :
                                <Select
                                    id={field.id}
                                    value=  {exportData(data , field.field)} 
                                    options={field.options}
                                    field = {field.field}
                                    field_deleted ={field.field_deleted}
                                    label = {field.label}
                                    name={field.name}
                                    creatable={field.creatable}
                                    isMulti={field.isMulti}
                                    changed={handleChange} 
                                /> 
                            }
                        </Col>
                    )
                }else if(field.type == "select_complex"){
                    return(
                        <Col xl={field.xl} className={field.className +" row align-items-center"}>
                            {
                                <ComplexSelect 
                                    id={field.id}
                                    value=  {exportData(data , field.field)} 
                                    field = {field.field}
                                    options={field.options}
                                    label = {field.label}
                                    name={field.name}
                                    isMulti={field.isMulti}
                                    creatable={field.creatable}
                                    changed={handleChange}
                                /> 
                            }
                        </Col>
                    )
                }else if(field.type=="map"){
                    return(
                        <Col xl={field.xl}>
                           <Map 
                                typeMap={field.typeMap}
                                lat={exportData(data , field.field_lat)}
                                lng={exportData(data , field.field_lng)}
                                radius={exportData(data , field.field_radius)}
                                field_radius={field.field_radius}
                                field_lat={field.field_lat}
                                field_lng={field.field_lng}
                                changed={handleChange}
                           />
                        </Col>
                    )
                }

            }else{
                return (
                    <Col xl={field.xl} >
                        <Row className={field.className}>
                            {extractComponents(data , field.fields)}
                        </Row>
                    </Col>
                )
            }
        })
    )
}


const FormElement = ({structure , data ={} , submit = ()=>{} , restricted , loading} )=>{
    const {t} = useTranslation("common");
    const location = useLocation()
    const [dataQuery , setDataQuery] =  useState(data);
    const handleChange = (key , value)=>{
        console.log("handled ",  dataQuery)
        setDataQuery({...dataQuery ,...reformate(value , key )})
    }

    useEffect(()=>{
        if(data){
            setDataQuery(data)
        }
    }  , [data]) 

    useEffect(()=>{
        console.log("data query 3 ", dataQuery)
    },[dataQuery])

    const handleSubmit =(e)=>{
        e.preventDefault();
        submit(dataQuery);
    }



    return (
        <div className={`form ${structure.className}`}>
            <h4 className="title">{t(structure.title)}</h4> 
            <Form onSubmit={handleSubmit}>
                <Row gap={2} className="justify-content-between">



                    {
                        // structure.fields.map(field=>{
                        //     if(field.type="imageInput"){
                        //         return(
                        //             <Col xl={field.xl}>
                        //                 <FileInput 
                        //                     src={exportData(data , field.field)} 
                        //                     name={field.name}/>
                        //             </Col>
                        //         )
                        //     }
                        // })
                        loading  ? 
                        (<Loader />)
                        :
                        extractComponents(dataQuery ,structure.fields , setDataQuery , handleChange , restricted , loading)
                    }
                    {/* <Col xl={6}>
                        <Row>
                        <Col xl={12}>
                        <FormGroup>
                            <Label for="exampleEmail">
                            Name
                            </Label>
                                <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="with a placeholder"
                                type="email"
                                />
                        </FormGroup>
                    </Col>
                    <Col xl={12}>
                        <FormGroup>
                            <Label for="exampleEmail">
                            Email
                            </Label>
                                <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="with a placeholder"
                                type="email"
                                />
                        </FormGroup>
                    </Col>
                    <Col xl={12}>
                        <FormGroup>
                            <Label for="exampleEmail">
                            Number
                            </Label>
                                <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="with a placeholder"
                                type="email"
                                />
                        </FormGroup>
                    </Col>
                        </Row>
                    </Col>
                    
                   
                    <Col xl={12}>
                        <FormGroup>
                            <Label for="exampleEmail">
                            Address
                            </Label>
                                <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="with a placeholder"
                                type="email"
                                />
                        </FormGroup>
                    </Col>
                    
                    
                    <Col xl={4}>
                        <SwitchToogle/>
                    </Col>
                    <Col xl={4}>
                        <SwitchToogle/>
                    </Col>
                    <Col xl={4}>
                        <SwitchToogle/>
                    </Col> 
                    <Col xl={12}>
                        <Button className="w-100 btn--primary">
                            {t("save chages")}
                        </Button>
                    </Col> */}
                    
                </Row>
            </Form>
            

        </div>
    )
}


export default FormElement