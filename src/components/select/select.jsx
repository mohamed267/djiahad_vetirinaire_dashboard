import {FormGroup ,Label  } from  "reactstrap"
import Select from  "react-select"
import {useTranslation} from 'react-i18next'

import './select.scss'

const InputComponent  =({id ,value ,  label , 
    name , placeholder , className , type , field , options , 
    changed = ()=>{}})=>{
    const {t} = useTranslation("common");
    return (
       
        <FormGroup className={`select_form_group ${className}`}>
            <Label for={id}>
            {t(label)}
            </Label>
                <Select
                    id={id}
                    options={options} 
                    name={name}
                    placeholder={t(placeholder)}
                    type={type}
                    value={value}
                    onChange={(e)=>{changed(field , e.target.value)}}
                />
    </FormGroup>
    )
}



export default InputComponent