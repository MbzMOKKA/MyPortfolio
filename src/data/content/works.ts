//Imports
import { THUMBNAILS } from "../../assets/images";
import { createViewRepoCTA, createCheckWebsiteCTA } from "../../utils/misc";
import { Cta, Media, SHOWCASE_TYPES } from "../miscTypes";
import { Skills } from "./skills";

//Types
export type Work = {
    id: string;
    name: string;
    thumbnail: string;
    thumbnailHQ: string;
    dateStart: string;
    dateEnd?: string;
    type: SHOWCASE_TYPES;
    importance: number;
    skillsUsed: any[];
    description: string;
    medias: Media[];
    ctas: Cta[];
};

//Exports
const works: Work[] = [
    {
        id: "direct-brico",
        name: `Direct Brico`,
        thumbnail: THUMBNAILS.directBrico,
        thumbnailHQ: THUMBNAILS.directBricoHQ,
        dateStart: "2022-12-19",
        dateEnd: "2023-08-23",
        type: SHOWCASE_TYPES.webSite,
        importance: 125,
        skillsUsed: [
            Skills.html,
            Skills.css,
            Skills.javaScript,
            Skills.typeScript,
            Skills.react,
            Skills.reactNative,
            Skills.nextJs,
            Skills.sass,
            Skills.redux,
            Skills.jest,
            Skills.figma,
        ],
        description: `DirectBrico était une plateforme de vente d'outils d'occasion pour le bricolage et le jardinage entre particuliers.\n\n
        J'ai commencé par travailler sur l'application mobile en collaboration avec une autre personne.\n
        Cela consistait principalement à intégrer des maquettes Figma, à retravailler du code existant ainsi que corriger des erreurs et développer de nouvelles fonctionnalités.\n
        Puis en juin, j'ai participé à la refonte du site web depuis Prestashop vers Next.js avec deux collègues.\n
        Ici, j'ai contribué à la conception architecturale du projet, à la rédaction de tests unitaires et j'ai dû implémenter des sections importantes du site (par exemple : page d'accueil et page produit, y compris l'adaptation aux différentes tailles d'écran !).\n
        Pendant ma période chez DirectBrico, j'ai également participé à de nombreuses réunions, discussions, retours et clarifications au sein d'une équipe d'environ 10 personnes.\n\n
        Les nombreuses optimisations que j'ai apportées au code et à l'architecture du site ainsi que de l'application ont permis d'améliorer leur maintenabilité.\n
        La migration du site vers Next.js a conduit à une amélioration de nos scores de performance Lighthouse, sur grand écran (85→98) comme sur mobile (60→92).\n
        Malheureusement, la startup a dû fermer en août 2023, faute de ne pas avoir assez atteint son public cible.\n\n
        Au final, travailler chez DirectBrico m'a permis d'acquérir ou de renforcer mes connaissances en TypeScript, React Native, Next.js, Sass, Redux, Git et GitHub.\n
        Cela a également été ma première expérience professionnelle réelle, me familiarisant ainsi avec le monde du travail et le travail d'équipe impliquant autant de personnes.`,
        medias: [],
        ctas: [],
    },
    {
        id: "oh-my-food",
        name: `OhMyFood`,
        thumbnail: THUMBNAILS.ohMyFood,
        thumbnailHQ: THUMBNAILS.ohMyFoodHQ,
        dateStart: "2022-03-29",
        dateEnd: "2022-04-13",
        type: SHOWCASE_TYPES.webSite,
        importance: 50,
        skillsUsed: [Skills.html, Skills.css, Skills.sass],
        description: `Pour le 3ème projet de ma première formation OpenClassrooms, il fallait réaliser le site d'une entreprise fictive permettant de réserver sa place et son menu dans un restaurant pour éviter les temps d'attente sur place.\n\n
        J'ai dû créer 5 pages et les relier entre elles.\nQuatre d'entre elles sont des pages de commande (pour différents restaurants) avec une structure identique.\n
        J'ai donc commencé par en créer une à partir des maquettes en utilisant du HTML brut.\n
        Une fois terminée, je l'ai clonée en trois autres pages où je n'avais qu'à modifier le contenu.\n
        Ce projet m'a également demandé de réaliser plusieurs animations CSS, incluant un faux écran de chargement sur la page d'accueil ainsi que l'apparition progressive des plats sur les pages de menu.\n\n
        OhMyFood fut un projet court qui m'a permis d'en apprendre beaucoup plus sur la mise en forme des pages. Il m'a initié à Sass, aux animations CSS, aux formulaires, le contrôle de version avec Git et GitHub, et m'a fait repousser mes compétences sur certains effets qui m'avaient bien mis en difficulté à l'époque.`,
        medias: [],
        ctas: [
            createCheckWebsiteCTA("https://mbzmokka.github.io/ohmyfood/"),
            createViewRepoCTA("https://github.com/MbzMOKKA/ohmyfood"),
        ],
    },
    {
        id: "argent-bank",
        name: `Argent Bank`,
        thumbnail: THUMBNAILS.argentBank,
        thumbnailHQ: THUMBNAILS.argentBankHQ,
        dateStart: "2023-04-10",
        dateEnd: "2023-06-02",
        type: SHOWCASE_TYPES.webSite,
        importance: 60,
        skillsUsed: [
            Skills.html,
            Skills.css,
            Skills.javaScript,
            Skills.typeScript,
            Skills.react,
            Skills.createReactApp,
            Skills.styledComponents,
            Skills.axios,
            Skills.redux,
        ],
        description: `Pour le 13ème projet de ma deuxième formation OpenClassrooms, une banque fictive a eu besoin de créer son application web et notre agence fictive nous a envoyé en mission pour développer la partie front-end.\n\n
        J'ai dû transformer les maquettes statiques (HTML/CSS) en un site dynamique avec React.\n
        J'ai également dû effectuer des appels API avec Axios (par exemple : pour permettre la connexion à son compte).\n
        Pour facilement avoir accès au jeton d'authentification ou aux informations du compte de l'utilisateur dans les composants, j'ai utilisé Redux en tant que gestionnaire d'état de l'application.\n
        Enfin, j'ai dû rédiger une documentation Swagger pour décrire les éventuelles routes qui seraient utilisées pour une nouvelle fonctionnalité d'exploration des comptes de l'utilisateur.\n\n
        ArgentBank est le premier projet où j'ai utilisé Redux et Swagger, ainsi que le premier projet que j'ai commencé de zéro où j'ai pu appliquer les connaissances en TypeScript acquises avec l'entreprise dans laquelle j'effectuais mon alternance.`,
        medias: [],
        ctas: [
            createViewRepoCTA(
                "https://github.com/MokkaReactJsCourseProjects/ArgentBankFront"
            ),
        ],
    },
    {
        id: "hr-net",
        name: `HRnet`,
        thumbnail: THUMBNAILS.hrNet,
        thumbnailHQ: THUMBNAILS.hrNetHQ,
        dateStart: "2023-06-26",
        dateEnd: "2023-08-15",
        type: SHOWCASE_TYPES.webSite,
        importance: 75,
        skillsUsed: [
            Skills.html,
            Skills.css,
            Skills.javaScript,
            Skills.typeScript,
            Skills.react,
            Skills.nextJs,
            Skills.createReactApp,
            Skills.tailwindCss,
            Skills.redux,
            Skills.uiDesign,
        ],
        description: `Il s'agit du 14ème projet de ma deuxième formation OpenClassrooms.\n
        Nous faisons partie d'une entreprise fictive (Wealth Health) qui possède une application web pour ses ressources humaines (HRnet) nécessitant une refonte, et c'est précisément ce sur quoi porte notre travail.\n\n
        L'application d'origine utilisait 4 plugins JQuery que j'ai dû convertir en composants React.\n
        Il nous était également demandé de convertir l'un des quatre plugins en bibliothèque publiée sur npm.\n
        J'ai donc aussi créé une petite bibliothèque avec Create React App pour afficher facilement des modales.\n
        La partie la plus complexe du projet a été de créer la pagination du tableau affichant la liste des employés, j'ai dû consacrer plusieurs heures pour comprendre le comportement de l'original, concevoir une implémentation, la réaliser et corriger les erreurs.\n\n
        Grâce à cette refonte, les scores Lighthouse pour le SEO (64→92) ainsi que les performances sur mobile (92→96) sont plus élevés.\n
        Le code est également bien plus lisible et facile à maintenir.\n
        J'ai même pu utiliser la pagination des employés pour mettre en place la pagination des résultats de recherche pour DirectBrico.\n\n
        En résumé, j'ai appris beaucoup de choses dans ce projet : que ce soit l'utilisation de Tailwind CSS et une nouvelle architecture avec Next.js avec laquelle je suis fluide, ou encore la création de bibliothèques sur npm, le déploiement sur Vercel ainsi que la mise en place de certaines fonctionnalités que je n'avais jamais réalisées auparavant.`,
        medias: [],
        ctas: [
            createCheckWebsiteCTA("https://hr-net-alpha.vercel.app/"),
            createViewRepoCTA(
                "https://github.com/MokkaReactJsCourseProjects/HRNet"
            ),
        ],
    },
    /*{
        id: "survivalcraft-manager",
        name: `SurvivalCraft Manager`,
        thumbnail:ICONS.cross,
        dateStart: "2020-02-01",
        dateEnd: undefined,
        type: SHOWCASE_TYPES.other,
        importance: 100,
        skillsUsed: [],
        description: ``,
        medias: [],
        ctas: [],
    },*/
    {
        id: "groupomania",
        name: `Groupomania`,
        thumbnail: THUMBNAILS.groupomania,
        thumbnailHQ: THUMBNAILS.groupomaniaHQ,
        dateStart: "2022-08-25",
        dateEnd: "2022-09-26",
        type: SHOWCASE_TYPES.webSite,
        importance: 100,
        skillsUsed: [
            Skills.html,
            Skills.css,
            Skills.javaScript,
            Skills.react,
            Skills.createReactApp,
            Skills.styledComponents,
            Skills.axios,
            Skills.uiDesign,
            Skills.uxDesign,
            Skills.nodeJs,
            Skills.expressJs,
            Skills.mongoDB,
        ],
        description: `Le dernier projet de ma 1ère formation OpenClassrooms consistait à développer de A à Z un réseau social interne d'entreprise en utilisant un framework front-end.\n\n
        J'ai dû suivre un cahier des charges me demandant d'implémenter des fonctionnalités telles que l'authentification, la publication de posts (avec possibilité d'inclure une image) ou encore la modération.\n
        Ensuite, j'ai poussé le projet plus loin en ajoutant la possibilité de commenter une publication ou de charger les nouveaux posts automatiquement sans avoir à rafraîchir la page.\n
        J'ai également dû concevoir l'interface en suivant une identité graphique définie.\n\n
        J'ai pu recontrer quelques difficultés, mais j'ai toujours fini par les surmontés (par exemple : j'ai dû utiliser axios pour ajouter facilement une image à une publication).\n
        À la fin, le projet fut validé sans problème.\n\n
        Ce gros projet m'a avant tout initié à React, mais a également testé toutes mes compétences acquises jusqu'à présent durant la formation.`,
        medias: [],
        ctas: [
            createViewRepoCTA(
                "https://github.com/MbzMOKKA/GroupomaniaSocialTool"
            ),
        ],
    },
    {
        id: "my-portfolio",
        name: `Mon Portfolio`,
        thumbnail: THUMBNAILS.portfolio,
        thumbnailHQ: THUMBNAILS.portfolioHQ,
        dateStart: "2023-04-24",
        dateEnd: undefined,
        type: SHOWCASE_TYPES.webSite,
        importance: 100,
        skillsUsed: [
            Skills.html,
            Skills.css,
            Skills.javaScript,
            Skills.typeScript,
            Skills.react,
            Skills.createReactApp,
            Skills.styledComponents,
            Skills.redux,
        ],
        description: `La vitrine de mes projets et compétences qui montre de quoi je suis capable. Vous y êtes, c'est ici !\n\n
        La création de ce portfolio m'amène à définir les fonctionnalités nécessaires, puis à concevoir des maquettes visant à combiner une expérience utilisateur fluide avec un design esthétique.\n
        Ensuite, j'intègre ces maquettes à l'aide de Create React App, TypeScript et styled-components.\n
        Pour le déploiement, j'utilise une bibliothèque pour le faire facilement sur GitHub Pages.\n\n
        Grâce à lui, je peux présenter facilement mes réalisations à de potentiels collaborateurs, partager mes moyens de contact professionnels et suivre mon parcours.\n
        Dû à sa nature, ce projet est en constante évolution.\n\n
        Ce projet a été la première occasion pour moi de déployer une application web monopage, d'utiliser i18n pour l'affichage des textes et de générer un QR Code pour facilement copier le site sur d'autres appareils.`,
        medias: [],
        ctas: [createViewRepoCTA("https://github.com/MbzMOKKA/MyPortfolio")],
    },
    {
        id: "les-petits-plats",
        name: `Les petits plats`,
        thumbnail: THUMBNAILS.lesPetitsPlats,
        thumbnailHQ: THUMBNAILS.lesPetitsPlatsHQ,
        dateStart: "2023-09-27",
        dateEnd: "2023-11-08",
        type: SHOWCASE_TYPES.webSite,
        importance: 80,
        skillsUsed: [
            Skills.html,
            Skills.css,
            Skills.javaScript,
            Skills.tailwindCss,
            Skills.figma,
        ],
        description: `Le 7ème projet de ma deuxième formation OpenClassrooms, où je devais développer le front-end d'un site fictif de recette de cuisine.\n\n
        J'ai dû intégrer les maquettes Figma avec Tailwind CSS, ainsi que développer deux versions d'un algorithme de recherche et les comparer pour choisir le plus efficace.\n
        La comparaison s'est basé sur plusieurs critères tels que les performances (mesuré avec l'outil JSben.ch) ou la maintenabilité du code.\n
        J'ai enfin dû réaliser un algorigramme pour expliquer le fonctionnement de chaque solution.\n\n
        Ce petit projet m'a permis de renforcer mes compétences en JavaScript et Tailwind CSS.`,
        medias: [],
        ctas: [
            createCheckWebsiteCTA(
                "https://mokkareactjscourseprojects.github.io/Les-petits-plats/"
            ),
            createViewRepoCTA(
                "https://github.com/MokkaReactJsCourseProjects/Les-petits-plats"
            ),
        ],
    },
];

export default works;
