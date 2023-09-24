//Imports
import { useSelector } from "react-redux";
import { STRING_IDS } from "../../data";
import { selectLanguage } from "../../redux_toolkit";
import useText from "./useText";

//useDate custom hook
export default function useDate() {
    const language = useSelector(selectLanguage);
    const { renderText } = useText();

    function formatFullDate(dateString: string | undefined) {
        if (dateString === undefined) {
            return "...";
        }
        const date = new Date(dateString);
        const displayedDay = formatDay(date.getUTCDate());
        const displayedMonth = formatMonth(date.getUTCMonth());
        const displayedYear = date.getUTCFullYear().toString();
        if (language === "fr") {
            return `${displayedDay} ${displayedMonth} ${displayedYear}`;
        }
        return `${displayedMonth} ${displayedDay} ${displayedYear}`;
    }

    function formatSimplifiedDate(dateString: string | undefined) {
        if (dateString === undefined) {
            return renderText(STRING_IDS.ongoing);
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
            return renderText(STRING_IDS.firstDay);
        }
        return language === "fr" ? day.toString() : day.toString() + "th";
    }

    function formatMonth(month: number) {
        let displayedMonthId = STRING_IDS.january;
        switch (month) {
            case 0:
                break;
            case 1:
                displayedMonthId = STRING_IDS.february;
                break;
            case 2:
                displayedMonthId = STRING_IDS.march;
                break;
            case 3:
                displayedMonthId = STRING_IDS.april;
                break;
            case 4:
                displayedMonthId = STRING_IDS.may;
                break;
            case 5:
                displayedMonthId = STRING_IDS.june;
                break;
            case 6:
                displayedMonthId = STRING_IDS.jully;
                break;
            case 7:
                displayedMonthId = STRING_IDS.august;
                break;
            case 8:
                displayedMonthId = STRING_IDS.september;
                break;
            case 9:
                displayedMonthId = STRING_IDS.october;
                break;
            case 10:
                displayedMonthId = STRING_IDS.november;
                break;
            case 11:
                displayedMonthId = STRING_IDS.december;
                break;
        }
        return renderText(displayedMonthId);
    }

    return { formatFullDate, formatSimplifiedDate, formatDay, formatMonth };
}
