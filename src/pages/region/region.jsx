import {useState , useEffect} from "react"
import { useTranslation } from "react-i18next";
import  {useLocation , useParams} from "react-router-dom"
import {useDispatch , useSelector} from  'react-redux'
import Sidebar from  "../../components/sidebar/sidebar"
import Navbar from  "../../components/navbar/navbar"
import Form from "../../components/form/form"
import SingleWrapper from  "../../components/singleWrapper/singleWrapper"
import {exportData} from  "../../utils/data"
import {getRegion , createRegion , updateRegion , clearRegion} from "../../store/regionReducer"

import structures from "../../structures/form"
import './region.scss'



const Region = ()=>{
    const {t} = useTranslation("common")
    const region = useSelector(state=>state.region.details.region)
    const loading  = useSelector(state=>state.region.loading);
    const  dispatch = useDispatch();
    const location = useLocation();
    const {region_id} = useParams()

    useEffect( ()=>{
        console.log("the new region ",loading)
    }, [loading])


    useEffect( ()=>{
        if(!region_id){
            dispatch(clearRegion({}))
        }else{
            dispatch(getRegion({region_id}))
        }
    }, [ region_id  , location])


    const handleAddRegion = (data) =>{
        if(region_id){
            dispatch(updateRegion(
                {
                    ...data , 
                    wilayas : data.wilayas ?  data.wilayas.map(wilaya=>wilaya.wilaya_id) :[],
                    deleted_wilayas : data.deleted_wilayas 
                    ? 
                    data.deleted_wilayas.map(wilaya=>wilaya.wilaya_id) :[],
                    region_id
                }
            ))
           
        }else{
            dispatch(createRegion(
                {
                    ...data , 
                    wilayas : data.wilayas ?data.wilayas.map(wilaya=>wilaya.wilaya_id) :[]
                }
            ))
            

        }
    }
   




    return(
        <div className="region">
         <Sidebar />
        <div className="regionContainer">
            <Navbar />

            <div className="mainContainer">
                <Form
                    structure={structures[location.pathname.slice(1).split('/')[0]]} 
                    submit={handleAddRegion}
                    data={ region }
                    loading={loading}
                >
                </Form>

            </div>
            
        </div>
    </div>
    )
}

export default Region