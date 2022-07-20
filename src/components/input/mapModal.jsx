import {useState , useEffect , useRef , useMemo} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { MapContainer, TileLayer, Marker ,  useMap   } from 'react-leaflet'
import "../map/map.scss"

const LocationMarker =({setPosition , position})=>   {
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
          position={position} 
        >
        </Marker>
      </>
   )
}



const MapModal  =({modal , confirm , toggle , value})=> {

    const initPosition = (pos) =>(
      pos.lng && pos.lat ? {lng : value.lng , lat : value.getLatLng} :null
    )
    
    const [position  , setPosition] = useState(initPosition(value))
    return (
      <div>
        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            <MapContainer 
              center={{lat: 36.72, lng: 3.16} }
              zoom={5}
              className="map"
            >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
              <LocationMarker  position={position} setPosition={setPosition} />
          </MapContainer>


          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>{toggle() ;confirm(position)}}>confirmer</Button>{' '}
            <Button color="secondary" onClick={toggle}  >Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
}

export  default MapModal
