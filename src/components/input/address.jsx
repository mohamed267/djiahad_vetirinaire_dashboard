import {FormGroup, Label , Input  } from  "reactstrap"
import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useTranslation} from 'react-i18next'





const AddressComponent  =({id ,value ,  label , 
    name , placeholder , className , type , field ,
    changed = ()=>{}})=>{
    const {t} = useTranslation("common");
    


    return (
        <>
       
            
            <FormGroup className={className}>
                <Label for={id}>
                    {t(label)}
                </Label>
                 <Input
                    placeholder={placeholder}
                    name={name}
                    type={type}
                    value={value ? value.address ? value.address : "" : ""}
                    onChange={(e)=>{
                        changed(
                            field , {address : e.target.value} )
                        }}
                 />
            </FormGroup>
        </>
    )
}



export default AddressComponent