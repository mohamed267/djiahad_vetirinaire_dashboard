import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {FormGroup ,Label  } from  "reactstrap"
import Select from  "react-select"
import CreatableSelect from 'react-select/creatable';
import {useTranslation} from 'react-i18next'

import './select.scss'




const SelectComponent  =({id ,value ,  label , 
    name , placeholder , className , type , field , options , isMulti , creatable ,
    changed = ()=>{}})=>{
    const {t} = useTranslation("common");



    const handleValue  = (optionValue)=>{
        if(typeof(optionValue)=="string"){
            let keyValue =  options ? options.value ? options.value : "value" : "value"
            let ourOptions =  options ? options.options ? options.options : [] :[]
            let snapValue = ourOptions.find(option=>(option[keyValue]==optionValue))
            return snapValue
        }else {
            return value
        }
    }
   
    


    return (
       
        <FormGroup className={`select_form_group ${className}`}>
            <Label for={id}>
            {t(label)}
            </Label>
                { 
                creatable ? 
                    <CreatableSelect 
                        id={id}
                        options={options ? options.options ? options.options : [] :[]} 
                        getOptionLabel ={(option)=>option.label ? option.label:  option[options.label]}
                        getOptionValue ={(option)=>option.value ? option.value :  option[options.value]}
                        name={name}
                        isMulti={isMulti}
                        placeholder={t(placeholder)}
                        type={type}
                        value={value}
                        onChange={(e)=>{changed(field ,  e )}}
                    />
                :
                <Select
                    id={id}
                        options={options ? options.options ? options.options : [] :[]} 
                        getOptionLabel ={(option)=>option.label ? option.label:  option[options.label]}
                        getOptionValue ={(option)=>option.value ? option.value :  option[options.value]}
                        name={name}
                        isMulti={isMulti}
                        placeholder={t(placeholder)}
                        type={type}
                        value={handleValue(value)}
                        onChange={(e)=>{changed(field ,  e )}}
                     />
                
                
                }
                
    </FormGroup>
    )
}



export default SelectComponent