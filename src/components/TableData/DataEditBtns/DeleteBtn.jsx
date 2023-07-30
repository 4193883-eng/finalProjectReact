import styles from "./DeleteBtn.module.css";
import { clsx } from "clsx";

export function DeleteBtn({ className, onDelete }) {
    return (
        <button
            className={clsx(styles.button, className)}
            onClick={onDelete}
        >
            <img src={"/delete.png"}  alt={"del"}/>
        </button>
    );
}
