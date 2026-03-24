import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/auth/SignIn";
import { Dashboard } from "./pages/app/Dashboard";
import { AppLayout } from "./pages/_layouts/app";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [{ path: '/', element: <Dashboard /> }]
    },
    {
        path: '/',
        element: <AppLayout />,
        children: [{ path: '/sign-in', element: <SignIn /> }]
    }
])