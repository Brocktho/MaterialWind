/** @format */

const Bubble = ({ width, height }: { width: number; height: number }) => {
	return (
		<span
			style={{ width, height }}
			className="animate-pulsing rounded-full bg-light-focus-primary dark:bg-dark-focus-primary"></span>
	);
};

export default Bubble;
