import ListItems from  "../listItems"
import Form from "../../form/form"
import DataTable from "../../datatable/datatable"

const components = {
    listItems : ListItems,
    form : Form,
    dataTable : DataTable
}

const extract = (data , fields)=>{
    return (
        <>
            {
                fields && fields.map(field=>{
                    if(field.type){
                        let Cell = components[field.type]
                        return (
                            <Cell
                                structure = {field}
                                row={data}
                                direct={true}
                            /> 
                        )

                    }else{
                        return (
                            <div className={`${field.className}`}>
                                {
                                    (
                                        extract(data ,  field.fields)
                                    )
                                } 
                            </div>
                        )
                    }
                })
            }
        </>
    )

}



const extractComponents = (data , fields)=>{
    return(
        <>
            {
                fields && fields.map(field=>{
                    if(field.type){
                        return (
                            extract(data ,  field.fields)   
                        )

                    }else{
                        return (
                            <div className={`${field.className}`}>
                                {
                                    (
                                        extract(data ,  field.fields)
                                    )
                                } 
                            </div>
                        )
                    }
                })
            }
            
        </>
    )
}


export default extractComponents