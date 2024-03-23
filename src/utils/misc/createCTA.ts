//Imports
import { ICONS } from "../../assets/images";

//Exports
export function createCheckWebsiteCTA(url: string) {
    return {
        name: `Voir le site`,
        icon: ICONS.link,
        action: url,
    };
}

export function createViewRepoCTA(url: string) {
    return {
        name: `Voir le dépôt GitHub`,
        icon: ICONS.link,
        action: url,
    };
}
