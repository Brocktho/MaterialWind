/** @format */

import { useRef } from "react";
import type { ClassOptions } from "~/StyleHelpers";
import { Tooltip } from "@mui/material";

export interface BadgeProps extends React.HtmlHTMLAttributes<HTMLLabelElement> {
	clsxs?: ClassOptions;
}

const Badge = ({ children }: BadgeProps) => {
	const ref = useRef();
	return <label>{children}</label>;
};

export default Badge;
