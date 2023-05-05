/** @format */

import type { V2_MetaFunction } from "@remix-run/node";
import Button from "~/components/Inputs/Button";

export const meta: V2_MetaFunction = () => {
	return [{ title: "New Remix App" }];
};

export default function Index() {
	return (
		<div className="w-full min-h-screen h-full flex flex-row items-center justify-center gap-3">
			<Button>TEXT</Button>
			<Button variant="contained">CONTAINED</Button>
			<Button variant="outlined">OUTLINED</Button>
		</div>
	);
}
