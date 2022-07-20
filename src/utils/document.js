exports.extractData = (form)=>{


    let objFields = {}
    let priorities = []
    let extractedData= []

    if(form){
        extractedData = [
            {type : "title"  ,  label : "région" },
            {type : "property",
            value : form.region ? form.region.region_name ?
            form.region.region_name :"N/A":"N/A" , name : "région"},
            {type : "property",
            value : form.wilaya ? form.wilaya.wilaya_name ?
            form.wilaya.wilaya_name :"N/A":"N/A" , name : "wilaya"},
            {type : "property",
            value : form.commune ? form.commune.commune_name ?
            form.commune.commune_name :"N/A":"N/A" , name : "wilaya"},
            
        
        ]



        let address_fields = form && form.address_fields
        let string_fields = form && form.string_fields
        let boolean_fields = form && form.boolean_fields


        address_fields && address_fields.map(field=>{
            let address = field.address;
            let form_field = field.form_field
            let form_field_name = form_field.form_field_name
            let lat = field.lat;
            let lng = field.lng;
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

            if(lat && lng){
                objFields[priority].fields.push({
                    type : "gps",
                    name: form_field_name,
                    value : `${lat},${lng}`,
                })

            }else{
                objFields[priority].fields.push({
                    type : "property",
                    name : form_field_name,
                    value : address , name : form_field_name ,
                })

            }
        })

        string_fields && string_fields.map(field=>{
            let value = field.field_value
            value = typeof(value) == "string" ? value.split("_*_").join(" ") : ""

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
                value : value , name : form_field_name ,
            })

           

        })

        boolean_fields && boolean_fields.map(field=>{
            let value = field.field_value
            value = typeof(value) == "string" ? value.split("_*_").join(" ") : ""

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
                value : value ? 'oui' : 'non' , 
                name : form_field_name ,
            })

           

        })
    }

    
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


exports.extractFor = (form_fields)=>{

    let objFields = {}
    let priorities = []

    form_fields && form_fields.map(form_field=>{

        
        let string_fields = form_field && form_field.string_fields
        string_fields && string_fields.map(field=>{
            let form_field_id = form_field.form_field_id
            let form_field_name = form_field.form_field_name
            let form_field_type = form_field.form_field_type
            let field_options =  form_field.field_options
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

            let type = ""
            let typeInput = ""
            let xl = 6

            if(form_field_type =="SELECT"){
                type = "select"
            }else if(form_field_type =="STRING"){
                type = "input"
                typeInput = "text"
            }else if(form_field_type =="TEXT"  ){
                type = "textarea";
                xl = 12;
            }else if(form_field_type =="NUMBER"  ){
                type = "input"
                typeInput = "number"
            }else if(form_field_type =="DATE"  ){
                type = "input"
                typeInput = "date"
            }else if(form_field_type =="ADDRESS"  ){
                type = "address";
                xl = 12;
            }
            if(form_field_type =="SELECT"){
                objFields[priority].fields.push( {
                    type : "select", 
                    label : "type field",
                    field : "form_field_type",
                    name: "form_field_type",
                    options : field_options ? field_options :[] ,        
                    // icon : "las la-lock input-icon",
                    placeholder : "enter your wilayas",
                    xl :6,
                    id :  "wilayas"
                })

            }else{

                objFields[priority].fields.push({
                    type : type, 
                    label : form_field_name,
                    name: `${form_field_name}__${form_field_id}`,
                    typeInput : typeInput,
                    field : form_field_id,
                    placeholder : "",
                    xl :xl,
                    id :  `${form_field_name}__${form_field_id}`,
                })
            }
        })
    })


   

    let extractedData= []

    Object.keys(objFields).map(key=>{
        let priority =  objFields[key]
        extractedData.push(priority.group)
        extractedData = [...extractedData , ...priority.fields]
    })


    return {
         type : "row",
        className : "w-100 ",
        fields : extractedData ? extractedData :[]

    }

}


