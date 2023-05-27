/** @format */

import Button from "~/components/Button";
import FAB from "~/components/FAB";
import {
	PencilIcon,
	AcademicCapIcon,
	TrashIcon,
} from "@heroicons/react/24/solid";
import ExtendedFAB from "~/components/ExtendedFAB";
import { Link } from "@remix-run/react";
import { useRef } from "react";

export default function ButtonsRoute() {
	const linkRef = useRef(null);
	return (
		<div className="w-full min-h-screen h-full flex flex-col items-center justify-center gap-6">
			<div className="flex flex-row gap-3">
				<Button
					component={Link}
					ref={linkRef}
					to="/home"
					aria-label="Link To Home"
					role="link">
					TEXT
				</Button>
				<Button clsxs={{ active: "bg-red-500" }}>TEXT</Button>
				<Button disabled>TEXT</Button>
			</div>
			<div className="flex flex-row gap-3">
				<Button variant="elevated">Home</Button>
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
			<div className="flex flex-row gap-3">
				<FAB>
					<PencilIcon />
				</FAB>
				<FAB>
					<AcademicCapIcon />
				</FAB>
			</div>
			<div className="flex flex-row gap-3">
				<ExtendedFAB
					role="link"
					component={Link}
					to="/"
					icon={<TrashIcon />}>
					Delete
				</ExtendedFAB>
				<ExtendedFAB icon={<PencilIcon />}>Edit</ExtendedFAB>
				<ExtendedFAB icon={<AcademicCapIcon />}>Learn</ExtendedFAB>
			</div>
		</div>
	);
}
