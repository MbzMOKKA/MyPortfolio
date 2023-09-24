//Imports

//Exports
const paddings = {
    mobile: {
        mainHorizontal: `${15}px`,
        modalHeader: `${8}px ${8}px ${8}px ${16}px`,
        modalMain: `${10}px ${20}px`,
        button: `${10}px`,
    },
    laptop: { mainHorizontal: `${10}%` },
};

const margins = {
    mainHorizontal: `${15}px`,
    nameBottom: `${10}px`,
    nameSeparatorRight: `${15}px`,
    option: `${5}px ${0}px`,
    grid: `${24}px`,
};

export const workThumbnailAspectRatio = 4 / 3;
const workCardThumbnailMobileRawWidth = 40;
const workCardThumbnailLaptopRawWidth = 14.5;
const workModalThumbnailMobileRawWidth = 100;
const workModalThumbnailLaptopRawWidth = 20;

export const skillLogoAspectRatio = 1 / 1;
const skillCardLogoMobileRawWidth = 28;
const skillCardLogoLaptopRawWidth = 12;
const skillModalLogoMobileRawWidth = 100;
const skillModalLogoLaptopRawWidth = 15;

const widths = {
    narrowContentTabletMaxWidth: `${660}px`,
    narrowContentLaptopMaxWidth: `${900}px`,
    workCardThumbnailMobileWidth: `${workCardThumbnailMobileRawWidth}vw`,
    workCardThumbnailLaptopWidth: `${workCardThumbnailLaptopRawWidth}vw`,
    workModalThumbnailMobileWidth: `${workModalThumbnailMobileRawWidth}%`,
    workModalThumbnailLaptopWidth: `${workModalThumbnailLaptopRawWidth}vw`,
    skillCardLogoMobileWidth: `${skillCardLogoMobileRawWidth}vw`,
    skillCardLogoLaptopWidth: `${skillCardLogoLaptopRawWidth}vw`,
    skillModalLogoMobileWidth: `${skillModalLogoMobileRawWidth}%`,
    skillModalLogoLaptopWidth: `${skillModalLogoLaptopRawWidth}vw`,
};

const heights = {
    workCardThumbnailMobileHeight: `${
        workCardThumbnailMobileRawWidth / workThumbnailAspectRatio
    }vw`,
    workCardThumbnailLaptopHeight: `${
        workCardThumbnailLaptopRawWidth / workThumbnailAspectRatio
    }vw`,
    workModalThumbnailMobileHeight: `${
        workModalThumbnailMobileRawWidth / workThumbnailAspectRatio
    }vw`,
    workModalThumbnailLaptopHeight: `${
        workModalThumbnailLaptopRawWidth / workThumbnailAspectRatio
    }vw`,
    skillCardLogoMobileHeight: `${
        skillCardLogoMobileRawWidth / skillLogoAspectRatio
    }vw`,
    skillCardLogoLaptopHeight: `${
        skillCardLogoLaptopRawWidth / skillLogoAspectRatio
    }vw`,
    skillModalLogoMobileHeight: `${
        skillModalLogoMobileRawWidth / skillLogoAspectRatio
    }vw`,
    skillModalLogoLaptopHeight: `${
        skillModalLogoLaptopRawWidth / skillLogoAspectRatio
    }vw`,
};

export { paddings, margins, widths, heights };
