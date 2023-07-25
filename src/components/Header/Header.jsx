import styles from './Header.module.css'

export function Header({}) {
	return (
		<div className={styles.head}>
			<span className={styles.h1}>Timetable</span>
			<button className={styles.button}>settings</button>
		</div>
	)
}