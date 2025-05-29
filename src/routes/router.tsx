import Layout from "@/components/layout/Layout";
import FAQPage from "@/features/faq/FAQPage";
import HomePage from "@/features/home/HomePage";
import ReaderPage from "@/features/reader/ReaderPage";
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
				path: "/reader",
				element: <ReaderPage />,
			},
			{
				path: "/faq",
				element: <FAQPage />,
			},
			{
				path: "/about",
				element: <div>About Page</div>,
			}
		]
	}
])