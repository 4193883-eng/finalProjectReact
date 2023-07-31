import styles from "./TableData.module.css";
import {DeleteBtn} from "./DataEditBtns/DeleteBtn.jsx";

export function DisplayData({text, onClick, onDelete}) {
	return (
		<div className={styles.a} onClick={()=>{onClick(true)}}>{text}<DeleteBtn onDelete={onDelete} className={styles.deleteBtn}/></div>
	)
}