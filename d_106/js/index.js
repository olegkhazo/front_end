
import { UI_ELEMENTS, creatingHandlers, readebleResult } from "./view.js";

import { format, parseISO, differenceInHours, differenceInCalendarDays, differenceInCalendarYears, getMilliseconds, daysToWeeks, } from 'date-fns';


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

