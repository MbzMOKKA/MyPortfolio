//Exports
export default function useDate() {
    function formatFullDate(dateString: string | undefined) {
        if (dateString === undefined) {
            return "...";
        }
        const date = new Date(dateString);
        const displayedDay = formatDay(date.getUTCDate());
        const displayedMonth = formatMonth(date.getUTCMonth());
        const displayedYear = date.getUTCFullYear().toString();
        return `${displayedDay} ${displayedMonth} ${displayedYear}`;
    }

    function formatSimplifiedDate(dateString: string | undefined) {
        if (dateString === undefined) {
            return `En cours`;
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

    function formatDay(day: number) {
        if (day === 1) {
            return `1er`;
        }
        return day.toString();
    }

    function formatMonth(month: number) {
        let displayedMonthName;
        switch (month) {
            case 0:
                displayedMonthName = `Janvier`;
                break;
            case 1:
                displayedMonthName = `Février`;
                break;
            case 2:
                displayedMonthName = `Mars`;
                break;
            case 3:
                displayedMonthName = `Avril`;
                break;
            case 4:
                displayedMonthName = `Mai`;
                break;
            case 5:
                displayedMonthName = `Juin`;
                break;
            case 6:
                displayedMonthName = `Juillet`;
                break;
            case 7:
                displayedMonthName = `Août`;
                break;
            case 8:
                displayedMonthName = `Septembre`;
                break;
            case 9:
                displayedMonthName = `Octobre`;
                break;
            case 10:
                displayedMonthName = `Novembre`;
                break;
            default:
                displayedMonthName = `Décembre`;
                break;
        }
        return displayedMonthName;
    }

    return { formatFullDate, formatSimplifiedDate, formatDay, formatMonth };
}
