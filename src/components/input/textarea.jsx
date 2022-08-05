import {Form , FormGroup ,Label , Input , Row , Col , Button } from  "reactstrap"
import {useTranslation} from 'react-i18next'

const TextComponent  =({id ,value ,  label , icon , 
    name ,  className ,  field , 
    changed = ()=>{}})=>{
    const {t} = useTranslation("common");
    return (
       
        <FormGroup className={className}>
            <Input
                id={id}
                type="textarea"
                name={name}
                placeholder={t(label)}
                value={value}
                onChange={(e)=>{changed(field , e.target.value)}}
            />
        </FormGroup>
    )
}



export default TextComponent