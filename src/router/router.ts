import Home from "../View/Home/Home";
import Index from "../View/Index/Index";

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