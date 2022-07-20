

const users = {
    keyFetchAll :"days",
    keyId : "user_id",
    columns : [
        { 
            field: 'user_id', headerName: ['ID']
        },
        {
            field: 'user_display_name',
            headerName: ['users'],
            editable: true,
        },
        {
            field: {
                fields : [
                    {
                        typeField : "search",
                        where : {type : "phone"},
                        in : "social_accounts",
                        field: "account"
                    } 
                    ,{
                        typeField : "search",
                        where : {type : "email"},
                        in : "socialAccounts",
                        field : "account"
                    }
                ]
            },
            component : "composedTopBottom",
            headerName: ['phone','email'],
        },
        {
            field: 'createdAt',
            headerName: ['creationDate'] ,
            editable: true,
        },
        {
            field: {
                fields : [
                    {
                        type : "linkButton",
                        link : "/users",
                        field : "user_id",
                        class:"las la-desktop btn-show-more"
                    } 
                ],
            },
            
            component : "composedLined",
            sortable: false,
            headerName: ['actions'] 
        }
    ]
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

const services = {
    keyFetchAll :"services",
    keyId : "service_id",
    columns : [
        { 
            field: 'service_id', headerName: ['ID']
        },
        {
            field: 'service_name',
            headerName: ['name']
        },
        {
            field: 'service_slug',
            headerName: ['slug'] 
        },
        {
            field: {
                fields : [
                    {
                        type : "linkButton",
                        link : "/services",
                        field : "service_id",
                        state : {
                            super_service_id : "service_id"
                        },
                        class:"las la-desktop btn-show-more"
                    } 
                ],
            },
            
            component : "composedLined",
            sortable: false,
            headerName: ['actions'] 
        }
    ]
}

const ads = {
    keyFetchAll :"ads",
    keyId : "ad_id",
    columns : [
        { 
            field: 'ad_id', headerName: ['ID']
        },
        {
            field: "ad_clickes",
            headerName: ['clickes']
        },
        {
            field: 'ad_url',
            headerName: ['url'] 
        },
        {
            field: {
                fields : [
                    {
                        type : "linkButton",
                        link : "/ads",
                        field : "ad_id",
                        class:"las la-desktop btn-show-more"
                    } 
                ],
            },
            
            component : "composedLined",
            sortable: false,
            headerName: ['actions'] 
        }
    ]
}


const document = {
    keyFetchAll :"forms",
    keyId : "form_id",
    columns : [
        { 
            field: 'form_id', headerName: ['ID']
        },
         { 
            field: 'farm_name', headerName: ['nom de farme']
        },
        { 
            field: {
                field : 'date'
            }, headerName: ['date de consultation'] ,
            component : "date",
        },
        {
            field: {
                fields : [
                    {
                        type : "linkButton",
                        link : "/document",
                        field : "form_id",
                        class:"las la-desktop btn-show-more"
                    } 
                ],
            },
            
            component : "composedLined",
            sortable: false,
            headerName: ['actions'] 
        }
    ]
}

const form_field = {
    keyFetchAll :"forms",
    keyId : "form_field_id",
    columns : [
        { 
            field: 'form_field_id', headerName: ['ID']
        },
         { 
            field: 'form_field_name', headerName: ['nom de champs']
        },
        { 
            field: 'form_field_type', headerName: ['type de champs']
        },
        {
            field: {
                fields : [
                    {
                        type : "linkButton",
                        link : "/form_field",
                        field : "form_field_id",
                        class:"las la-desktop btn-show-more"
                    } 
                ],
            },
            
            component : "composedLined",
            sortable: false,
            headerName: ['actions'] 
        }
    ]
}

export default {document , form_field};