exports.extractForm = (form_fields)=>{

    let objFields = {}
    let priorities = []

    form_fields && form_fields.map(form_field=>{
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

        
        let form_field_id = form_field.form_field_id
        let form_field_name = form_field.form_field_name
        let form_field_type = form_field.form_field_type
        let field_options =  form_field.field_options
        /*-------*/

        let type = ""
        let typeInput = ""
        let xl = 6

       if(form_field_type =="STRING"){
            type = "input"
            typeInput = "text"
        }else if(form_field_type =="TEXT"  ){
            type = "textarea";
            xl = 12;
        }else if(form_field_type =="NUMBER"  ){
            type = "input"
            typeInput = "number"
        }else if(form_field_type =="DATE"  ){
            type = "input"
            typeInput = "date"
        }
        if(form_field_type =="SELECT"){
            objFields[priority].fields.push( {
                type : "select", 
                label : form_field_name ,
                field : form_field_id.toString(),
                name: `${form_field_name}__${form_field_id}`,
                options : {
                    label :"field_option_value" ,
                    value : "field_option_id", 
                    options : field_options ? field_options :[] 
                },      
                // icon : "las la-lock input-icon",
                placeholder : "",
                xl :6,
                id :  `${form_field_name}__${form_field_id}`
            })

        }else if(form_field_type =="COMPLEXSELECT"){

            objFields[priority].fields.push( {
                type : "select_complex", 
                label : form_field_name ,
                field : form_field_id.toString(),
                name: `${form_field_name}__${form_field_id}`,
                options : {
                    label :"field_option_value" ,
                    value : "field_option_id", 
                    options : field_options ? field_options :[] 
                },      
                // icon : "las la-lock input-icon",
                placeholder : "",
                xl :8,
                id :  `${form_field_name}__${form_field_id}`
            })

        }else if(form_field_type =="ADDRESS"){

            objFields[priority].fields.push( {
                type : "address", 
                label : form_field_name ,
                field : form_field_id.toString(),
                name: `${form_field_name}__${form_field_id}`,   
                // icon : "las la-lock input-icon",
                placeholder : "",
                xl :8,
                id :  `${form_field_name}__${form_field_id}`
            })

        }else if(form_field_type =="GPS"){

            objFields[priority].fields.push( {
                type : "gps", 
                label : form_field_name ,
                field : form_field_id.toString(),
                name: `${form_field_name}__${form_field_id}`,   
                // icon : "las la-lock input-icon",
                placeholder : "",
                xl :8,
                id :  `${form_field_name}__${form_field_id}`
            })

        }else{

            objFields[priority].fields.push({
                type : type, 
                label : form_field_name,
                name: `${form_field_name}__${form_field_id}`,
                typeInput : "text",
                field : form_field_id.toString(),
                placeholder : "",
                xl :12,
                id :  `${form_field_name}__${form_field_id}`,
            })
        }
        
    })


   

    let extractedData= [
        {
            type : 'input', 
            label : "farme name",
            name: `farme name`,
            typeInput : "text",
            field : "farm_name",
            xl :6,
            id : "farme_name",
        },
        {
            type : 'input', 
            label : "date enquete",
            name: `farme name`,
            typeInput : "date",
            field : "date",
            xl :6,
            id : "form_date",
        } , 
        {   
            type : "title"  , 
            slug : "région"  ,
            label : "région" 
        },
        {
            type : "select", 
            label : "region",
            typeSelect : "store",
            field : "region",
            name: "region",
            options : {
                key : "regions",
                where : "region",
                label :  "region_name",
                value :  "region_id"
            } ,        
            placeholder : "enter your region",
            xl :4,
            id :  "region"
        },
         {
            type : "select", 
            label : "wilaya",
            typeSelect : "store",
            field : "wilaya",
            name: "wilaya",
            options : {
                key : "wilayas",
                where : "wilaya",
                label :  "wilaya_name",
                value :  "wilaya_id"
            } ,        
            placeholder : "enter your wilaya",
            xl :4,
            id :  "wilaya"
        },
        {
            type : "select", 
            label : "commune",
            typeSelect : "store",
            field : "commune",
            name: "commune",
            options : {
                key : "communes",
                where : "commune",
                label :  "commune_name",
                value :  "commune_id"
            } ,        
            placeholder : "enter your commune",
            xl :4,
            id :  "commune"
        }


    ]

    Object.keys(objFields).map(key=>{
        let priority =  objFields[key]
        extractedData.push(priority.group)
        extractedData = [...extractedData , ...priority.fields] 
    })

    extractedData.push(
        {
            xl : 12,
            className:"px-3 my-4",
            fields : [
                {
                    type : "button",
                    className : "w-100 btn--primary",
                    text : "save changes"
                }
            ]
        })

    return {
         type : "row",
        className : "w-100 ",
        fields :  extractedData ? extractedData :[]

    }

}



exports.dataForm = (form) =>{
    let objData = {}

   

    if(form){
        objData["date"]= new Date(form.date).getTime()
        objData["farm_name"]= form.farm_name
        objData["region"] =  form.region
        objData["wilaya"] =  form.wilaya
        objData["commune"] =  form.commune


        let string_fields = form && form.string_fields

        string_fields && string_fields.map(field=>{
            let value = field.field_value
            let form_field_id  = field.form_field_id

            let form_type = field.form_field.form_field_type
            if(form_type =="COMPLEXSELECT"){
                let field_options = field.form_field.field_options
                let [field_value , extra] = value.split('_*_');

                let filtered = field_options  && field_options.filter(option=>{
                    return (option.field_option_value == field_value)
                })

                let obgVal = filtered[0] ? { ...filtered[0] , extra} : {extra}
                objData[form_field_id.toString()] = obgVal
                
            }
             if(form_type =="SELECT"){
                let field_options = field.form_field.field_options

                let filtered = field_options  && field_options.filter(option=>{
                    return (option.field_option_value == value)
                })

                let obgVal = filtered[0] ? filtered[0]   :{}
                objData[form_field_id.toString()] = obgVal
                
            }

           

        })


        // address_fields && address_fields.map(field=>{
        //     let address = field.address;
        //     let form_field = field.form_field
        //     let form_field_name = form_field.form_field_name
        //     /*-------*/
        //     let field_group = form_field.field_group
        //     let field_group_slug = field_group.field_group_slug
        //     let field_group_name = field_group.field_group_name
        //     let priority  = new Date(field_group.createdAt).getTime()

        //     if(!objFields[priority]){
        //         objFields[priority] = {};
        //         objFields[priority].group = {type : "title"  , slug : field_group_slug  ,label : field_group_name }
        //         objFields[priority].fields = [];
        //         priorities.push(priority)
        //     }

        //     objFields[priority].fields.push({
        //         type : "property",
        //         value : address , name : form_field_name ,
        //     })
        // })
    }

    


    return objData
}