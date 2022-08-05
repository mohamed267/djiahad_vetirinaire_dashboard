import {useState , useEffect , useRef , useMemo} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { MapContainer, TileLayer, Marker ,  useMap   } from 'react-leaflet'
import "../map/map.scss"

const LocationMarker =({setPosition , position})=>   {
  const markerRef = useRef(null)
  const map = useMap()
  const handleOnLocationFound = (event)=>{
    console.log("handle auto loc ", event.latlng)
      setPosition(event.latlng)
  }

  useEffect( ()=>{
    setPosition({lng : 7.031 , lat : 31.65})

  }, [])



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

  return (!position || !position.lat || !position.lng    ) ? null : (
      <>
        <Marker 
          draggable={true}
          eventHandlers={dragHandlers}
          ref={markerRef}
          position={(position && position.lat && position.lng ) ? position  : null} 
        >
        </Marker>
      </>
   )
}


const NewMarker = ({setPosition , position})=>   {
  const markerRef = useRef(null)
 
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

  return (position == null ) ? null : (
      <>
        <Marker 
          draggable={true}
          eventHandlers={dragHandlers}
          ref={markerRef}
          position={position} 
        >
        </Marker>
      </>
   )
}



const MapModal  =({modal , setPosition , toggle , position})=> {

    
    return (
      <div>
        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>Map </ModalHeader>
          <ModalBody>
            <MapContainer 
            center={{lat : 35  , lng : 6}}
              zoom={5}
              className="map"
            >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
              {
                (position && position.lat  && position.lng ) ?
                <NewMarker  position={position } setPosition={setPosition}/>
              : 
                <LocationMarker  position={position} setPosition={setPosition} />
              }
            </MapContainer>


          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>{toggle()}}>confirmer</Button>{' '}
            <Button color="secondary" onClick={toggle}  >Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
}

export  default MapModal
