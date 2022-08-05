import {useState , useEffect} from  "react"
import SubMenu  from  "./subMenu/subMenu"
import {Link} from "react-router-dom";
import {useTranslation} from  "react-i18next";
import {useLocation} from  "react-router-dom"
import "./collapseMenu.scss";
const CollapseMenu = ({item })=>{
    const location  = useLocation()
    const [opened , setOpened] = useState(false);
    const [forced , setForced] = useState(null)
    const collapse = (item.type =="collapse")
    const {t} = useTranslation("common")
    const toogleForced = ()=>{
        setForced(!forced)
    }

    
    const toogleOpened =()=>{
        if(opened){
            toogleForced()
        }else{
            setOpened(!opened)
        }
    }


    const BaseUrl = "localhost:3000/";
    
    // if(BaseUrl + item.url  === ){
    //     setOpened(true)
    // }
    useEffect(()=>{
        if(location.pathname== item.url && !opened){
            setOpened(true);
        }

    } , [location])

    useEffect(()=>{
        if(forced!=null){

            setOpened(false);
        }
    } , [forced])
   


    return(
        <>  
            <li  className={opened ? "open" : ""} onClick={toogleOpened} >
                <Link className={`${collapse ?  "multiple-choices" : ""} superitemsidebar`} 
                    to={
                        {
                            pathname : item.url,
                            
                        }
                    }
                    state={item.state}
                    >
                  <i className={`icon ${item.icon}`}></i>
                  <span>{t(item.title)}</span>
                  <i className="toggle-icon las la-angle-down"></i>
                </Link>
                {
                    collapse && item.children && <SubMenu items={item.children} />
                }
            </li>
        </>
    )
}


export default CollapseMenu