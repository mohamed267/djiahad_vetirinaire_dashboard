import {Link} from  "react-router-dom"
import "./composedLined.scss"

import {exportData} from  "../../../../utils/data"
import {toLocal} from  "../../../../utils/date"



const DateComponent  =({structure , params})=>{
    return(
        <>
            {
                toLocal(exportData(params.row ,  structure.field))
            }
        </>
    )
}




export default DateComponent