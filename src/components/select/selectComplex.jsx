import {FormGroup, Label , Input  } from  "reactstrap"
import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import Select from  "react-select"
import CreatableSelect from 'react-select/creatable';
import {useTranslation} from 'react-i18next'

import './select.scss'




const SelectComponent  =({id ,value ,  label , 
    name , placeholder , className , type , field , options , isMulti , creatable ,
    changed = ()=>{}})=>{
    const {t} = useTranslation("common");
    


    return (
        <>
       
            <FormGroup className={`select_form_group  col-xl-8 ${className}`}>
                <Label for={id}>
                {t(label)}
                </Label>
                    { 
                    creatable ? 
                        <CreatableSelect 
                            id={id}
                            options={options ? options.options: []} 
                            getOptionLabel ={(option)=>option.label ? option.label:  option[options.label]}
                            getOptionValue ={(option)=>option.value ? option.value :  option[options.value]}
                            name={name}
                            isMulti={isMulti}
                            placeholder={t(placeholder)}
                            type={type}
                            value={value}
                            onChange={(e)=>{changed(field ,  {...e ,  type : "SELECTCOMPLEX"} )}}
                        
                        
                        />
                    :
                    <Select
                    id={id}
                    options={options ? options.options: []} 
                    getOptionLabel ={(option)=>option[options.label]}
                    getOptionValue ={(option)=>option[options.value]}
                    name={name}
                    isMulti={isMulti}
                    placeholder={t(placeholder)}
                    type={type}
                    value={value}
                    onChange={(e)=>{changed(field ,  {...e ,  type : "SELECTCOMPLEX"} )}}
                />
                    
                    
            }
                    
            </FormGroup>
            <FormGroup className={className +" col-xl-4"}>
                <Label for={id}>
                    *
                </Label>
                 <Input
                    value={value ? value.extra ? value.extra :
                        typeof(value)=="string" ? value.split("_*_")[1] ?  value.split("_*_")[1] 
                        :"" :"" :""
                
                        }
                    onChange={(e)=>{
                        changed(
                            field ,  {
                                ...value ,  
                                extra :  e.target.value, 
                                type : "SELECTCOMPLEX"
                            } )
                        }}
                 />
            </FormGroup>
        </>
    )
}



export default SelectComponent



                    {/*name={name}
                    type={type}
                    value={value} */}
                    {/* onChange={(e)=>{changed(field , e.target.value)}} */}