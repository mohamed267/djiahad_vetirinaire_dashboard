import {useState ,  useEffect} from  "react"
import  {useLocation , useParams} from "react-router-dom"
import {useDispatch , useSelector , } from  'react-redux'
import axios from  "../../utils/axios"
import Sidebar from  "../../components/sidebar/sidebar"
import Navbar from  "../../components/navbar/navbar"
import Datatable from   "../../components/datatable/datatable";
import '../list/list.scss'
import structures from "../../structures/lists"
import {getFormFields} from  "../../store/formFieldReducer" 

const List = ()=>{
    const [fetchCode ,  setFetchCode] = useState("")
    const {filter} = useParams()
    const  dispatch = useDispatch();
    const location = useLocation();
    const form_field =  useSelector(state=>state.form_field)
    useEffect( ()=>{
        dispatch(getFormFields({}))
    }, [location])
    

    
    return(
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Datatable
                    data={form_field}
                    structure={structures["form_field"]}
                    dataKey={"form_fields"}

                />
            </div>
        </div>
    )
}

export default List