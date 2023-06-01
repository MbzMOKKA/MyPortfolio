//Imports
import { STRING_IDS } from "../locales/stringIds";

//Types
type ContactMethod = {
    nameId: string;
    descriptionId: string;
    contactInfo: string;
    ctaNameId: string;
    ctaUrl: string;
};

//Exports
const contactMethods: ContactMethod[] = [
    //Phone
    {
        nameId: STRING_IDS.phone,
        descriptionId: STRING_IDS.placeholder,
        contactInfo: "06.38.93.16.19",
        ctaNameId: STRING_IDS.call,
        ctaUrl: "tel:0638931619",
    },
    //Mail
    {
        nameId: STRING_IDS.email,
        descriptionId: STRING_IDS.placeholder,
        contactInfo: "dylanpean.pro@gmail.com",
        ctaNameId: STRING_IDS.sendEmail,
        ctaUrl: "mailto:dylanpean.pro@gmail.com",
    },
    //LinkedIn
    {
        nameId: STRING_IDS.linkedin,
        descriptionId: STRING_IDS.placeholder,
        contactInfo: "Dylan Pean",
        ctaNameId: STRING_IDS.openLink,
        ctaUrl: "https://www.linkedin.com/in/dylanpean",
    },
    //Twitter
    {
        nameId: STRING_IDS.twitter,
        descriptionId: STRING_IDS.placeholder,
        contactInfo: "@MbzMokka",
        ctaNameId: STRING_IDS.openLink,
        ctaUrl: "https://twitter.com/MbzMokka",
    },
];

export default contactMethods;
