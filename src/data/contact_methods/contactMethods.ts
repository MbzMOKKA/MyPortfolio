//Imports
import { STRING_IDS } from "../locales/stringIds";

//Types
type ContactMethod = {
    backgroundColor: string;
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
        backgroundColor: "#6F866F",
        nameId: STRING_IDS.phone,
        descriptionId: STRING_IDS.placeholder,
        contactInfo: "06.38.93.16.19",
        ctaNameId: STRING_IDS.call,
        ctaUrl: "tel:0638931619",
    },
    //Mail
    {
        backgroundColor: "#C77758",
        nameId: STRING_IDS.email,
        descriptionId: STRING_IDS.placeholder,
        contactInfo: "dylanpean.pro@gmail.com",
        ctaNameId: STRING_IDS.sendEmail,
        ctaUrl: "mailto:dylanpean.pro@gmail.com",
    },
    //LinkedIn
    {
        backgroundColor: "#405BE1",
        nameId: STRING_IDS.linkedin,
        descriptionId: STRING_IDS.placeholder,
        contactInfo: "Dylan Pean",
        ctaNameId: STRING_IDS.openLink,
        ctaUrl: "https://www.linkedin.com/in/dylanpean",
    },
    //Twitter
    {
        backgroundColor: "#68D9E8",
        nameId: STRING_IDS.twitter,
        descriptionId: STRING_IDS.placeholder,
        contactInfo: "@MbzMokka",
        ctaNameId: STRING_IDS.openLink,
        ctaUrl: "https://twitter.com/MbzMokka",
    },
];

export default contactMethods;
