/** @format */

import clsx from "clsx";
import React, { useRef, useState } from "react";
import {
	type ClassOptions,
	CreateClasses,
	SafeRefScaled,
} from "~/StyleHelpers";
import Bubble from "../Accents/Bubble";

export interface ButtonProps
	extends React.HtmlHTMLAttributes<HTMLButtonElement> {
	clsxs?: ClassOptions;
	disabled?: boolean;
	variant?: ButtonVariants;
}

const BaseButtonClsxs: ClassOptions = {
	h: "h-10",
	w: "w-auto",
	p: "px-3 py-2",
	rounded: "rounded-md",
	transition: "transition",
	duration: "duration-200",
	focus: "focus:outline-none",
	align: "items-center justify-center",
	display: "flex",
	position: "relative",
	z: "z-10",
};

const DefaultButtonClsxs: ClassOptions = {
	...BaseButtonClsxs,
	text: "text-blue-600",
	bg: "hover:bg-blue-600/5",
};

const ContainedButtonClsxs: ClassOptions = {
	...BaseButtonClsxs,
	bg: "bg-blue-600 hover:bg-blue-700",
	text: "text-slate-100",
	shadow: "shadow-sm hover:shadow-xl",
};

const OutlinedButtonClsxs: ClassOptions = {
	...BaseButtonClsxs,
	bg: "bg-transparent ",
	p: "px-6",
	text: "text-light-primary dark:text-dark-primary",
	border: "border border-light-outline dark:border-dark-outline",
	hover: "enabled:hover:shadow-inner enabled:hover:bg-light-hover-primary dark:enabled:hover:bg-dark-primary",
	focus: "focus:outline-none enabled:focus:bg-light-focus-primary dark:enabled:focus:bg-dark-focus-primary",
	active: "enabled:active:bg-light-active-primary dark:enabled:active:bg-dark-active-primary",
	disabled:
		"disabled:border-light-press-on-surface dark:disabled:border-dark-press-on-surface disabled:text-light-disabled-on-surface dark:disabled:text-dark-disabled-on-surface",
};

export type ButtonVariants = "default" | "contained" | "outlined";

const Variants: Record<ButtonVariants, ClassOptions> = {
	default: DefaultButtonClsxs,
	contained: ContainedButtonClsxs,
	outlined: OutlinedButtonClsxs,
};

const Button = React.forwardRef(function Button(
	props: ButtonProps,
	ref: React.ForwardedRef<HTMLButtonElement>
) {
	const { children, clsxs, disabled, onClick, variant, ...rest } = props;
	const spanRef = useRef<HTMLSpanElement>(null);
	const [focused, setFocused] = useState(false);
	const { bg, ...simple_clsxs } = clsxs ?? {};
	const thisVariant = Variants[variant || "default"];
	return (
		<button
			className={clsx(...CreateClasses(simple_clsxs, thisVariant), [
				clsxs?.bg,
				thisVariant.bg,
			])}
			aria-disabled={disabled}
			disabled={disabled}
			onClick={e => {
				if (disabled) {
					e.preventDefault();
					return;
				}
				onClick && onClick(e);
			}}
			ref={ref}
			onFocus={() => setFocused(true)}
			onBlur={() => setFocused(false)}
			{...rest}>
			{children}
			<span
				ref={spanRef}
				className="absolute inset-0 overflow-hidden flex items-center justify-center z-0">
				{focused && (
					<Bubble
						width={SafeRefScaled(spanRef.current?.offsetWidth)}
						height={SafeRefScaled(spanRef.current?.offsetWidth)}
					/>
				)}
			</span>
		</button>
	);
});

export default Button;
