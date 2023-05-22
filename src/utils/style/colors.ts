//Imports
import adjustColor from '../misc/adjustColor';

//Exports
const colors = {
    identity: {
        primary: '#5906B7',
    },
    support: {
        notSelected: '#282927',
        selected: '?',
        informative: '#5BA6E0',
        warning: '#EDDF09',
        negative: '#EC622F',
        positive: '#ADFD48',
    },
    neutral: {
        button: '#353A2E',
        textDefault: '#FFF',
        modalBgTop: '#424C6B',
        modalBgBottom: '#181A24',
    },
};

colors.support.selected = adjustColor(colors.support.notSelected, 2);

export default colors;
