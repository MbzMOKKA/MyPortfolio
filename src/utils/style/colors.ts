//Imports
import adjustColor from '../misc/adjustColor';

//Exports
const colors = {
    identity: {
        primary: '#5906B7',
    },
    support: {
        notSelected: '#140c22',
        selected: '',
        informative: '',
        warning: '',
        negative: '',
        positive: '',
    },
    neutral: {
        textDefault: '#FFF',
    },
};

colors.support.selected = adjustColor(colors.support.notSelected, 3);

export default colors;
