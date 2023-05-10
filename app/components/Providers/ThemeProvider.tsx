/** @format */

import React from "react";

export type MaterialWindThemeContext = "";

const MaterialWindContext = React.createContext<
	MaterialWindThemeContext | undefined
>(undefined);

/**
 * @description
 *
 * @external documentation for helping with color palette choices:
 *
 * [Material UI's Docs on Color Palette](https://m3.material.io/styles/color/the-color-system/key-colors-tones)
 *
 * [Material Theme Builder](https://m3.material.io/theme-builder#/custom)
 *
 * [Color Picker](https://coolors.co/)
 *
 * @returns
 */
export const MaterialWindThemeProvider = () => {
	return (
		<MaterialWindContext.Provider value=""></MaterialWindContext.Provider>
	);
};
