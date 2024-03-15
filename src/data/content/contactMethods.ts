//Imports
import { ICONS, LOGOS } from "../../assets/images";
import { STRING_IDS } from "../locales/stringIds";
import { Cta } from "../miscTypes";

//Types
export type ContactMethod = {
    logo: string;
    nameId: string;
    descriptionId: string;
    contactInfo: string;
    cta: Cta;
};

//Exports
const contactMethods: ContactMethod[] = [
    //Phone
    {
        logo: LOGOS.phone,
        nameId: STRING_IDS.phone,
        descriptionId: STRING_IDS.placeholder,
        contactInfo: "06.38.93.16.19",
        cta: {
            nameId: STRING_IDS.call,
            icon: ICONS.call,
            action: "tel:+33638931619",
        },
    },
    //Mail
    {
        logo: LOGOS.gmail,
        nameId: STRING_IDS.email,
        descriptionId: STRING_IDS.placeholder,
        contactInfo: "dylanpean.pro@gmail.com",
        cta: {
            nameId: STRING_IDS.sendEmail,
            icon: ICONS.email,
            action: "mailto:dylanpean.pro@gmail.com",
        },
    },
    //LinkedIn
    {
        logo: LOGOS.linkedIn,
        nameId: STRING_IDS.linkedin,
        descriptionId: STRING_IDS.placeholder,
        contactInfo: "Dylan Pean",
        cta: {
            nameId: STRING_IDS.openLink,
            icon: ICONS.link,
            action: "https://www.linkedin.com/in/dylanpean",
        },
    },
    //Twitter
    /*{
        logo: LOGOS.twitter,
        nameId: STRING_IDS.twitter,
        descriptionId: STRING_IDS.placeholder,
        contactInfo: "@MbzMokka",
        cta: {
            nameId: STRING_IDS.openLink,
            icon: ICONS.link,
            action: "https://twitter.com/MbzMokka",
        },
    },*/
];

export default contactMethods;
