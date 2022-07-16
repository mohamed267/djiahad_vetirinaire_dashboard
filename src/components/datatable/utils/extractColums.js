
import ComposedTopBottom from "./cells/composedTopBottom";
import ComposedLined from "./cells/composedLined";


const cells = {
    composedTopBottom : ComposedTopBottom,
    composedLined :ComposedLined
}


const extractColums = (structure , t)=>{
    let columns = structure && structure.map((el, key)=>{
        let headerName= "";
        el.headerName.map(name=>{
            headerName += "/"+ t(name)
        })

        headerName = headerName.slice(1)
        if(typeof(el.field)=="string"){
          return {...el ,  headerName}
        }else{
            let Cell = cells[el.component] 
            const {field ,  ...structure} = el
            return {
                renderCell: (params) => {
                    return <Cell  structure={el.field} params={params}/>
                },
                field : key,
                ...structure , 
                headerName
            }
        }
        
    })


    return columns.filter(el=>(el!=undefined))
}



export default extractColums