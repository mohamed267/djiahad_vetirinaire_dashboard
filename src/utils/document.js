exports.extractData = (form)=>{


    let objFields = {}
    let priorities = []
    if(form){
        let address_fields = form && form.address_fields


        address_fields && address_fields.map(field=>{
            let address = field.address;
            let form_field = field.form_field
            let form_field_name = form_field.form_field_name
            /*-------*/
            let field_group = form_field.field_group
            let field_group_slug = field_group.field_group_slug
            let field_group_name = field_group.field_group_name
            let priority  = new Date(field_group.createdAt).getTime()

            if(!objFields[priority]){
                objFields[priority] = {};
                objFields[priority].group = {type : "title"  , slug : field_group_slug  ,label : field_group_name }
                objFields[priority].fields = [];
                priorities.push(priority)
            }

            objFields[priority].fields.push({
                type : "property",
                value : address , name : form_field_name ,
            })
        })
    }

    let extractedData= []

    Object.keys(objFields).map(key=>{
        let priority =  objFields[key]
        extractedData.push(priority.group)
        extractedData = [...extractedData , ...priority.fields]
    })


    return extractedData


    
    return (
        [
            {type : "title" , label : "rigion"},
            {type : "property" , name : "wilaya" , value : "khenchella"},
            // {type : "property" , name : "daira" , value : "el-hama"},
            // {type : "property" , name : "commune" , value : "beghai"},
            {type : "title" , label : "caractères"},
            {type : "property" , name : "climat" , value : "sec"},
            {type : "property" , name : "géographie" , value : "plateaux"},
            {type : "property" , name : "températeur" , value : "haux 32°"},
            {type : "title" , label : "propriétaire"},
            {type : "property" , name : "nom" , value : "boulague"},
            {type : "property" , name : "prénom" , value : "maamar"},
            {type : "property" , name : "age" , value : "60"},
            {type : "property" , name : "numéro de téléphone" , value : "068925154875"},
            {type : "property" , name : "address" , value : "rue douawdi abd elhamid khenchela algirir"},
            {type : "property" , name : "cordoné gps" , value : "N/A"},
            {type : "title" , label : "le traitement préventive"},
            {type : "property" , name : "produit contre le mouche" , value : "true"},
            {type : "property" , name : "déparasitage saisoni`re" , value : "true"},
            {type : "property" , name : "températeur" , value : "32°"},
            {type : "title" , label : "historique de l'animale"},
            {type : "text" ,  value : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        ]
    )
}