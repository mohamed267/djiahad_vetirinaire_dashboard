
import {Form , FormGroup ,Label /*, Input*/ , Row , Col , Button } from  "reactstrap"
import {useTranslation} from "react-i18next"
const ButtonComponent = ({className ,  text})=>{
    const {t} = useTranslation("common")
    return (
        <Button className={className}>
            {t(text)}
        </Button>
    )
}


export default ButtonComponent