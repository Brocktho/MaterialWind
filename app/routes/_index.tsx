/** @format */

import { defer, type V2_MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import fs from "node:fs";
import Button from "~/components/Inputs/Button";

export const loader = async () => {
	return defer({
		routes: fs.readdir(`${__dirname}/app/routes`, files => {
			return files?.path || "Empty";
		}),
	});
};

export const meta: V2_MetaFunction = () => {
	return [{ title: "New Remix App" }];
};

export default function Index() {
	const data = useLoaderData<typeof loader>();
	return (
		<div className="w-full min-h-screen h-full flex flex-col items-center justify-center gap-6">
			<div className="flex flex-row gap-3">
				<Button disabled>TEXT</Button>
			</div>
			<div className="flex flex-row gap-3">
				<Button component={Link} to="/home" variant="elevated">
					Home
				</Button>
				<Button variant="elevated" disabled>
					ELEVATED
				</Button>
			</div>
			<div className="flex flex-row gap-3">
				<Button variant="filled">FILLED</Button>
				<Button variant="filled" disabled>
					FILLED
				</Button>
			</div>
			<div className="flex flex-row gap-3">
				<Button variant="tonal">CONTAINED</Button>
				<Button variant="tonal" disabled>
					CONTAINED
				</Button>
			</div>
			<div className="flex flex-row gap-3">
				<Button variant="outlined">OUTLINED</Button>
				<Button disabled variant="outlined">
					OUTLINED
				</Button>
			</div>
		</div>
	);
}
