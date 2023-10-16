import Lenis from "@studio-freight/lenis";

const smooth = () => {
    const smooth = new Lenis({
        duration: 1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time) => {
        smooth.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
};

export default smooth;