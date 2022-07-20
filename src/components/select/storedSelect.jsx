import {useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {FormGroup ,Label  } from  "reactstrap"
import Select from  "react-select"
import CreatableSelect from 'react-select/creatable';
import {useTranslation} from 'react-i18next'

import './select.scss'

import {setRegion} from "../../store/regionReducer"
import {setWilaya} from "../../store/wilayaReducer"

const SelectComponent  =({id ,value ,  label , 
    name , placeholder , className , type , field , options , isMulti , creatable , field_deleted,
    changed = ()=>{}})=>{
    const {t} = useTranslation("common");
    const dispatch = useDispatch()
    const selectOptions =  useSelector(state=>state[options.where])

   
    useEffect( ()=>{
        
    }, [selectOptions])


    const handleChange = (e) =>{
        if(e.region_name){
            dispatch(setRegion( e ))
        }else if(e.wilaya_name){
            dispatch(setWilaya(e ))
        }

        let deleted = [];
        if(isMulti){
            console.log("value is ", value)
            value  && value.map(option =>{
                let el = e.find(
                    key=>(
                        (key.label ? key.label:  key[options.label])==(option.label ? option.label:  option[options.label])
                    ))
                if(!el){
                    deleted.push(option)
                }
                

            })

            changed(field_deleted , deleted )
        }

        changed("" , {[field_deleted] : deleted ,  [field] : e})
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
                        options={selectOptions[options.key] ? selectOptions[options.key] : []} 
                        getOptionLabel ={(option)=>option.label ? option.label:  option[options.label]}
                        getOptionValue ={(option)=>option.value ? option.value :  option[options.value]}
                        name={name}
                        isMulti={isMulti}
                        placeholder={t(placeholder)}
                        type={type}
                        value={value}
                        onChange={handleChange}
                    />
                :
                <Select
                id={id}
                options={selectOptions[options.key] ? selectOptions[options.key] : []} 
                getOptionLabel ={(option)=>option[options.label]}
                getOptionValue ={(option)=>option[options.value]}
                name={name}
                isMulti={isMulti}
                placeholder={t(placeholder)}
                type={type}
                value={value}
                onChange={handleChange}
            />
                
                
                }
                
    </FormGroup>
    )
}



export default SelectComponent