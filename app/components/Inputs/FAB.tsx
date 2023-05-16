/** @format */

import clsx from "clsx";
import React from "react";
import { type ClassOptions, CreateClasses } from "~/StyleHelpers";
import { BubbleStyles } from "../Accents/Bubble";

export interface DefaultFABProps<D extends React.ElementType = "button">
	extends React.HtmlHTMLAttributes<HTMLButtonElement> {
	component?: D;
	active?: boolean;
	clsxs?: ClassOptions;
	variant?: FABVariants;
	children?: React.ReactNode;
}
export type FABProps<D extends React.ElementType = "button"> =
	DefaultFABProps<D> & React.ComponentPropsWithoutRef<D>;

export type FABVariants = "small" | "large" | "default";

const FABBaseClsx: ClassOptions = {
	shadow: "shadow-md",
	rounded: "rounded-xl",
	display: "flex",
	position: "relative",
	overflow: "overflow-hidden",
	align: "items-center justify-center",
	before: "before:w-full before:h-full before:rounded-xl before:absolute",
	bg: "bg-primary-container-light dark:bg-primary-container-dark",
	text: "text-on-primary-container-light dark:text-on-primary-container-dark",
	hover: "hover:shadow-lg before:hover:opacity-hover before:hover:bg-on-primary-container-light before:dark:hover:bg-on-primary-container-dark",
	focus_visible:
		"focus-visible:outline-none before:focus-visible:shadow-sm before:focus-visible:opacity-focus before:focus-visible:bg-on-primary-container-light before:dark:focus-visible:bg-on-primary-container-dark",
	active: "before:active:opacity-active before:active:bg-on-primary-container-light before:dark:active:bg-on-primary-container-dark",
};
const FABBubbleClsx: ClassOptions = {
	focus_visible:
		"after:focus-visible:bg-on-primary-container-light after:dark:focus-visible:bg-on-primary-container-dark after:focus-visible:opacity-focus",
};

const FABClsx: ClassOptions = {
	...FABBaseClsx,
	w: "w-14",
	h: "h-14",
};

const SmallFABClsx: ClassOptions = {
	...FABBaseClsx,
	w: "w-10",
	h: "h-10",
};

const LargeFABClsx: ClassOptions = {
	...FABBaseClsx,
	w: "w-24",
	h: "h-24",
};

const FABVariantClsx: Record<FABVariants, ClassOptions> = {
	default: FABClsx,
	small: SmallFABClsx,
	large: LargeFABClsx,
};

const FAB = React.forwardRef(function FAB<
	D extends React.ElementType = "button"
>(props: FABProps<D>, ref: React.Ref<D>) {
	const {
		component = "button",
		clsxs,
		className,
		variant = "default",
		children,
		...rest
	} = props;
	const thisVariant = FABVariantClsx[variant];
	const finalProps = {
		...rest,
		className: clsx(
			...CreateClasses(thisVariant, clsxs),
			BubbleStyles(FABBubbleClsx),
			className
		),
		children: (
			<>
				<span className="w-6 h-6 overflow-hidden">{children}</span>
			</>
		),
	};
	return React.createElement(component, finalProps);
});

export default FAB;
