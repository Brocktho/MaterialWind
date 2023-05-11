/** @format */

import fs from "node:fs";
import hexToHsl from "hex-to-hsl";

const filePath = process.argv[2];
const outputPath = process.argv[3] || "./app/tokensReplaced.css";
const tailwindOutPath = process.argv[4] || "./app/tailwindConfigObject.txt";

const MaterialTokensToHsl = (filePath: string) => {
	let fileContent = fs.readFileSync(filePath, "utf-8");
	const hexRegex = /#[0-9a-fA-F]{6}/g;
	const hexColors: Array<string> = fileContent.match(hexRegex) || [];
	const hslColors = hexColors.reduce(
		(prev: Record<string, [number, number, number]>, next) => {
			prev[next] = hexToHsl(next);
			return prev;
		},
		{}
	);
	Object.entries(hslColors).forEach(([hex, hsl]) => {
		const hexRegex = new RegExp(hex, "g");
		fileContent = fileContent.replace(
			hexRegex,
			`${hsl[0]}deg ${hsl[1]}% ${hsl[2]}%`
		);
	});
	//let tailwindLayer = `@layer base { \\n`;
	fs.writeFileSync(outputPath, `${fileContent}`);
};

const MaterialHslToTailwindColors = (filePath: string) => {
	const fileContent = fs.readFileSync(filePath, "utf-8");
	const hslRegex = /--(\w+-)+\w+:\s*\w+\s*\d+%\s*\d+%;/g;
	const hslMatches: Array<string> = fileContent.match(hslRegex) || [];
	const ordered = hslMatches.reduce((prev: Record<string, string>, next) => {
		const [key] = next.split(":");
		prev[key] = `'hsl(var(${key}) / 1)'`;
		return prev;
	}, {});
	let tailwindFileString = `theme: {\ncolors: {\n`;
	Object.entries(ordered).forEach(([key, value]) => {
		const replacedMdRef = key.replace("--md-ref-palette-", "");
		const replacedMdSys = replacedMdRef.replace("--md-sys-color-", "");
		tailwindFileString += `"${replacedMdSys}": ${value},\n`;
	});
	tailwindFileString += `},\n}`;
	fs.writeFileSync(tailwindOutPath, tailwindFileString);
};

if (filePath) {
	MaterialTokensToHsl(filePath);
	MaterialHslToTailwindColors(outputPath);
}
