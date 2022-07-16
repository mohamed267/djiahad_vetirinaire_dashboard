import {Form , FormGroup ,Label , Input , Row , Col , Button } from  "reactstrap"
import "./fileInput.scss"
import  {useState , useEffect} from  "react"
const FileInput = ({src})=>{
    const [file , setFile] = useState(null)

    const HandleChangeFile = (e)=>{
        setFile(URL.createObjectURL(e.target.files[0]))
    }
    return(
        <div className="fileInput">
            <div  className="fileInputContainer">
                <div className="img">
                    
                <FormGroup className="fileInputWrapper">
                <img src={
                    file ?  file : src
                    // "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                }
                    />
                    <Label for="exampleFile">
                        <i className="la la-pencil"></i>
                    </Label>
                    <Input
                    onChange={HandleChangeFile}
                    id="exampleFile"
                    name="file"
                    type="file"
                    />
                </FormGroup>
                </div>
            </div>
          
           
        </div>
    )
}


export default FileInput