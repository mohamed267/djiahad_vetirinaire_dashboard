import {FormGroup, Label , Button  } from  "reactstrap"
import {useState , useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useTranslation} from 'react-i18next'
import MapModal from "./mapModal"




const AddressComponent  =({id ,value ,  label , 
    name , placeholder , className , type , field ,
    changed = ()=>{}})=>{
    const {t} = useTranslation("common");
    const [modal , setModal] =  useState(false)
    const toggle =()=>{
        setModal(!modal)
    }

    const confirm =(position)=>{
        changed(field , {...value ,  ...position})
    }
    


    return (
        <>
       
            
            <FormGroup className={className}>
                <Label for={id}>
                    {t(label)}
                </Label>
                <Button onClick={toggle} className="map-button" > préciser sur map 

                    <i className="las la-map-marker-alt"></i>
                </Button>
            </FormGroup>
            <MapModal 
                modal={modal} setModal={setModal} toggle={toggle} confirm={confirm} 
                value={value}                
            />
        </>
    )
}



export default AddressComponent