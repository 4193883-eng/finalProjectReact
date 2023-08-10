import styles from './Header.module.css'

export function Header({toggleSettingOpen}) {
	return (
		<div className={styles.head}>
			<span className={styles.h1}>Timetable</span>
			<button className={styles.button} onClick={toggleSettingOpen}>settings</button>
		</div>
	)
}