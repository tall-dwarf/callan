import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Main from "../pages/main/Main";
import About from "../pages/about/About";
import Consultation from "../pages/consultation/Consultation";
import Universities from "../pages/universities/Universities";
import University from "../pages/university/University";

export const routerConfig = {
    main: '/',
    about: '/about',
    consultation: '/consultation',
    universities: '/universities',
    university: '/universities/:universityId',
}


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: routerConfig.main,
                element: <Main />
            },
            {
                path: routerConfig.about,
                element: <About />
            },
            {
                path: routerConfig.consultation,
                element: <Consultation />
            },
            {
                path: routerConfig.universities,
                element: <Universities />
            },
            {
                path: routerConfig.university,
                element: <University />,
            },

        ]
    },
]);