import {useState, useEffect , useRef , useMemo} from "react"
import {useSelector} from "react-redux"
import  {Link , useParams} from "react-router-dom"
import { MapContainer, TileLayer, Marker , Popup , useMapEvents  , useMap  , Circle } from 'react-leaflet'
import Range from "../range/range"

import "./map.scss"
const LocationMarker =({range , setPosition , position})=>   {
    const markerRef = useRef(null)
    const map = useMap()
    const handleOnLocationFound = (event)=>{
        setPosition(event.latlng)
    }



    useEffect( ()=>{
        map.locate({setView: true});

        map.on('locationfound', handleOnLocationFound);
        
    }, [map])
    const dragHandlers =useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            setPosition(marker.getLatLng())
          }
        },
      }),
      [],
    )
  
    return position === null ? null : (
        <>
          <Marker 
            draggable={true}
            eventHandlers={dragHandlers}
            ref={markerRef}
            pathOptions={{color : "purple"}}
            position={position} 
          >
          </Marker>
         
          <Circle  
            center={position} 
            pathOptions={{color : "purple"}}
            radius={range*1000}
          >
          </Circle >

        </>
     )
}

const Regions =()=>   {
    const {region_id} = useParams()
    const regions = useSelector(state=>state.region.regions)


    return (
    
        <>
          {
            regions && regions.map(region=>{
              let lat = region.lat
              let lng = region.lng
              let radius = region.radius
              let position =(lng && lat ) ? {lat , lng} : null


              if(region.region_id  != region_id){
                return (
                  <>
                    {
                      (position && radius) &&
                      <>
                        <Marker 
                          position={position} >
                            <Popup>
                              <Link  to={`/region/${region.region_id}`}> modifier </Link>
                            </Popup>
                        
                        </Marker>
                      
                        <Circle  
                          center={position} 
                          radius={radius*1000}
                        >
                        </Circle >
            
                      </>
                    }
                  </>
                )
              }

            })
          }
        </>

    
    )
  
}


const RegionEdit =({ setPosition , position , radius  , changed})=>{
  const regionMarkerRef = useRef(null)
  const dragHandlers =useMemo(
      () => ({
        dragend() {
          const marker = regionMarkerRef.current
          if (marker != null) {
            console.log("pos  " , radius)
            setPosition(marker.getLatLng())
          }
        },
      }),
    [],
    )

 


  return (
      <>
        {
          position &&
          <>
            <Marker 
              draggable={true}
              eventHandlers={dragHandlers}
              position={position} 
              ref={regionMarkerRef}>
              
            
            </Marker>
          
            <Circle  
              center={position} 
              radius={radius*1000}
              pathOptions={{color : "purple"}}
            >
            </Circle >

          </>
        }
      </>
  )

}





const MapComponent = ({typeMap , changed ,field_radius , field_lng , field_lat ,  radius , lng , lat   })=>{
  const {region_id} = useParams()
  const setRange = (radius)=>{
    changed('',{[field_lng] : lng ,[field_lat] : lat ,[field_radius] :  radius})
  }

  

  const setPosition = (position)=>{
    console.log("radd ",  radius)
    changed('',{[field_lng] : position.lng ,[field_lat] : position.lat ,[field_radius] :  radius})
  }
  return (
    <>
      {typeMap=="range" && <Range min={10} max={1000} range={radius} setRange={setRange} />}
      {
        region_id ? 
      
        <MapContainer
            center={{lat: 36.72, lng: 3.16} }
            zoom={5}
            className="map"
          >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Regions region={region_id} />
          { region_id ? 
          <RegionEdit setPosition={setPosition} position={{lat , lng}} radius={radius}  /> 
          : 
          <LocationMarker range={radius} position={{lat , lng}} setPosition={setPosition} />
          }
        </MapContainer> :<MapContainer
            center={{lat: 36.72, lng: 3.16} }
            zoom={5}
            className="map"
          >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Regions region={region_id} />
          { region_id ? 
          <RegionEdit setPosition={setPosition} position={{lat , lng}} radius={radius}  /> 
          : 
          <LocationMarker range={radius} position={{lat , lng}} setPosition={setPosition} />
          }
        </MapContainer>
      }
    </>
  )

}


export default MapComponent