import { Skill } from "../../data/content/skills";
import { Work } from "../../data/content/works";
import { SHOWCASE_TYPES } from "../../data/miscTypes";

//Exports
export function isWork(showcase: Work | Skill): showcase is Work {
    return showcase.type === SHOWCASE_TYPES.webSite;
}
