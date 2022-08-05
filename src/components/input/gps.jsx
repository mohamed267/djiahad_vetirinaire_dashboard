
import {Form , FormGroup ,Label , Input , Row , Col , Button } from  "reactstrap"
import {useTranslation} from 'react-i18next'




const AddressComponent  =({id ,value , 
    name ,  className ,  field , type , label ,
    changed = ()=>{}})=>{
    const {t} = useTranslation("common");

    const setPosition =(position)=>{
        changed(field , {...value ,  ...position})
    }


    console.log("value gps is ", {lat : value.lat , lng : value.lng})
    


    return (
        <>
        <FormGroup className={className}>
            <Label for={id}>
            {t(label)}
            </Label>
            <Row>
                <Col md={6}>
                    <Input
                        id={"lat_"+id}
                        name={name}
                        placeholder={t("enter latitude")}
                        type={"text"}
                        value={value.lat}
                        onChange={(e)=>{setPosition({lat :  e.target.value})}}
                    />
                </Col>
                <Col md={6}>
                    <Input
                        id={"lng_"+id}
                        name={"lng_"+name}
                        placeholder={t("enter longtitude")}
                        type={"text"}
                        value={value.lng}
                        onChange={(e)=>{setPosition({lng :  e.target.value})}}
                    />
                </Col>
            </Row>
            
        </FormGroup>
       
            
            
            {/* <MapModal 
                modal={modal} setModal={setModal} toggle={toggle} setPosition={setPosition} 
                position={{lat : value.lat , lng : value.lng} }                 */}
         
        </>
    )
}



export default AddressComponent