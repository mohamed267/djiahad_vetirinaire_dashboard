import {useState , useEffect} from  "react"
import {useTranslation} from 'react-i18next'
import {Form , FormGroup ,Label , Input } from  "reactstrap"
import "./switchToggle.scss";
const SwitchToogle = ({id, value,name , field,  on ,checkedOn ,   off, label , changed})=>{
    





    const toggleChecked = ()=>{
        console.log("field ", field)
        changed(field , !value)
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
                <div className={`toggleGroup ${!handleChecked(checkedOn , value ) ?  "checked" : ""}`}>
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