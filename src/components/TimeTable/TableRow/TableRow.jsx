import styles from './TableRow.module.css';

export function TableRow({isFirst, children}) {
	return (
		<div className={`${styles.row} ${isFirst? styles.firstRow: ""}`}>{children}</div>
	)
}