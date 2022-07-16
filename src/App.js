
import { Suspense, useEffect   } from 'react';
import {
  Routes,
  Route
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
import {getWilayas} from "./store/wilayaReducer"
import {getCommunes} from "./store/communeReducer"


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
    const  wilaya_id =  useSelector(state=> state.wilaya.wilaya_id)
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(getRegions({}))
    } , [])
    useEffect(()=>{
        dispatch(getWilayas({region_id}))
    } , [region_id])
    useEffect(()=>{
        dispatch(getCommunes({wilaya_id}))
    } , [wilaya_id])

    return (
        renderRoutes(routes)
    )

}


export default App

 // // <Routes>
    //    {/* <Route path="/users" element={<List/> } ></Route>
    //   <Route path="/auth" element={<Auth />}></Route> */}
    //   {/* <Route path="/" exact={true} element={<Home/> } ></Route> */}
    //   {/* <Route path="/login" element={<Login/> } ></Route> */}
    //   {/* <Route path="/users" >
    //     <Route index element={<List/> } ></Route>
    //     <Route path=":user_id" element={<Single/> } ></Route>
    //     <Route path="new" element={<New/> } ></Route>
    //   </Route>
    //   <Route path="/demands" >
    //     <Route index element={<List/> } ></Route>
    //     <Route path=":demand_id" element={<Single/> } ></Route>
    //     <Route path="new" element={<New/> } ></Route>
    //   </Route>
    //   <Route path="/services" >
    //     <Route index element={<List/> } ></Route>
    //     <Route path=":service_id" element={<Single/> } ></Route>
    //     <Route path="new" element={<New/> } ></Route>
    //   </Route>
    //    <Route path="/ads" >
    //     <Route index element={<List/> } ></Route>
    //     <Route path=":ad_id" element={<Single/> } ></Route>
    //     <Route path="new" element={<New/> } ></Route>
    //   </Route> */}
    //   {/* </Routes> */}







