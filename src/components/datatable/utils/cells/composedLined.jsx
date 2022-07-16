import {Link} from  "react-router-dom"
import "./composedLined.scss"

import {exportData} from  "../../../../utils/data"


const  extractState = (data  , field)=>{
    let state = {}
    field && Object.keys(field).map(el=>{
        state[el] = exportData(data,  field[el])
    })

    return state

}

const ComposedLined  =({structure , params})=>{
    return(
        <div className="composedLinedContainer">
            {
                structure  && 
                structure.fields &&
                structure.fields.map(el=>{
                    return  (
                        (el.type == "linkButton") &&
                            <Link to={`${el.link}/${exportData(params.row ,  el.field)}`}
                                state ={extractState(params.row , el.state)}
                            >
                                <button>
                                    <i className={el.class}></i>
                                </button>
                            </Link>
                        
                    )
                })
            }
        </div>
    )
}




export default ComposedLined