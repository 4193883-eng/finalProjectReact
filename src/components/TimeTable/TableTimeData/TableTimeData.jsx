import styles from './TableTimeData.module.css'
import { clsx } from "clsx";

export function TableTimeData({children, className}) {
	return (
		<div className={clsx(styles.a, className)}>{children}</div>
	)
}