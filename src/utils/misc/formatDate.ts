export function formatFullDate(dateString: string | undefined) {
    if (dateString === undefined) {
        return "...";
    }
    const date = new Date(dateString);
    const displayedDay = formatDay(date.getUTCDate());
    const displayedMonth = formatMonth(date.getUTCMonth());
    const displayedYear = date.getUTCFullYear().toString();
    return `${displayedDay} ${displayedMonth} ${displayedYear}`;
}

export function formatSimplifiedDate(dateString: string | undefined) {
    if (dateString === undefined) {
        return "En cours";
    }
    const date = new Date(dateString);
    const today = new Date();
    const dateYear = date.getUTCFullYear();
    const dateMonth = date.getUTCMonth();
    if (dateYear === today.getUTCFullYear()) {
        return formatMonth(dateMonth);
    }
    return dateYear;
}

export function formatDay(day: number) {
    if (day === 1) {
        return "1er";
    }
    return day.toString();
}

export function formatMonth(month: number) {
    let displayedMonth;
    switch (month) {
        case 0:
            displayedMonth = "Janvier";
            break;
        case 1:
            displayedMonth = "Février";
            break;
        case 2:
            displayedMonth = "Mars";
            break;
        case 3:
            displayedMonth = "Avril";
            break;
        case 4:
            displayedMonth = "Mai";
            break;
        case 5:
            displayedMonth = "Juin";
            break;
        case 6:
            displayedMonth = "Juillet";
            break;
        case 7:
            displayedMonth = "Août";
            break;
        case 8:
            displayedMonth = "Septembre";
            break;
        case 9:
            displayedMonth = "Octobre";
            break;
        case 10:
            displayedMonth = "Novembre";
            break;
        case 11:
            displayedMonth = "Décembre";
            break;
    }
    return displayedMonth;
}
