import {useState ,  useEffect} from  "react"
import  {useLocation , useParams} from "react-router-dom"
import {useDispatch , useSelector  } from  'react-redux'
import axios from  "../../utils/axios"
import Sidebar from  "../../components/sidebar/sidebar"
import Navbar from  "../../components/navbar/navbar"
import Datatable from   "../../components/datatable/datatable";
import Loader from "../../layouts/loader/loader"

import SearchBar from "../../components/searchBar/searchBar";
import './list.scss'
import structures from "../../structures/lists"
import {getForms , deleteForms , initForms} from  "../../store/formReducer" 
import {setSearch } from "../../store/navReducer"

const List = ()=>{
    const [fetchCode ,  setFetchCode] = useState("")
    const [page , setPage] = useState(1)
    const {filter} = useParams()
    const opened = useSelector(state=>state.nav.opened)
    const  dispatch = useDispatch();
    const location = useLocation();
    const forms =  useSelector(state=>state.form)
    const deleted =  useSelector(state=>state.form.deleted)
    const search =  useSelector(state=>state.nav.search)
    useEffect( ()=>{
        dispatch(initForms({}))
    }, [])
    useEffect( ()=>{
        if(location.state && location.state.for=="delete"){
            let form_id = location.state.form_id
            dispatch(deleteForms({form_id}))
        }else{
            dispatch(getForms({filter , search  , page , limit : 9}))

        }
    }, [location , search , page])


    useEffect( ()=>{
        console.log("deleted")
        dispatch(getForms({filter , search  , page , limit : 9}))
    }, [deleted])

    const handleSearch = (search) =>{
        dispatch(setSearch({search}))
    }


    if(forms.loading){
        return  (<Loader />)
    }

    

    
    return(
        <div className="list">
            <Sidebar />
            <div className={`listContainer ${opened ? "nav-opened" : "nav-closed"}`}>
                <Navbar />
                <SearchBar filter={filter} searching={handleSearch} />
                <Datatable
                    data={forms}
                    structure={structures["document"]}
                    dataKey={"forms"}
                    pageChanged={setPage}

                />
            </div>
        </div>
    )
}

export default List