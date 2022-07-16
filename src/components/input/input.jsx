import {Form , FormGroup ,Label , Input , Row , Col , Button } from  "reactstrap"
import {useTranslation} from 'react-i18next'

const InputComponent  =({id ,value ,  label , icon , 
    name , placeholder , className , type , field , 
    changed = ()=>{}})=>{
    const {t} = useTranslation("common");
    return (
       
        <FormGroup className={className}>
        <Label for={id}>
        {t(label)}
        </Label>
            <Input
                id={id}
                name={name}
                placeholder={t(placeholder)}
                type={type}
                value={value}
                onChange={(e)=>{changed(field , e.target.value)}}
            />
            {icon && <i className={icon} ></i>}
    </FormGroup>
    )
}



export default InputComponent