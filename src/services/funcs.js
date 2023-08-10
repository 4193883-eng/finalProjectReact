import { baseUrl, days, newTable } from "./consts.js";
import axios from "axios";

axios.defaults.baseURL = baseUrl

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

export function parseData(events = []){
    let table = duplicate(newTable);

    events.forEach((event) => {
        const eventMoment = String(event.date).split("@");
        const eventHour = Number(eventMoment[0]);
        const eventDay = String(Number(dayToNumber(String(eventMoment[1]))));
        // table[eventHour][eventDay] = String(event.title);
        table[eventHour][eventDay] = {id: event.id, title: event.title, date: eventMoment};
    })

    return table;
}

export function duplicate(target){
    return JSON.parse(JSON.stringify(target));
}

export function fetchData(tableId){
    return axios.get(`/tables/${tableId}`, {
        params:{
            "_embed": "events"
        }
    })
}

export function fetchTables(){
    return axios.get("/tables")
}

export function deleteEvent(id){
    return axios.delete(`/events/${id}`)
}

export function changeData(text, id){
    return axios.patch(`/events/${id}`, {
        "title": text
    })
}

export function createData(text, date, tableId){
    return axios.post(`/events/`, {
        "title": text,
        "date": date,
        "tableId": tableId
    })
}

export function createTable(value){
    return axios.post(`/tables/`, {
        title: value
    })
}

export function deleteTable(id){
    return axios.delete(`/tables/${id}`)
}

export function getUrlFromLocalStorage(){

}