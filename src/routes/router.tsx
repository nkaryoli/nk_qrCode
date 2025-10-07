import Layout from "@/components/layout/Layout";
import DashboardPage from "@/features/dashboard/DashboardPage";
import HomePage from "@/features/home/HomePage";
import RedirectPage from "@/features/callback/AuthCallback";
import { SignInPage } from "@/features/signIn/SignInPage";
import SignUpPage from "@/features/signUp/SignUpPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
	{
        element: <Layout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/sign-in",
				element: <SignInPage />,
			},
			{
				path: "/sign-up",
				element: <SignUpPage />,
			},
			{
				path: "/auth/callback",
				element: <RedirectPage />,
			},
		]
	},
	{
		element: <DashboardPage/>,
		path: '/dashboard'
	}
])