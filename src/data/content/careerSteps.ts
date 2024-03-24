//Types
export type CareerStep = {
    date: number;
    name: string;
    description: string;
};

//Exports
const careerSteps: CareerStep[] = [
    //Middleschool
    {
        date: 2016,
        name: `Le collège`,
        description: `C'est là que j'ai commencé à apprendre l'algorithmie tout seul, en développant des jeux vidéos sur Scratch.`,
    },
    //Highschool
    {
        date: 2017,
        name: `Le lycée`,
        description: `J'ai évolué de Scratch vers GameMaker et fût introduit au sujet du développement web durant mes cours d'option ISN.`,
    },
    //1.5 year break
    {
        date: 2020,
        name: `Post-bac sabbatique`,
        description: `1 an et demi consacré à plein temps à la réalisation de prototypes de jeux, ce qui m'a permis d'apprendre beaucoup de choses en développement.`,
    },
    //Web dev course
    {
        date: 2022,
        name: `Reprise d'étude`,
        description: `J'ai choisi d'étudier le développement web, car mes compétences acquises avec la réalisation de jeux vidéos me donnent des facilités dans ce domaine.`,
    },
    //Now
    {
        date: 2023,
        name: `Alternance front-end`,
        description: `Sous conseil de mes mentors ainsi que pour mieux transitionner vers le monde professionnel, j'ai poursuivi avec une alternance pour me spécialiser sur React.js.`,
    },
];

export default careerSteps;
