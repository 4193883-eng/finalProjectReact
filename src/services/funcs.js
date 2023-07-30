import {days, newTable} from "./consts.js";
import axios from "axios";


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
    let table = duplicate(newTable);

    events.forEach((event) => {
        const eventMoment = String(event.date).split("@");
        const eventHour = Number(eventMoment[0]);
        const eventDay = String(Number(dayToNumber(String(eventMoment[1]))));
        // table[eventHour][eventDay] = String(event.title);
        table[eventHour][eventDay] = {id: event.id, title: event.title};
    })

    return table;
}

export function duplicate(target){
    return JSON.parse(JSON.stringify(target));
}

export function fetchData(url, tableId){
    return axios.get(url+String(tableId)+"?_embed=events")
}

export function fetchTables(url){
    return axios.get(url)
}

export function changeData(id, text){
    return axios
}