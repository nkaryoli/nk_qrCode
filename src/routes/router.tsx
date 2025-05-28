import Layout from "@/components/layout/Layout";
import HomePage from "@/features/home/HomePage";
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
				path: "/about",
				element: <div>About Page</div>,
			}
		]
	}
])