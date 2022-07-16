import {useState ,  useEffect} from  "react"
import  {useLocation} from "react-router-dom"
import {useDispatch , useSelector} from  'react-redux'
import axios from  "../../utils/axios"
import Sidebar from  "../../components/sidebar/sidebar"
import Navbar from  "../../components/navbar/navbar"
import Datatable from   "../../components/datatable/datatable";
import './list.scss'
import structures from "../../structures/lists"
import {fetchAll} from  "../../store/apiReducer" 

const List = ()=>{
    const [fetchCode ,  setFetchCode] = useState("")
    const  dispatch = useDispatch();
    const location = useLocation();
    const apiData =  useSelector(state=>state.api)

    useEffect( ()=>{
        if(fetchCode){
            dispatch(fetchAll({
                limit : 8 , page : 1 , 
                ...location.state,
                apipath : location.pathname.slice(1),
                extra :{codeRequest : fetchCode }  }))
        }
    }, [fetchCode])

    useEffect( ()=>{
        setFetchCode(new Date().getTime())
    }, [location])

    
    return(
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Datatable 
                    data={apiData}
                    structure={structures[location.pathname.slice(1)]}
                    dataCode={fetchCode}

                />
            </div>
        </div>
    )
}

export default List