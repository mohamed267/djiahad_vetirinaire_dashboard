import { lazy } from 'react';
import AuthGuard from "./components/guards/authGuard"
import GuestGuard from './components/guards/guestGuard';


const routes = [
    {
        exact: true,
        guard: GuestGuard,
        path: '/login',
        component: lazy(() => import('./pages/login/login'))
    },
    {
        exact: true,
        guard: AuthGuard,
        path: '/',
        component: lazy(() => import('./pages/home/home'))
    },
    {
        exact: true,
        guard: AuthGuard,
        path: '/region/new',
        component: lazy(() => import('./pages/region/region'))
    },
    {
        exact: true,
        guard: AuthGuard,
        path: '/region/:region_id',
        component: lazy(() => import('./pages/region/region'))
    },
    {
        exact: true,
        guard: AuthGuard,
        path: '/form_field',
        component: lazy(() => import('./pages/form_field/list'))
    },
   
    {
        exact: true,
        guard: AuthGuard,
        path: '/form_field/new',
        component: lazy(() => import('./pages/form_field/form_field'))
    },
    {
        exact: true,
        guard: AuthGuard,
        path: '/form_field/:form_field_id',
        component: lazy(() => import('./pages/form_field/single'))
    },
    {
        exact: true,
        guard: AuthGuard,
        path: '/document/filter',
        component: lazy(() => import('./pages/list/list'))
    },
    {
        exact: true,
        guard: AuthGuard,
        path: '/document/filter/:filter',
        component: lazy(() => import('./pages/list/list'))
    },
    
    {
        exact: true,
        guard: AuthGuard,
        path: '/document/new',
        component: lazy(() => import('./pages/document/new'))
    },
    {
        exact: true,
        guard: AuthGuard,
        path: '/document/:form_id',
        component: lazy(() => import('./pages/document/document'))
    },
    {
        exact: true,
        guard: AuthGuard,
        path: '/document/edit/:form_id',
        component: lazy(() => import('./pages/document/single'))
    },

    /*nav */
    {
        exact: true,
        guard: AuthGuard,
        path: '/nav',
        component: lazy(() => import('./pages/nav/nav'))
    },


];

export default routes;



// {
//     exact: true,
//     path: '/auth/signin-2',
//     component: lazy(() => import('./views/auth/signin/SignIn2'))
// },
// {
//     exact: true,
//     path: '/auth/signup-2',
//     component: lazy(() => import('./views/auth/signup/SignUp2'))
// },
// {
//     path: '*',
//     layout: AdminLayout,
//     routes: [
//         {
//             exact: true,
//             path: '/app/dashboard/default',
//             component: lazy(() => import('./views/dashboard/DashDefault'))
//         },

//         {
//             exact: true,
//             path: '/basic/button',
//             component: lazy(() => import('./views/ui-elements/basic/BasicButton'))
//         },
//         {
//             exact: true,
//             path: '/basic/badges',
//             component: lazy(() => import('./views/ui-elements/basic/BasicBadges'))
//         },
//         {
//             exact: true,
//             path: '/basic/breadcrumb',
//             component: lazy(() => import('./views/ui-elements/basic/BasicBreadcrumb'))
//         },
//         {
//             exact: true,
//             path: '/basic/collapse',
//             component: lazy(() => import('./views/ui-elements/basic/BasicCollapse'))
//         },
//         {
//             exact: true,
//             path: '/basic/tabs-pills',
//             component: lazy(() => import('./views/ui-elements/basic/BasicTabsPills'))
//         },
//         {
//             exact: true,
//             path: '/basic/typography',
//             component: lazy(() => import('./views/ui-elements/basic/BasicTypography'))
//         },

//         {
//             exact: true,
//             path: '/forms/form-basic',
//             component: lazy(() => import('./views/forms/FormsElements'))
//         },
//         {
//             exact: true,
//             path: '/tables/bootstrap',
//             component: lazy(() => import('./views/tables/BootstrapTable'))
//         },

//         {
//             exact: true,
//             path: '/charts/nvd3',
//             component: lazy(() => import('./views/charts/nvd3-chart'))
//         },
//         {
//             exact: true,
//             path: '/maps/google-map',
//             component: lazy(() => import('./views/maps/GoogleMaps'))
//         },

//         {
//             exact: true,
//             path: '/sample-page',
//             component: lazy(() => import('./views/extra/SamplePage'))
//         },
//         {
//             path: '*',
//             exact: true,
//             component: () => <Redirect to={BASE_URL} />
//         }
//     ]
// }
