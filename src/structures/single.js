import lists from "./lists"  

const users = {

    fields : [
        {   
            className:"begin",
            fields :[
                {
                    type : "listItems",
                    name :  "user information",
                    fields :[
                        {
                            type : "header",
                            img : {
                                field : "profilePicture.url"
                            },
                            top : {
                                field : "user_display_name"
                            },
                            bottom : {
                                field : {
                                    type :  "search",
                                    in : "social_accounts",
                                    where : {type : "phone"},
                                    field :  "account"
                                }
                            }
                        
                        }
                    ]
                }
            ]         
        },
        {
            className:"end",
            fields : [
                {
                    type : "form",
                    fields : [
                        {
                            type : "imageInput",
                            field : "profilePicture.url",
                            xl :6,
                            name : "file"
                        },
                        {
                            xl :6,
                            fields : [
                                {
                                  type : "input",
                                  label : "name",
                                  typeInput : "text",
                                  placeholder : "enter your name",
                                  field : "user_display_name",
                                  id :  "user_user_name"
                                },
                                {
                                    type : "input",
                                    label : "phone",
                                    typeInput : "number",
                                    placeholder : "enter your phone",
                                    field : {
                                        type :  "search",
                                        in : "social_accounts",
                                        where : {type : "phone"},
                                        field :  "account"
                                    },
                                    id :  "user_phone_number"
                                },
                                {
                                    type : "input",
                                    label : "email",
                                    typeInput : "email",
                                    placeholder : "enter your email",
                                    field : {
                                        type :  "search",
                                        in : "social_accounts",
                                        where : {type : "email"},
                                        field :  "account"
                                    },
                                    id :  "user_user_email"
                                }
                            ]
        
                        },
                        {
                            xl :6,
                            fields : [
                                {
                                  type : "switch",
                                  field :  "subscribed" , 
                                  on : "subscribed",
                                  off : "not subscribed",
                                  checkedOn : true,
                                  label : "subscribed",
                                  id :  "user_user_subscibed",
                                  name :  "subscribed",
                                }
                            ]
        
                        },
                        {
                            xl :6,
                            fields : [
                                {
                                  type : "switch",
                                  field :  "user_banned" , 
                                  on : "active",
                                  off : "banned",
                                  checkedOn : true,
                                  label : "activated",
                                  id :  "user_user_banned",
                                  name :  "active",
                                }
                            ]
        
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
               

            ]
        }
    ],


}

const services = {

    fields : [
        {
            className:"end ",
            fields : [
                {
                    type : "form",
                    fields : [
                        {
                            type : "imageInput",
                            field : "file.url",
                            xl :6,
                            name : "file"
                        },
                        {
                            xl :6,
                            fields : [
                                {
                                  type : "input",
                                  label : "name",
                                  typeInput : "text",
                                  placeholder : "enter service name",
                                  field : "service_name",
                                  id :  "service_service_name"
                                },
                                {
                                  type : "input",
                                  label : "slug",
                                  typeInput : "text",
                                  placeholder : "enter service slug",
                                  field : "service_slug",
                                  id :  "service_service_slug"
                                },
                            ]
        
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
               

            ]
        },
        {
            className : "col-xl-12",
            fields : [
                {
                    type : "dataTable",
                    ...lists.services,
                    field:"services"
                }
            ]
        }
    ],


    
}

const ads = {

    fields : [
        {
            className:"end ",
            fields : [
                {
                    type : "form",
                    fields : [
                        {
                            type : "imageInput",
                            field : "file.url",
                            xl :6,
                            name : "file"
                        },
                        {
                            xl :6,
                            fields : [
                                {
                                  type : "input",
                                  label : "name",
                                  name:"ad_name",
                                  typeInput : "text",
                                  placeholder : "enter ad name",
                                  field : "ad_name",
                                  id :  "ad_ade_name"
                                },
                                {
                                  type : "input",
                                  label : "clickes",
                                  typeInput : "number",
                                  placeholder : "enter ad clickes",
                                  field : "ad_clickes",
                                  id :  "ad_ad_clickes"
                                },
                                {
                                    type : "input",
                                    label : "url",
                                    typeInput : "text",
                                    placeholder : "enter ad url",
                                    field : "ad_url",
                                    id :  "ad_ad_url"
                                  },
                            ]
        
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
               

            ]
        }
    ],


    
}

const demands = {
    keyFetchAll :"demands",
    keyId : "client_demand_id",
    columns : [
        { 
            field: 'client_demand_id', headerName: ['ID']
        },
        {
            field: 'client_demand_title',
            headerName: ['name']
        },
        {
            field: 'createdAt',
            headerName: ['creationDate'] 
        }
    ]
}

export default {users , demands , services , ads};

