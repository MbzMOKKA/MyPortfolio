//Imports
import { STRINGS } from "../../data";
import useText from "./useText";

//useDate custom hook
export default function useDate() {
    const { renderText } = useText();

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
            return renderText(STRINGS.ongoing);
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
            return renderText(STRINGS.firstDay);
        }
        return day.toString();
    }

    function formatMonth(month: number) {
        let displayedMonthId = STRINGS.january;
        switch (month) {
            case 0:
                break;
            case 1:
                displayedMonthId = STRINGS.february;
                break;
            case 2:
                displayedMonthId = STRINGS.march;
                break;
            case 3:
                displayedMonthId = STRINGS.april;
                break;
            case 4:
                displayedMonthId = STRINGS.may;
                break;
            case 5:
                displayedMonthId = STRINGS.june;
                break;
            case 6:
                displayedMonthId = STRINGS.jully;
                break;
            case 7:
                displayedMonthId = STRINGS.august;
                break;
            case 8:
                displayedMonthId = STRINGS.september;
                break;
            case 9:
                displayedMonthId = STRINGS.october;
                break;
            case 10:
                displayedMonthId = STRINGS.november;
                break;
            case 11:
                displayedMonthId = STRINGS.december;
                break;
        }
        return renderText(displayedMonthId);
    }

    return { formatFullDate, formatSimplifiedDate, formatDay, formatMonth };
}
