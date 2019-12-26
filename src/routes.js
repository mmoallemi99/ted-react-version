import HomePage from './views/HomePage.jsx'
import Sponsers from './views/Sponsers.jsx'

const routes = [
    {
        exact: true,
        path: "/",
        component: HomePage
    },
    {
        path: "/sponsers",
        component: Sponsers
    }
]

export default routes;
