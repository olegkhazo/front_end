
import { UI_ELEMENTS, creatingHandlers } from "./view.js";

import { format, parseISO, differenceInHours, differenceInCalendarDays, differenceInCalendarYears, getMilliseconds, daysToWeeks, } from 'date-fns';
import { create } from "domain";



creatingHandlers(UI_ELEMENTS.BUTTON, "click", getUserDate);

function getUserDate(event) {
    const userDate = parseISO(UI_ELEMENTS.INPUT.value);    
    findDifference(userDate);
}

function findDifference(userDate) {
    const current = new Date();
    const result = {
        years: differenceInCalendarYears(current, userDate),
        days: differenceInCalendarDays(current, userDate),
        hours: differenceInHours(current, userDate),

    };
    readebleResult(result);
}

function readebleResult(dif) {
    UI_ELEMENTS.RESULT.innerHTML = "Years: " + dif.years + "<br/>" + "days: " + dif.days + "<br/>" + "hours: " + dif.hours;
    // return console.log(dif);
}
