/** @format */

import clsx from "clsx";
import React, { useRef, useState } from "react";
import {
	type ClassOptions,
	CreateClasses,
	SafeRefScaled,
} from "~/StyleHelpers";
import { BubbleStyles } from "../Accents/Bubble";
import { useTab } from "~/Hooks/useTab";
import { Ripple } from "../Accents/Ripple";

export interface ButtonProps
	extends React.HtmlHTMLAttributes<HTMLButtonElement> {
	clsxs?: ClassOptions;
	disabled?: boolean;
	variant?: ButtonVariants;
}

const BaseButtonClsxs: ClassOptions = {
	h: "h-10",
	w: "w-auto",
	p: "px-6",
	before: "before:absolute before:w-full before:h-full before:rounded-full",
	rounded: "rounded-full",
	transition: "transition motion-reduce:transition-none",
	duration: "duration-200",
	focus_visible: "focus-visible:outline-none",
	align: "items-center justify-center",
	display: "flex",
	position: "relative",
};

const TextButtonClsxs: ClassOptions = {
	...BaseButtonClsxs,
	text: "text-light-primary dark:text-dark-primary",
	disabled:
		"disabled:text-light-disabled-on-surface dark:disabled:text-dark-disabled-on-surface",
	hover: "before:enabled:hover:bg-light-hover-primary before:dark:enabled:hover:bg-dark-hover-primary",
	focus_visible:
		"focus-visible:outline-none before:focus-visible:bg-light-focus-primary before:dark:focus-visible:bg-dark-focus-primary",
	active: "before:active:bg-light-active-primary before:dark:active:bg-dark-active-primary",
};

const ElevatedButtonClsxs: ClassOptions = {
	...BaseButtonClsxs,
	shadow: "shadow",
	bg: "bg-light-surface-low dark:bg-dark-surface-low",
	text: "text-light-primary dark:text-dark-primary",
	disabled:
		"disabled:bg-light-focus-primary disabled:shadow-sm dark:disabled:bg-dark-focus-primary disabled:text-light-disabled-on-surface dark:disabled:text-dark-disabled-on-surface",
	hover: "before:enabled:hover:bg-light-hover-primary before:dark:enabled:hover:bg-dark-hover-primary before:enabled:hover:shadow-md",
	focus_visible:
		"focus-visible:outline-none before:focus-visible:bg-light-focus-primary before:dark:focus-visible:bg-dark-focus-primary",
	active: "before:active:bg-light-active-primary before:dark:active:bg-dark-active-primary before:active:shadow",
};

const FilledButtonClsxs: ClassOptions = {
	...BaseButtonClsxs,
	shadow: "shadow-sm",
	bg: "bg-light-primary dark:bg-dark-primary",
	text: "text-light-on-primary dark:text-dark-on-primary",
	disabled:
		"disabled:bg-light-focus-on-surface dark:disabled:bg-dark-focus-on-surface disabled:text-light-disabled-on-surface dark:disabled:text-dark-disabled-on-surface",
	hover: "before:enabled:hover:bg-light-hover-on-primary before:dark:enabled:hover:bg-dark-hover-on-primary before:enabled:hover:shadow",
	focus_visible:
		"focus-visible:outline-none before:focus-visible:bg-light-focus-on-primary before:dark:focus-visible:bg-dark-focus-on-primary before:focus-visible:shadow-sm",
	active: "before:active:bg-light-active-on-primary before:dark:active:bg-dark-active-on-primary before:active:shadow-sm",
};

const TonalButtonClsxs: ClassOptions = {
	...BaseButtonClsxs,
	shadow: "shadow-sm",
	p: "px-6",
	bg: "bg-light-secondary-container dark:bg-dark-secondary-container",
	text: "text-light-on-secondary-container dark:text-dark-on-secondary-container",
	disabled:
		"disabled:bg-light-focus-on-surface dark:disabled:bg-dark-focus-on-surface disabled:text-light-disabled-on-surface dark:disabled:text-dark-disabled-on-surface",
	hover: "before:enabled:hover:bg-light-hover-on-secondary-container before:dark:enabled:hover:bg-dark-hover-on-secondary-container before:enabled:hover:shadow",
	focus_visible:
		"focus-visible:outline-none before:focus-visible:bg-light-focus-on-secondary-container before:dark:focus-visible:bg-dark-focus-on-secondary-container before:focus-visible:shadow-sm",
	active: "before:active:bg-light-active-on-secondary-container before:dark:active:bg-dark-active-on-secondary-container before:active:shadow-sm",
};

const OutlinedButtonClsxs: ClassOptions = {
	...BaseButtonClsxs,
	bg: "bg-transparent",
	text: "text-light-primary dark:text-dark-primary",
	border: "border border-light-outline dark:border-dark-outline",
	hover: "before:enabled:hover:shadow-inner before:enabled:hover:bg-light-hover-primary before:dark:enabled:hover:bg-dark-hover-primary",
	focus_visible:
		"focus-visible:outline-none before:focus-visible:bg-light-focus-primary before:dark:focus-visible:bg-dark-focus-primary",
	active: "before:active:bg-light-active-primary before:dark:active:bg-dark-active-primary",
	disabled:
		"disabled:border-light-focus-on-surface dark:disabled:border-dark-focus-on-surface disabled:text-light-disabled-on-surface dark:disabled:text-dark-disabled-on-surface",
};

export type ButtonVariants =
	| "elevated"
	| "filled"
	| "text"
	| "tonal"
	| "outlined";

const Variants: Record<ButtonVariants, ClassOptions> = {
	elevated: ElevatedButtonClsxs,
	filled: FilledButtonClsxs,
	text: TextButtonClsxs,
	tonal: TonalButtonClsxs,
	outlined: OutlinedButtonClsxs,
};

const Button = React.forwardRef(function Button(
	props: ButtonProps,
	ref: React.ForwardedRef<HTMLButtonElement>
) {
	const {
		children,
		clsxs,
		disabled,
		onClick,
		onMouseDown,
		variant,
		...rest
	} = props;
	const spanRef = useRef<HTMLSpanElement>(null);
	let timeout: NodeJS.Timeout;
	useTab(() => {
		setCannotFocus(false);
		clearTimeout(timeout);
	});
	const [focused, setFocused] = useState(false);
	const [cannotFocus, setCannotFocus] = useState(false);
	const thisVariant = Variants[variant || "text"];
	return (
		<button
			className={clsx(
				...CreateClasses(thisVariant, clsxs),
				BubbleStyles()
			)}
			aria-disabled={disabled}
			disabled={disabled}
			onClick={e => {
				if (disabled) {
					e.preventDefault();
					return;
				}
				onClick && onClick(e);
			}}
			onMouseDown={e => {
				if (disabled) {
					e.preventDefault();
				}
				onMouseDown && onMouseDown(e);
				setCannotFocus(true);
				setFocused(false);
				timeout = setTimeout(() => {
					setCannotFocus(false);
				}, 25);
			}}
			ref={ref}
			onFocus={() => {
				if (cannotFocus) return;
				setFocused(true);
			}}
			onBlur={() => setFocused(false)}
			{...rest}>
			{children}
			<span
				ref={spanRef}
				className="absolute inset-0 overflow-hidden flex items-center justify-center z-0"></span>
		</button>
	);
});

export default Button;
