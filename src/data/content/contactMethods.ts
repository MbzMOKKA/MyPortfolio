//Imports
import { ICONS, LOGOS } from "../../assets/images";
import { Cta } from "../miscTypes";
import { STRINGS } from "./strings";

//Types
export type ContactMethod = {
    logo: string;
    nameId: string;
    contactInfo: string;
    cta: Cta;
};

//Exports
const contactMethods: ContactMethod[] = [
    //Phone
    {
        logo: LOGOS.phone,
        nameId: STRINGS.phone,
        contactInfo: "06.38.93.16.19",
        cta: {
            nameId: STRINGS.call,
            icon: ICONS.call,
            action: "tel:+33638931619",
        },
    },
    //Mail
    {
        logo: LOGOS.gmail,
        nameId: STRINGS.email,
        contactInfo: "dylanpean.pro@gmail.com",
        cta: {
            nameId: STRINGS.sendEmail,
            icon: ICONS.email,
            action: "mailto:dylanpean.pro@gmail.com",
        },
    },
    //LinkedIn
    {
        logo: LOGOS.linkedIn,
        nameId: STRINGS.linkedin,
        contactInfo: "Dylan Pean",
        cta: {
            nameId: STRINGS.openLink,
            icon: ICONS.link,
            action: "https://www.linkedin.com/in/dylanpean",
        },
    },
    //Twitter
    /*{
        logo: LOGOS.twitter,
        nameId: STRINGS.twitter,
        contactInfo: "@MbzMokka",
        cta: {
            nameId: STRINGS.openLink,
            icon: ICONS.link,
            action: "https://twitter.com/MbzMokka",
        },
    },*/
];

export default contactMethods;
