/** @format */

const Bubble = ({ width, height }: { width: number; height: number }) => {
    return (
        <span
            style={{ width, height }}
            className='opacity-30 animate-pulsing rounded-full bg-blue-400'></span>
    );
};

export default Bubble;
