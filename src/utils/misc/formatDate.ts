export default function formatDate(dateString: string | undefined) {
    if (dateString === undefined) {
        return "...";
    }
    const date = new Date(dateString);
    let displayedDay = date.getUTCDate().toString();
    let displayedMonth;
    const displayedYear = date.getUTCFullYear().toString();
    if (displayedDay === "1") {
        displayedDay = "1er";
    }
    switch (date.getUTCMonth()) {
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
    return `${displayedDay} ${displayedMonth} ${displayedYear}`;
}
