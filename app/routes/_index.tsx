/** @format */

import { Tooltip, Typography } from "@mui/material";
import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Badge from "~/components/Accents/Badge";
import Button from "~/components/Inputs/Button";

export const meta: V2_MetaFunction = () => {
	return [{ title: "New Remix App" }];
};

export default function Index() {
	return (
		<div className="w-full min-h-screen h-full flex flex-col items-center justify-center gap-6">
			<div className="flex flex-row gap-3">
				<Button component={Link} to="">
					TEXT
				</Button>
				<Button disabled>TEXT</Button>
			</div>
			<div className="flex flex-row gap-3">
				<Button variant="elevated">ELEVATED</Button>
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
