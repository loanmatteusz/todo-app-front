import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Home } from "./pages";


export const Routes = () => {

    const router = createBrowserRouter([
        {
            path: '/todos',
            element: <Home />
        },
        {
            path: '/about',
            element: <About />
        },
    ]);

    return <RouterProvider router={router} />;
}
