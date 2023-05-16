/** @format */

import Button from "~/components/Inputs/Button";
import FAB from "~/components/Inputs/FAB";
import { PencilIcon, AcademicCapIcon } from "@heroicons/react/24/solid";

export default function ButtonsRoute() {
	return (
		<div className="w-full min-h-screen h-full flex flex-col items-center justify-center gap-6">
			<div className="flex flex-row gap-3">
				<Button disabled component={"p"}>
					TEXT
				</Button>
				<Button>TEXT</Button>
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
		</div>
	);
}
