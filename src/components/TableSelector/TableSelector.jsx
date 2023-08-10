import styles from "./TableSelector.module.css";
import { clsx } from "clsx";
import { useState } from "react";
import { EditData } from "../TimeTable/TableData/EditData.jsx";
import { createTable, deleteTable } from "../../services/funcs.js";
import { DeleteBtn } from "../TimeTable/TableData/DataEditBtns/DeleteBtn.jsx";

export function TableSelector({ tables, currentTable, setCurrentTable, signalRefresh }) {
    const [isEditing, setEditing] = useState(false);

    return (
        <div className={styles.selector}>
            {tables.map((table, i) => {
                return <button key={i}
                               className={clsx(styles.tableName,
                                   currentTable === i+1 && styles.tableNameSelected)}
                               onClick={() => {
                                   setCurrentTable(i+1);
                               }}>{table.title}
                <DeleteBtn onDelete={() => {
                    deleteTable(table.id).then(signalRefresh)
                }} className={clsx(styles.dltBtn)} /></button>;
            })}
            <button className={clsx(styles.tableName)} onClick={() => {
            }}>{isEditing ? <EditData type={"add"} onCreate={(value) => {
                    if (value === "") {
                        setEditing(false);
                        return;
                    }
                    createTable(value).then(signalRefresh);
                    setEditing(false);
                }} text={""}
                                      className={styles.input}
                                      parentClass={styles.form} /> :
                <span onClick={() => setEditing(true)}>+</span>}
            </button>
        </div>
    );
}
