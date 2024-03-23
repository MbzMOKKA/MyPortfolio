//Imports
import { ICONS, LOGOS } from "../../assets/images";
import { Cta } from "../miscTypes";

//Types
export type ContactMethod = {
    logo: string;
    name: string;
    contactInfo: string;
    cta: Cta;
};

//Exports
const contactMethods: ContactMethod[] = [
    //Phone
    {
        logo: LOGOS.phone,
        name: `Téléphone`,
        contactInfo: "06.38.93.16.19",
        cta: {
            name: `Appeler`,
            icon: ICONS.call,
            action: "tel:+33638931619",
        },
    },
    //Mail
    {
        logo: LOGOS.gmail,
        name: `E-mail`,
        contactInfo: "dylanpean.pro@gmail.com",
        cta: {
            name: `Écrire un mail`,
            icon: ICONS.email,
            action: "mailto:dylanpean.pro@gmail.com",
        },
    },
    //LinkedIn
    {
        logo: LOGOS.linkedIn,
        name: `LinkedIn`,
        contactInfo: "Dylan (Pierrot) Pean",
        cta: {
            name: `Ouvrir le lien`,
            icon: ICONS.link,
            action: "https://www.linkedin.com/in/dylanpean",
        },
    },
    //Twitter
    /*{
        logo: LOGOS.twitter,
        name: `X (Twitter)`,
        contactInfo: "@MbzMokka",
        cta: {
            name: `Ouvrir le lien`,
            icon: ICONS.link,
            action: "https://twitter.com/MbzMokka",
        },
    },*/
];

export default contactMethods;
