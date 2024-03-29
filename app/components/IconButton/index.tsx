/** @format */

import type { ReactNode } from "react";
import type {
	DefaultOverridableProps,
	OverridableProps,
} from "../utils/OverridableComponents";
import type { ClassOptions } from "~/StyleHelpers";

export interface DefaultIconButtonProps<D extends React.ElementType = "button">
	extends DefaultOverridableProps<D> {
	children?: ReactNode;
	clsxs?: ClassOptions;
	variant?: IconButtonVariants;
}

const IconButtonBaseClsx: ClassOptions = {
	w: "w-10",
	h: "h-10",
	rounded: "rounded-full",
};

export type IconButtonVariants =
	| "filled"
	| "filled-tonal"
	| "outlined"
	| "standard";

export type IconButtonProps<D extends React.ElementType = "button"> =
	OverridableProps<D, DefaultIconButtonProps<D>>;
