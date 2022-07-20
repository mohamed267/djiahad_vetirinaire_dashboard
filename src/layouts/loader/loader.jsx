import {Rings} from "react-loader-spinner";
import "./loader.scss"

const Loader = () =>{

    return (
        <div className="loader">
        <Rings ariaLabel="loading-indicator" />
        </div>
    )
}

export default Loader