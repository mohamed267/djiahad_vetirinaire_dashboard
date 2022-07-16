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
                    icon: 'las la-home'
                }
            ]
        },
        {
            id: 'users-menu',
            title: 'rigion',
            type: 'group',
            children: [
                 {
                    id: 'rigions',
                    title: 'rigions',
                    type: 'collapse',
                    url: '/payments',
                    icon: 'las la-wallet',
                },
            ]
        },
        {
            id: 'system',
            title: 'system',
            type: 'group',
            children: [
                {
                    id: 'ads',
                    title: 'ads',
                    type: 'item',
                    url: '/ads',
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
