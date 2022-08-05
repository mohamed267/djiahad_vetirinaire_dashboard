import {useState} from "react"
import structures from "../../structures/form"

import Form from "../../components/form/formCreate"

import {Row , Col , Input , Button} from "reactstrap"

import "./searchBar.scss"


const SearchBar = ({searching = ()=>{}  , filter})=>{
    const [search , setState] = useState("")
    const handleSearch = ()=>{
        searching(search)
    }
    return(
        <div className="searchBar">
            <Row className="justify-content-between align-items-center bg-white p-4 rounded shadow-sm">
                <Col md={4} className="py-4">
                <p>
                     {filter ? filter : "mixte"}
                </p>
                </Col>
                <Col md={4} className="d-flex">
                    <Input
                        placeholder="rechercher  !!"
                        value = {search}
                        onChange={(e)=>{setState(e.target.value)}}
                    />
                    <Button  onClick={handleSearch} className="btn--primary">
                    <i className="las la-search"></i>
                    </Button>
                </Col>
                
                
                
            </Row>
        </div>
    )
}


export default SearchBar




