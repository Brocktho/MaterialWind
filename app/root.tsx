/** @format */

import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import tailwindcss from "./tailwind.css";
import Button from "./components/Inputs/Button";
import { useState } from "react";

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
	{ rel: "stylesheet", href: tailwindcss },
];

export default function App() {
	const [theme, setTheme] = useState<"light" | "dark">("light");
	return (
		<html lang="en" className={theme}>
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1"
				/>
				<Meta />
				<Links />
			</head>
			<body className="bg-background-light dark:bg-background-dark">
				<Button
					onClick={() => {
						if (theme === "light") {
							setTheme("dark");
						} else {
							setTheme("light");
						}
					}}>
					Toggle Mode
				</Button>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

export const ErrorBoundary = () => {
	return <div>Error!</div>;
};
