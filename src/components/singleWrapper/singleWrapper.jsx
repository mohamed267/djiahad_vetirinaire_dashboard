import extractComponents from  "./utils/extractComponents"


const SingleWrapper = ({structure , data , dataCode}) =>{
    return extractComponents(data[dataCode] , structure.fields )
}



export  default SingleWrapper