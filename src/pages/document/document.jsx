import {useState , useEffect} from "react"
import {useDispatch , useSelector } from "react-redux"
import PerfectScrollbar from 'react-perfect-scrollbar'
import Sidebar from  "../../components/sidebar/sidebar"
import Navbar from "../../components/navbar/navbar"
import {Breadcrumb, Container , Row,Col , BreadcrumbItem} from "reactstrap"
import "./document.scss"

import {getForm , setDataExtracted  , setFilteredData} from "../../store/formReducer"
import {extractData } from "../../utils/document"





// const  extractData = (data)=>{
//     const {address_fields} = data
//     let filtObg ={}

//     address_fields && address_fields.length >0 &&
//     address_fields.map(field =>{
        
//     })



// }


const filterData  = (data) =>{
    const arr= [];
    var snap = [];
    var i = 0;
    data.map((el , key)=>{
        if(el.type=="title"){
            i=i+1;
        }


        if(i == 3 ){
            arr.push(snap)
            i = 1;
            snap=[];
        }
        if(key+1== data.length){
            snap.push(el);
            arr.push(snap)
            i = 1;
            snap=[];

        }
        
        snap.push(el);
         
    })

    return arr

}
function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
} 

const Document = ()=>{
    const dispatch = useDispatch()
    const {form } = useSelector(state=>state.form.details)
    const [page , setPage] = useState(0)
    const [pages , setPages] = useState(0);
    const [isMobile, setIsMobile] = useState(true);
    const [filtereddata , setFiltereddata] = useState([])





    function handleWindowResize() {
        setIsMobile(getWindowSize().innerWidth < 600);
    }
    useEffect(() => {    
        setIsMobile(getWindowSize().innerWidth < 600);
        window.addEventListener('resize', handleWindowResize);
        dispatch(getForm({}))
    }, []);
    useEffect(()=>{
        setPages(filtereddata.length ? filtereddata.length : 0)
    },[filtereddata ])

    useEffect( ()=>{
        let extracted = extractData(form)
        let filtered = isMobile ?filterData(extracted) : [extracted]
        setFiltereddata(filtered)
    }, [form , isMobile])

    



    return(
        <div className="flex document">
            <Sidebar />
            <div className="documentContainer">
                <Navbar />

                <Container className="py-4">
                    <Row>
                        <Breadcrumb>
                            <BreadcrumbItem><a href="#">khenchela</a></BreadcrumbItem>
                            <BreadcrumbItem active>Ferme bouallage</BreadcrumbItem>
                        </Breadcrumb>
                    </Row>
                    <div className="document_details shadow">
                            <Row className="top p-3 justify-content-between">
                                <Col className="d-flex flex-wrap align-items-baseline">
                                    <h1 className="title_enquete mr-3">enquete épidémiologique</h1>
                                    <p className="ferme"> ferme boulage</p>
                                </Col>
                                <Col>
                                    <h1 className="time">date : 10-06-2001</h1>
                                </Col>
                            </Row>
                            
                            <PerfectScrollbar style={{maxHeight : "500px"}}>
                                <Row className="details ">
                                        {
                                            filtereddata && 
                                            filtereddata[isMobile ? page : 0] && 
                                            filtereddata[isMobile ? page : 0].map(el=>{
                                                if(el.type=="title"){
                                                    return (
                                                        <Col md={12} className='d-flex gap-3 align-items-center  '>
                                                            <p className="title_details">{el.label}</p>
                                                            <p className="divider mx-4"></p>
                                                        </Col>
                                                    )
                                                }else if(el.type=="property"){
                                                    return (
                                                        <Col  className='property d-flex my-4    gap-1 align-items-center flex-column  '>
                                                            <p className="prop_name">{el.name}</p>
                                                            <p className="prop_value">{el.value}</p>
                                                        </Col>
                                                    )
                                                }else if(el.type=="text"){
                                                    return (
                                                        <Col className='w-100 p-3 property_text d-flex  gap-3 align-items-center flex-column  '>
                                                            <p className="prop_text_value">{el.value}</p>
                                                        
                                                        </Col>
                                                    )
                                                }
                                            })
                                        }
                                </Row>
                            
                            </PerfectScrollbar>
                            
                            
                        
                    </div>
                    {
                        isMobile ? 
                        <Row className="justify-content-center my-4">
                            {
                                (page !== 0) && 
                                <Col className="page-icon">
                                    <i  
                                    onClick={()=>{setPage(page-1)}}
                                    className="las cursor-pointer la-angle-left"></i>
                                </Col>
                            }
                            {
                                (page !== pages) && 
                                <Col className="page-icon">
                                    <i
                                    onClick={()=>{setPage(page+1)}}
                                    className=" cursor-pointer las la-angle-right"></i>
                                </Col>
                            }
                            
                            
                            
                        </Row> :  null
                    }
                </Container>
            </div>
        </div>
    )
}


export default Document