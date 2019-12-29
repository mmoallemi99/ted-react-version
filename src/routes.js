import HomePage from './views/HomePage.jsx'
import {Sponsors} from './views/Sponsors.jsx'

const routes = [
    {
        exact: true,
        path: "/",
        component: HomePage
    },
    {
        path: "/Sponsors",
        component: Sponsors
    }
]

export default routes;
