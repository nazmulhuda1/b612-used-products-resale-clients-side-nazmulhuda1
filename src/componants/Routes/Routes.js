import { createBrowserRouter } from "react-router-dom";
import Blog from "../../pages/Blog";
import CarDetails from "../../pages/CarDetails";
import CarListing from "../../pages/CarListing";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";
import Main from "../Layout/Main";
import AboutSection from "../UI/AboutSection";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/cars',
                element: <CarListing />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/about',
                element: <AboutSection />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/cars/:id',
                element: <CarDetails />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
        ]
    }
])
export default router;