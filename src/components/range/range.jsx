import {useEffect , useState} from "react"
import Slider from 'react-rangeslider'
// To include the default styles
import 'react-rangeslider/lib/index.css'

const Range = ({range , setRange ,min , max}) =>{
    const [value ,  setValue] = useState(100)
    const handleChange = (value) =>{
        setRange(value)
    }
    return (
        <Slider
            min={min}
            max={max}
            value={range}
            onChange={handleChange}
        />
    )
}


export default Range