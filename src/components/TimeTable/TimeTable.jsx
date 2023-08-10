import { TableData } from "./TableData/TableData.jsx";
import { TableRow } from "./TableRow/TableRow.jsx";
import styles from "./TimeTable.module.css";
import { TableTimeData } from "./TableTimeData/TableTimeData.jsx";
import { add0IfNeeded } from "../../services/funcs.js";
import { useState } from "react";

export function TimeTable({ data, onEdit, onDelete, onCreate }) {

    function createRows(data) {
        let rows = [];
        for (let i = 0; i <= 23; i++) {
            rows.push(
                <TableRow key={i}>
                    <TableTimeData className={styles.b}>{add0IfNeeded(i)}:00</TableTimeData>
                    {data[i].map((el, ri) => {
                        return (
                            <TableData
                                key={String(i) + String(ri)}
                                el={el}
                                onEdit={onEdit}
                                onDelete={onDelete}
                                onCreate={onCreate}
                            />
                        );
                    })}
                </TableRow>
            );
        }
        return rows;
    }

    return (
        <>
            <TableRow isFirst={true}>
                <TableTimeData className={styles.c}>time</TableTimeData>
                <TableTimeData>mon</TableTimeData>
                <TableTimeData>tue</TableTimeData>
                <TableTimeData>wed</TableTimeData>
                <TableTimeData>thu</TableTimeData>
                <TableTimeData>fri</TableTimeData>
                <TableTimeData>sat</TableTimeData>
                <TableTimeData>sun</TableTimeData>
            </TableRow>
            {createRows(data)}
        </>
    );
}
