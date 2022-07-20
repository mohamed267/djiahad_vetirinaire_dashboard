import {useState ,  useEffect} from  "react"
import  {useLocation , useParams} from "react-router-dom"
import {useDispatch , useSelector , } from  'react-redux'
import axios from  "../../utils/axios"
import Sidebar from  "../../components/sidebar/sidebar"
import Navbar from  "../../components/navbar/navbar"
import Datatable from   "../../components/datatable/datatable";
import './list.scss'
import structures from "../../structures/lists"
import {getForms} from  "../../store/formReducer" 

const List = ()=>{
    const [fetchCode ,  setFetchCode] = useState("")
    const {filter} = useParams()
    const  dispatch = useDispatch();
    const location = useLocation();
    const forms =  useSelector(state=>state.form)
    useEffect( ()=>{
        dispatch(getForms({filter}))
    }, [location])
    

    
    return(
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Datatable
                    data={forms}
                    structure={structures["document"]}
                    dataKey={"forms"}

                />
            </div>
        </div>
    )
}

export default List