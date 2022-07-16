import {useState , useEffect} from  "react"
import {useTranslation} from 'react-i18next'
import {Form , FormGroup ,Label , Input } from  "reactstrap"
import "./switchToggle.scss";
const SwitchToogle = ({id, value,name ,  on ,checkedOn ,   off, label})=>{
    const [checked , setChecked] = useState(value)





    const toggleChecked = ()=>{
        setChecked(!checked)
    }

    const handleChecked = (checkedOn , value)=>{
        value = value ?  value : false 
        return (checkedOn==value)    
    }

    return(
        <div className="switchToggle">
             <FormGroup
                >
                <Label for={id} >
                    {label}
                </Label>
                <Input
                onChange={toggleChecked}
                    name={name}
                    type="checkbox"
                    id={id}
                />
                <div className={`toggleGroup ${!handleChecked(checkedOn , checked ) ?  "checked" : ""}`}>
                    <Label className="btn--success" for={id} >
                        {on}
                    </Label>
                     <Label className="btn--danger" for={id} >
                        {off}
                    </Label>
                    <span className="toggle-handler"></span>

                </div>
                
                </FormGroup>
        </div>
    )
}


export default SwitchToogle;