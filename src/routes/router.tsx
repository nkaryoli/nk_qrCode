import Layout from "@/components/layout/Layout";
import CustomizePage from "@/features/custom/CustomizePage";
import DashboardPage from "@/features/dashboard/DashboardPage";
import HomePage from "@/features/home/HomePage";
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
				path: "/customize-qr",
				element: <CustomizePage />,
			},
			{
				path: "/dashboard",
				element: <DashboardPage />,
			},
		]
	}
])