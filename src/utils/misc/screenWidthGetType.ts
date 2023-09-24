import { SCREEN_TYPES } from "../../redux_toolkit/miscSlice";
import { breakpoints } from "../style";

export default function screenWidthGetType(width: number): SCREEN_TYPES {
    if (width >= breakpoints.raw.desktopMinWidth) {
        return SCREEN_TYPES.desktop;
    }
    if (width >= breakpoints.raw.laptopMinWidth) {
        return SCREEN_TYPES.laptop;
    }
    if (width >= breakpoints.raw.tabletMinWidth) {
        return SCREEN_TYPES.tablet;
    }
    return SCREEN_TYPES.mobile;
}
