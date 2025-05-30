import Layout from "@/components/layout/Layout";
import AboutPage from "@/features/about/AboutPage";
import CustomizePage from "@/features/custom/CustomizePage";
import FAQPage from "@/features/faq/FAQPage";
import HomePage from "@/features/home/HomePage";
import ReaderPage from "@/features/reader/ReaderPage";
import { SignInPage } from "@/features/SignInPage";
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
			}
		]
	}
])