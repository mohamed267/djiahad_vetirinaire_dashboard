

const login = {
    type : "row",
    fields : [
        {
            type : "input", 
            label : "username",
            name: "admin_username",
            typeInput : "text",
            className:"rounded-login mb-2",
            field : "admin_username",
            // icon:"las la-user input-icon",
            placeholder : "enter your username",
            xl :12,
            id :  "admin_username"
        },
        {
            type : "input", 
            label : "password",
            typeInput : "password",
            field : "admin_password",
            name: "admin_password",
            // icon : "las la-lock input-icon",
            className:"rounded-login m-2",
            placeholder : "enter your password",
            xl :12,
            id :  "admin_password"
        },
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
        }
    ]

                


}

const region = {
    type : "row",
    className : "w-100 bg-white  shadow  rounded p-3",
    fields : [
        {
            type : "input", 
            label : "region name",
            name: "region_name",
            typeInput : "text",
            field : "region_name",
            placeholder : "enter your region name",
            xl :6,
            id :  "region_name"
        },
        {
            type : "select", 
            label : "wilayas",
            typeSelect : "store",
            field : "wilayas",
            field_deleted : "deleted_wilayas",
            name: "wilayas",
            isMulti : true,
            className:"z-index-10000",
            options : {
                key : "wilayas",
                where : "wilaya",
                label :  "wilaya_name",
                value :  "wilaya_id"
            } ,        
            // icon : "las la-lock input-icon",
            placeholder : "enter your wilayas",
            xl :6,
            id :  "wilayas"
        },
        

        {
            type : "map", 
            label : "map",
            typeMap : "range",
            field_lat : "lat",  
            field_lng :  "lng",
            field_radius : "radius",   
            field : "map",
            name: "map",            
            xl :12,
            id :  "map"
        },
        
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
        }
    ]

                


}

const form_field = {
    type : "row",
    className : "w-100 bg-white  shadow  rounded p-3",
    fields : [
        {
            type : "input", 
            label : "field name",
            name: "form_field_name",
            typeInput : "text",
            field : "form_field_name",
            placeholder : "enter the name",
            xl :6,
            id :  "field_name"
        },
        {
            type : "select", 
            label : "group name",
            typeSelect : "store",
            creatable : true,
            field : "field_group",
            name: "field_group",
            options : {
                key : "field_groups",
                where : "field_group",
                value :  "field_group_id",
                label :  "field_group_name"
            } ,        
            // icon : "las la-lock input-icon",
            placeholder : "enter your wilayas",
            xl :6,
            id :  "groups"
        },
        {
            type : "select", 
            label : "type field",
            field : "form_field_type",
            name: "form_field_type",
            options : {
                options : [
                    {value : "NUMBER" , label : "number"},
                    {value : "BOOLEAN" , label : "true/false"},
                    {value : "SELECT" , label : "select"},
                    {value : "COMPLEXSELECT" , label : "select complex"},
                    {value : "ADDRESS" , label : "address"},
                    {value : "GPS" , label : "coordonnée gps"},
                    {value : "STRING" , label : "text"},
                    {value : "TEXT" , label : "textarea"},
                    {value : "DATE" , label : "date"},
                ]
            } ,        
            // icon : "las la-lock input-icon",
            placeholder : "enter your wilayas",
            xl :6,
            id :  "type_fields"
        },
        {
            type :  "none"
        },
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
        }
    ]

                


}

const nav = {
    type : "row",
    className : "w-100 bg-white  shadow  rounded p-3",
    fields : [
        {
            type : "select", 
            label : "filter navigation",
            typeSelect : "store",
            field : "form_fields_nav",
            name: "wilayas",
            className:"z-index-10000",
            options : {
                key : "form_fields_nav",
                where : "form_field",
                label :  "form_field_name",
                value :  "form_field_id"
            } ,        
            // icon : "las la-lock input-icon",
            placeholder : "enter your form field",
            xl :6,
            id :  "form_fields"
        },
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
        }
    ]

                


}






export default {login , region , form_field , nav };

