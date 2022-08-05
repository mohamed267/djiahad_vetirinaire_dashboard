
import { Suspense, useEffect   } from 'react';
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import {useDispatch , useSelector} from 'react-redux'
import "./assets/icons/line-awesome/css/line-awesome.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import "./App.scss"
import "./variables.scss"

import routes from './routes'
import Loader from './components/loader/loader';

import {getRegions} from "./store/regionReducer"
import {getRegionWilayas , getWilayas } from "./store/wilayaReducer"
import { getDairas} from "./store/dairaReducer"
import {getCommunes} from "./store/communeReducer"
import {getFieldGroups} from "./store/fieldGroupReducer"
import {getFormFieldsNav} from "./store/formFieldReducer"
import {setOpened} from "./store/navReducer"

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loader />}>
      <Routes>
          {routes.map((route, i) => {
              const Guard = route.guard || <></>;
              const Component = route.component;

              return (
                  <Route
                      key={i}
                      path={route.path}
                      exact={route.exact}
                      element={
                          <Guard>
                              {route.routes ? renderRoutes(route.routes) : <Component/>}
                          </Guard>
                      }
                  />
              );
          })}
      </Routes>
  </Suspense>
);



function App(){
    const  region_id =  useSelector(state=> state.region.region_id)
    const refreshRegion = useSelector(state=>state.region.refresh)
    const  wilaya_id =  useSelector(state=> state.wilaya.wilaya_id)
    const  daira_id =  useSelector(state=> state.daira.daira_id)
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect( ()=>{
        dispatch(getRegions({}))
    }, [refreshRegion])
    useEffect(()=>{
        dispatch(getFieldGroups({}))
        dispatch(getRegions({}))
        dispatch(getFormFieldsNav({}))
    } , [])
    useEffect(()=>{
        dispatch(setOpened({opened : true}))
    } ,[location])
    useEffect(()=>{
        if(region_id){
            dispatch(getRegionWilayas({region_id}))
        }else{
            dispatch(getWilayas({}))
        }
    } , [region_id])
    useEffect(()=>{
        dispatch(getDairas({wilaya_id}))
    } , [wilaya_id])

    useEffect(()=>{
        dispatch(getCommunes({daira_id}))
    } , [daira_id])



    return (
        <>
          {renderRoutes(routes)}
        </>
    )

}


export default App








