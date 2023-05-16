/** @format */

import clsx from "clsx";
import React, {
	FunctionComponent,
	isValidElement,
	useRef,
	useState,
} from "react";
import { type ClassOptions, CreateClasses } from "~/StyleHelpers";
import { BubbleStyles } from "../Accents/Bubble";
import { useTab } from "~/Hooks/useTab";

export interface LinkButtonProps
	extends React.HtmlHTMLAttributes<HTMLAnchorElement> {
	component?: FunctionComponent;
	active?: boolean;
	clsxs?: ClassOptions;
	disabled?: boolean;
	variant?: ButtonVariants;
}

export const BaseButtonClsxs: ClassOptions = {
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

export const TextButtonClsxs: ClassOptions = {
	...BaseButtonClsxs,
	text: "text-primary-light dark:text-primary-dark",
	disabled:
		"disabled:text-on-surface-light disabled:dark:text-on-surface-dark disabled:opacity-disabled",
	hover: "before:enabled:hover:bg-primary-light before:dark:enabled:hover:bg-primary-dark before:enabled:hover:opacity-hover",
	focus_visible:
		"focus-visible:outline-none before:focus-visible:bg-primary-light before:dark:focus-visible:bg-primary-dark before:focus-visible:opacity-focus",
	active: "before:active:scale-x-100 before:enabled:active:bg-primary-light before:enabled:dark:active:bg-primary-dark before:enabled:active:opacity-active",
};
export const TextButtonBubbleClsxs: ClassOptions = {
	focus_visible:
		"after:focus-visible:bg-primary-light after:dark:focus-visible:bg-primary-dark after:focus-visible:opacity-focus",
};

export const ElevatedButtonClsxs: ClassOptions = {
	...BaseButtonClsxs,
	shadow: "shadow",
	bg: "bg-surface-light dark:bg-surface-dark",
	text: "text-primary-light dark:text-primary-dark",
	disabled:
		"disabled:bg-transparent before:disabled:bg-primary-light disabled:shadow-sm before:dark:disabled:bg-primary-dark disabled:text-on-surface-light dark:disabled:text-on-surface-dark disabled:opacity-disabled before:disabled:opacity-active",
	hover: "before:enabled:hover:bg-primary-light before:dark:enabled:hover:bg-primary-dark before:hover:opacity-hover before:enabled:hover:shadow-md",
	focus_visible:
		"focus-visible:outline-none before:focus-visible:bg-primary-light before:dark:focus-visible:bg-primary-dark before:focus-visible:opacity-focus",
	active: "before:active:scale-x-100 before:enabled:active:bg-primary-light before:enabled:dark:active:bg-primary-dark before:enabled:active:opacity-active before:enabled:active:shadow",
};
export const ElevatedButtonBubbleClsxs: ClassOptions = {
	focus_visible:
		"after:focus-visible:bg-primary-light after:dark:focus-visible:bg-primary-dark after:focus-visible:opacity-focus",
};

export const FilledButtonClsxs: ClassOptions = {
	...BaseButtonClsxs,
	shadow: "shadow-sm",
	bg: "bg-primary-light dark:bg-primary-dark",
	text: "text-on-primary-light dark:text-on-primary-dark",
	disabled:
		"disabled:bg-transparent before:disabled:bg-on-surface-light before:dark:disabled:bg-on-surface-dark disabled:text-on-surface-light dark:disabled:text-on-surface-dark disabled:opacity-disabled before:disabled:opacity-active",
	hover: "before:enabled:hover:bg-on-primary-light before:dark:enabled:hover:bg-on-primary-dark before:enabled:hover:shadow before:enabled:hover:opacity-hover",
	focus_visible:
		"focus-visible:outline-none before:focus-visible:bg-on-primary-light before:dark:focus-visible:bg-on-primary-dark before:focus-visible:shadow-sm before:focus-visible:opacity-focus",
	active: "before:active:scale-x-100 before:enabled:active:bg-on-primary-light before:dark:enabled:active:bg-on-primary-dark before:enabled:active:shadow-sm before:enabled:active:opacity-active",
};
export const FilledButtonBubbleClsxs: ClassOptions = {
	focus_visible:
		"after:focus-visible:bg-on-primary-light after:dark:focus-visible:bg-on-primary-dark after:focus-visible:opacity-focus",
};

export const TonalButtonClsxs: ClassOptions = {
	...BaseButtonClsxs,
	shadow: "shadow-sm",
	bg: "bg-secondary-container-light dark:bg-secondary-container-dark",
	text: "text-on-secondary-container-light dark:text-on-secondary-container-dark",
	disabled:
		"disabled:bg-transparent before:disabled:bg-on-surface-light before:dark:disabled:bg-on-surface-dark disabled:text-on-surface-light dark:disabled:text-on-surface-dark disabled:opacity-disabled before:disabled:opacity-active",
	hover: "before:enabled:hover:bg-on-secondary-container-light before:dark:enabled:hover:bg-on-secondary-container-dark before:enabled:hover:shadow before:enabled:hover:opacity-hover",
	focus_visible:
		"focus-visible:outline-none before:focus-visible:bg-on-secondary-container-light before:dark:focus-visible:bg-on-secondary-container-dark before:focus-visible:shadow-sm before:focus-visible:opacity-focus",
	active: "before:active:scale-x-100 before:enabled:active:bg-on-secondary-container-light before:dark:enabled:active:bg-on-secondary-container-dark before:enabled:active:shadow-sm before:enabled:active:opacity-active",
};
export const TonalButtonBubbleClsxs: ClassOptions = {
	focus_visible:
		"after:focus-visible:bg-on-secondary-container-light after:dark:focus-visible:bg-on-secondary-container-dark after:focus-visible:opacity-focus",
};

export const OutlinedButtonClsxs: ClassOptions = {
	...BaseButtonClsxs,
	bg: "bg-transparent",
	text: "text-primary-light dark:text-primary-dark",
	border: "border border-outline-light dark:border-outline-dark",
	hover: "before:enabled:hover:shadow-inner before: before:enabled:hover:bg-primary-light before:dark:enabled:hover:bg-primary-dark before:hover:opacity-hover",
	focus_visible:
		"focus-visible:outline-none before:focus-visible:bg-primary-light before:dark:focus-visible:bg-primary-dark before:focus-visible:opacity-focus",
	active: "before:active:scale-x-100 before:active:w-full before:enabled:active:bg-primary-light before:dark:enabled:active:bg-primary-dark before:enabled:active:opacity-active",
	disabled:
		"disabled:border-on-surface-light dark:disabled:border-on-surface-dark disabled:text-on-surface-light dark:disabled:text-on-surface-dark disabled:opacity-disabled",
};
export const OutlinedButtonBubbleClsxs: ClassOptions = {
	focus_visible:
		"after:focus-visible:bg-primary-light after:dark:focus-visible:bg-primary-dark after:focus-visible:opacity-focus",
};

export type ButtonVariants =
	| "elevated"
	| "filled"
	| "text"
	| "tonal"
	| "outlined";

const Variants: Record<
	ButtonVariants,
	{ button: ClassOptions; bubble: ClassOptions }
> = {
	elevated: {
		button: ElevatedButtonClsxs,
		bubble: ElevatedButtonBubbleClsxs,
	},
	filled: {
		button: FilledButtonClsxs,
		bubble: FilledButtonBubbleClsxs,
	},
	text: {
		button: TextButtonClsxs,
		bubble: TextButtonBubbleClsxs,
	},
	tonal: {
		button: TonalButtonClsxs,
		bubble: TonalButtonBubbleClsxs,
	},
	outlined: {
		button: OutlinedButtonClsxs,
		bubble: OutlinedButtonBubbleClsxs,
	},
};

const LinkButton = React.forwardRef(function LinkButton(
	props: LinkButtonProps,
	ref: React.ForwardedRef<HTMLAnchorElement>
) {
	const {
		component: Component,
		children,
		clsxs,
		disabled,
		onClick,
		onMouseDown,
		active,
		variant = "text",
		...rest
	} = props;
	const spanRef = useRef<HTMLSpanElement>(null);
	const thisVariant = Variants[variant];
	return Component ? (
		<Component />
	) : (
		<a
			className={clsx(
				...CreateClasses(thisVariant.button, clsxs),
				BubbleStyles(thisVariant.bubble)
			)}
			aria-disabled={disabled}
			onClick={e => {
				if (disabled) {
					e.preventDefault();
					return;
				}
				onClick && onClick(e);
			}}
			ref={ref}
			{...rest}>
			{children}
			<span
				ref={spanRef}
				className="absolute inset-0 overflow-hidden flex items-center justify-center z-0"></span>
		</a>
	);
});

export default LinkButton;
