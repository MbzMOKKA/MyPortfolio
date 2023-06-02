//Imports
import {
    ICONS,
    logoLinkedIn,
    logoTwitter,
    logoGmail,
    logoPhone,
} from "../../assets/images";
import { STRING_IDS } from "../locales/stringIds";

//Types
export type ContactMethod = {
    logo: string;
    nameId: string;
    descriptionId: string;
    contactInfo: string;
    ctaType: ContactActionType;
    ctaUrl: string;
};

type ContactActionType = {
    nameId: string;
    icon: string;
};

const contactActionTypes: Record<string, ContactActionType> = {
    call: {
        nameId: STRING_IDS.call,
        icon: ICONS.call,
    },
    email: {
        nameId: STRING_IDS.email,
        icon: ICONS.email,
    },
    link: {
        nameId: STRING_IDS.openLink,
        icon: ICONS.link,
    },
};

//Exports
const contactMethods: ContactMethod[] = [
    //Phone
    {
        logo: logoPhone,
        nameId: STRING_IDS.phone,
        descriptionId: STRING_IDS.placeholder,
        contactInfo: "06.38.93.16.19",
        ctaType: contactActionTypes.call,
        ctaUrl: "tel:0638931619",
    },
    //Mail
    {
        logo: logoGmail,
        nameId: STRING_IDS.email,
        descriptionId: STRING_IDS.placeholder,
        contactInfo: "dylanpean.pro@gmail.com",
        ctaType: contactActionTypes.email,
        ctaUrl: "mailto:dylanpean.pro@gmail.com",
    },
    //LinkedIn
    {
        logo: logoLinkedIn,
        nameId: STRING_IDS.linkedin,
        descriptionId: STRING_IDS.placeholder,
        contactInfo: "Dylan Pean",
        ctaType: contactActionTypes.link,
        ctaUrl: "https://www.linkedin.com/in/dylanpean",
    },
    //Twitter
    {
        logo: logoTwitter,
        nameId: STRING_IDS.twitter,
        descriptionId: STRING_IDS.placeholder,
        contactInfo: "@MbzMokka",
        ctaType: contactActionTypes.link,
        ctaUrl: "https://twitter.com/MbzMokka",
    },
];

export default contactMethods;
