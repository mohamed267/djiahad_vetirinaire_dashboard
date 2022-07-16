import {useState , useEffect} from "react"
import { useTranslation } from "react-i18next";
import  {useLocation , useParams} from "react-router-dom"
import {useDispatch , useSelector} from  'react-redux'
import Sidebar from  "../../components/sidebar/sidebar"
import Navbar from  "../../components/navbar/navbar"
import Form from   "../../components/form/form";
import SingleWrapper from  "../../components/singleWrapper/singleWrapper"
import {exportData} from  "../../utils/data"
import './single.scss'
import {fetchOne} from  "../../store/apiReducer" 
import structures from "../../structures/single"





const Single = ()=>{
    const {t} = useTranslation("common")
    const [fetchCode ,  setFetchCode] = useState("")
    const  dispatch = useDispatch();
    const location = useLocation();
    const {service_id , ad_id} = useParams()
    const apiData =  useSelector(state=>state.api)
    useEffect( ()=>{
        if(fetchCode){
            dispatch(fetchOne({
                limit : 8 , page : 1 , 
                service_id,
                ad_id,
                apipath : location.pathname.slice(1).split('/')[0],
                extra :{ codeRequest : fetchCode }  }))
        }
    }, [fetchCode])

    useEffect( ()=>{
        setFetchCode(new Date().getTime())
    }, [location])




    return(
        <div className="single">
         <Sidebar />
        <div className="singleContainer">
            <Navbar />


            <div className="mainContainer">

                <SingleWrapper
                    data={apiData }
                    structure={structures[location.pathname.slice(1).split('/')[0]]}
                    dataCode={fetchCode}
                />

               
            </div>
        </div>
    </div>
    )
}

export default Single