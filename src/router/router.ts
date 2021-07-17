import Home from "../components/Home/Home";
import Index from "../components/Index/Index";

type Route = {
    path : string,
    component : () => JSX.Element
}

const router: Route[] = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/index",
        component: Index
    }
];
export default router