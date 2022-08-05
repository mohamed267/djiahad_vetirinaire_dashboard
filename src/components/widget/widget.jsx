import {useState , useEffect} from  'react'

import {Link}  from  "react-router-dom"
import { useTranslation } from 'react-i18next';
import './widget.scss'
var colors   = ['7367f0' ,  'f0678d' ,  'ddb264' , '5ed38c'];

const Widget = () =>{
    const [color , setColor] = useState('');
    const {t} = useTranslation("common");

    useEffect( ()=>{
        setColor("bg-"+colors[Math.floor(Math.random()*4)])
    },[])


    return(
        <div className={"widget "+color}>
            <div className="start">
                <div className="persentage">
                    <i className="las la-arrow-up"></i>
                    25%
                </div>
            </div>
            <i className="icon-stat las la-user-friends"></i>
            <div className="end">
                <div className="counter">150</div>
                <div className="title">{t('users')}</div>
                <button className="link">
                    <Link to="#">
                    {t("see all")}
                    </Link>
                </button>
            </div>
            
        </div>
    )
} 


export default Widget;