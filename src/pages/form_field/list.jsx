import {useState ,  useEffect} from  "react"
import  {useLocation , useParams} from "react-router-dom"
import {useDispatch , useSelector , } from  'react-redux'
import axios from  "../../utils/axios"
import Sidebar from  "../../components/sidebar/sidebar"
import Navbar from  "../../components/navbar/navbar"
import Datatable from   "../../components/datatable/datatable";
import Loader from "../../layouts/loader/loader"
import '../list/list.scss'
import structures from "../../structures/lists"
import {getFormFields , deleteFormFields , initFormField} from  "../../store/formFieldReducer" 

const List = ()=>{
    const [fetchCode ,  setFetchCode] = useState("")
    const {filter} = useParams()
    const  dispatch = useDispatch();
    const location = useLocation();
    const form_field =  useSelector(state=>state.form_field)
    const opened = useSelector(state=>state.nav.opened)
    useEffect(()=>{
        dispatch(initFormField({}))
    } ,[])
    useEffect( ()=>{
        if(location.state && location.state.for=="delete"){
            let form_field_id = location.state.form_field_id
            dispatch(deleteFormFields({form_field_id}))
        }else{
            dispatch(getFormFields({}))
        }
        
    }, [location])

    useEffect( ()=>{
        if(form_field.deleted){
            dispatch(getFormFields({}))
        }
        
    }, [form_field.deleted])

     if(form_field.loading){
        return  (<Loader />)
    }
    

    
    return(
        <div className="list">
            <Sidebar />
            <div className={`listContainer ${opened ? "nav-opened" : "nav-closed"}`}>
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