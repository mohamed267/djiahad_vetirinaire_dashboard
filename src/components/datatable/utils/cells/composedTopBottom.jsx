
const extract =  (field ,  params)=>{
    if(field.typeField =="search"){
        let data  =  params.row;
        data  =  field.in ? data[field.in] : data
        if(field.where){
            data = data && data.filter(el=>{
                let isTrue =  true;
                // console.log("our where is ", field.where)
                Object.keys(field.where).forEach(filt=>{
                    if(data[filt] ==  field.where[filt]){
                        return false
                    }
                   
                })
                return isTrue
            })


            return (
                data ? data[0] ?  data[0][field.field] ?  
                data[0][field.field] : "" : "" : ""
            )
            
        }


        
       
    }
    return "";
}

const ComposedTopBottom  =({structure , params})=>{
    return(
        <div>
            {
                structure  && 
                structure.fields &&
                structure.fields.map((el , key)=>{
                    return (<div key={key}>
                        <span>
                        {extract(el ,  params)}
                        </span>
                    </div>)
                })
            }
        </div>
    )
}




export default ComposedTopBottom