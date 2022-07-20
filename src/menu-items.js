const menuItems = {
    items: [
        {
            id: 'menu',
            title: 'menu',
            type: 'group',
            children: [
                {
                    id: 'dashboard',
                    title: 'dashboard',
                    type: 'item',
                    url: '/',
                    icon: 'las la-home',
                }
            ]
        },
        {
            id: 'regions-menu',
            title: 'rigion',
            type: 'group',
            children: [
                 {
                    id: 'rigions',
                    title: 'rigions',
                    type: 'collapse',
                    url: '/region/new',
                    icon: 'las la-globe'
                },
            ]
        },
        {
            id: 'formulaire-menu',
            title: 'formulaire',
            type: 'group',
            children: [
                {
                    id: 'form_field',
                    title: 'field form',
                    type: 'collapse',
                    url: '/form_field',
                    icon: 'las la-globe',
                    children : [
                        {
                            id: 'form_field',
                            title: 'nouvelle champ ',
                            type: 'item',
                            url: '/form_field/new'
                        },
                    ]
                },
                {
                    id: 'formulaires_form',
                    title: 'formulaires',
                    type: 'item',
                    url: '/document/new',
                    icon: 'las la-file-alt',
                }
            ]
        },
        {
            id: 'system',
            title: 'system',
            type: 'group',
            children: [
                {
                    id: 'ads',
                    title: 'filter navigation',
                    type: 'item',
                    url: '/nav',
                    icon: 'las la-directions',
                },{
                    id: 'ads',
                    title: 'filter navigation',
                    type: 'item',
                    url: '/nav',
                    icon: '"icon las la-ad',
                },
                 {
                    id: 'settings',
                    title: 'paramètres',
                    type: 'item',
                    url: '/settings',
                    icon: 'las la-cog',
                }
            ]
        }



    ]
};



export default menuItems;
