import styles from "./TableSelector.module.css";
import {clsx} from "clsx";

export function TableSelector({ tableNames, currentTable, setCurrentTable }) {
    return (
        <div>
            {tableNames.map((tableName, i) => {
                return <button key={i} className={clsx(styles.tableName, currentTable === i && styles.tableNameSelected)} onClick={()=>{setCurrentTable(i)}}>{tableName}</button>;
            })}
        </div>
    );
}
