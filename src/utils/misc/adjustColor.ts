export default function adjustColor(hex: string, brightnessFactor: number) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    r = Math.floor(r * brightnessFactor);
    g = Math.floor(g * brightnessFactor);
    b = Math.floor(b * brightnessFactor);

    r = Math.min(255, r);
    g = Math.min(255, g);
    b = Math.min(255, b);

    const finalR = r.toString(16).padStart(2, "0");
    const finalG = g.toString(16).padStart(2, "0");
    const finalB = b.toString(16).padStart(2, "0");

    return `#${finalR}${finalG}${finalB}`;
}
