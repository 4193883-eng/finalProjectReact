import {TableData} from "../TableData/TableData.jsx";
import {TableRow} from "../TableRow/TableRow.jsx";
import styles from './TimeTable.module.css'
import {TableTimeData} from "../TableTimeData/TableTimeData.jsx";
import {add0IfNeeded} from "../../services/funcs.js";

export function TimeTable({data}) {
    // {
    //     "0":  [null, null, null, null, null, null, null],
    //     "1":  [null, null, null, null, null, null, null],
    //     "2":  [null, null, null, null, null, null, null],
    //     "3":  [null, null, null, null, null, null, null],
    //     "4":  [null, null, null, null, null, null, null],
    //     "5":  [null, null, null, null, null, null, null],
    //     "6":  [null, null, null, null, null, null, null],
    //     "7":  [null, null, null, null, null, null, null],
    //     "8":  [null, null, null, null, null, null, null],
    //     "9":  [null, null, null, null, null, null, null],
    //     "10": [null, null, null, null, null, null, null],
    //     "11": [null, null, null, null, null, null, null],
    //     "12": [null, null, null, null, null, null, null],
    //     "13": [null, null, null, null, null, null, null],
    //     "14": [null, null, null, null, null, null, null],
    //     "15": [null, null, null, null, null, null, null],
    //     "16": [null, null, null, null, null, null, null],
    //     "17": [null, null, null, null, null, null, null],
    //     "18": [null, null, null, null, null, null, null],
    //     "19": [null, null, null, null, null, null, null],
    //     "20": [null, null, null, null, null, null, null],
    //     "21": [null, null, null, null, null, null, null],
    //     "22": [null, null, null, null, null, null, null],
    //     "23": [null, null, null, null, null, null, null]
    // }
    function createRows(data){
        const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
        let rows = []
        for(let i = 0; i <= 23; i ++){
            rows.push(<TableRow key={i}> <TableTimeData>{add0IfNeeded(i)}:00</TableTimeData> {data[i].map((el, ri)=>{return <TableData key={String(i)+String(ri)} >{el}</TableData>})}</TableRow>)
        }
        return rows
    }

    return (
        <>
            <TableRow isFirst={true}>
                <TableTimeData>time</TableTimeData>
                <TableData>mon</TableData>
                <TableData>tue</TableData>
                <TableData>wed</TableData>
                <TableData>thu</TableData>
                <TableData>fri</TableData>
                <TableData>sat</TableData>
                <TableData>sun</TableData>
            </TableRow>
            {createRows(data)}
        </>
    )
}