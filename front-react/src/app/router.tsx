import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Main from "../pages/main/Main";
import About from "../pages/about/About";
import Consultation from "../pages/consultation/Consultation";
import Universities from "../pages/universities/Universities";
import University from "../pages/university/University";
import NotFound from "../pages/404";
import Profile from "../pages/profile/Profile";
import IsAuth from "../shared/hocs/IsAuth";

export const routerConfig = {
    main: '/',
    about: '/about',
    consultation: '/consultation',
    universities: '/universities',
    university: '/universities/:universityId',
    profile: '/profile',
    notFount: '*'
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

            {
                path: routerConfig.notFount,
                element: <NotFound />,
            },

            {
                path: routerConfig.profile,
                element: <IsAuth><Profile /></IsAuth>,
            },

        ]
    },
]);