const menuItems = {
    items: [
        // {
        //     id: 'menu',
        //     title: 'menu',
        //     type: 'group',
        //     children: [
        //         {
        //             id: 'dashboard',
        //             title: 'dashboard',
        //             type: 'item',
        //             url: '/',
        //             icon: 'las la-home',
        //         }
        //     ]
        // },
        {
            id: 'regions-menu',
            title: 'région',
            type: 'group',
            children: [
                 {
                    id: 'rigions',
                    title: 'régions',
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
                    title: 'les champs',
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
                    title: 'enquets',
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
                    title: 'filtre',
                    type: 'item',
                    url: '/nav',
                    icon: 'las la-directions',
                }
            ]
        }



    ]
};



export default menuItems;
