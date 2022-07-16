

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
            label : "password",
            typeInput : "password",
            field : "wilayas",
            name: "wilayas",
            options : [
                { value: 'chocolate', label: 'Chocolate' , className: 'p-2jjjj' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' }
              ],              
            // icon : "las la-lock input-icon",
            placeholder : "enter your wilayas",
            xl :6,
            id :  "wilayas"
        },

        {
            type : "map", 
            label : "map",
            typeInput : "region",
            field : "map",
            name: "map",            
            xl :6,
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



export default {login , region};

