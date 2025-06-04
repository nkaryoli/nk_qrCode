import Layout from "@/components/layout/Layout";
import AboutPage from "@/features/about/AboutPage";
import CustomizePage from "@/features/custom/CustomizePage";
import DashboardPage from "@/features/dashboard/DashboardPage";
import FAQPage from "@/features/faq/FAQPage";
import HomePage from "@/features/home/HomePage";
import ReaderPage from "@/features/reader/ReaderPage";
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
				path: "/reader",
				element: <ReaderPage />,
			},
			{
				path: "/faq",
				element: <FAQPage />,
			},
			{
				path: "/custom-qr",
				element: <AboutPage />,
			},
			{
				path: "/dashboard",
				element: <DashboardPage />,
			},
		]
	}
])