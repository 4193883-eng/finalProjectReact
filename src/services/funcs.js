import {days, newTable} from "./consts.js";


export function add0IfNeeded(number) {
    if (String(number).length === 1) {
        return "0" + String(number);
    } else {
        return String(number);
    }
}

function dayToNumber(dayUnverif){
    let day = String(dayUnverif).toLowerCase();
    let result;
    days.forEach((dayFor, i) => {
        if (dayFor === day){
            result = i;
        }
    })
    return result;
}

export function parseData(events){
    let table = newTable;

    events.forEach((event) => {
        const eventMoment = String(event.date).split("@");
        const eventHour = Number(eventMoment[0]);
        const eventDay = String(Number(dayToNumber(String(eventMoment[1]))));
        table[eventHour][eventDay] = String(event.title);
    })

    return table;
}