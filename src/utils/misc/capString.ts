export default function capString(str: string, maxLetters: number | undefined) {
    if (maxLetters === undefined) {
        return str;
    }
    if (str.length <= maxLetters) {
        return str;
    }
    return str.slice(0, maxLetters - 1) + ".";
}
