/** @format */

import { defer, type V2_MetaFunction } from "@remix-run/node";
import { Await, Link, useLoaderData } from "@remix-run/react";
import fs from "node:fs";
import { Suspense } from "react";

export const loader = async () => {
	const getFiles = async () => {
		await new Promise(resolve => setTimeout(resolve, 1000));
		return fs
			.readdirSync(`${process.cwd()}/app/routes`)
			.filter(file => file !== "_index.tsx")
			.map(file => file.replace(".tsx", ""));
	};
	return defer({
		routes: getFiles(),
	});
};

export const meta: V2_MetaFunction = () => {
	return [{ title: "New Remix App" }];
};

export default function Index() {
	const data = useLoaderData<typeof loader>();
	return (
		<div className="w-full min-h-screen h-full flex flex-col items-center justify-center gap-6">
			<Suspense fallback={<div>Loading...</div>}>
				<Await resolve={data.routes}>
					{routes =>
						routes.map(route => (
							<Link key={route} to={route}>
								{route}
							</Link>
						))
					}
				</Await>
			</Suspense>
			<div></div>
		</div>
	);
}
