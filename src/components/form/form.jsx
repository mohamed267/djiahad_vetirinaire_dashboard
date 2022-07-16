import {useState , useEffect} from 'react'
import {Form , FormGroup ,Label , Row , Col  } from  "reactstrap"
import {useTranslation} from  "react-i18next"
import SwitchToogle from '../switchToggle/switchToggle'
import FileInput   from '../fileInput/fileInput'
import Input from '../input/input'
import Button from '../button/button'
import Select from "../select/select"
import Map from "../map/map"
import {exportData , reformate} from  "../../utils/data" 
import "./form.scss"

const extractComponents = (data ={} , fields , t , handleChange )=>{
    return (
        fields.map(field=>{
            if(field.type){
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
                }else if(field.type=="button"){
                    return (
                        <Col xl={field.xl}>
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
                            />
                        </Col>
                    )
                }else if(field.type=="select"){
                    return(
                        <Col xl={field.xl}>
                            <Select
                                id={field.id}
                                value=  {exportData(data , field.field)} 
                                options={field.options}
                                label = {field.label}
                                name={field.name}
                            />
                        </Col>
                    )
                }else if(field.type=="map"){
                    return(
                        <Col xl={field.xl}>
                           <Map />
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


const FormElement = ({structure , data ={} , submit = ()=>{}})=>{
    const {t} = useTranslation("common");
    const [dataQuery , setDataQuery] =  useState({});
    const handleChange = (key , value)=>{
        setDataQuery({...dataQuery ,...reformate(value , key )})
    }

    useEffect(()=>{
        setDataQuery(data)
    },[])

    useEffect(()=>{
        console.log("data query is ",dataQuery)
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
                        extractComponents(dataQuery ,structure.fields , t  , handleChange)
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