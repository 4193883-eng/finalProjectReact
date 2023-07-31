import styles from "./TableData.module.css";
import { useRef } from "react";
import { clsx } from "clsx";

export function EditData({ text, setText, setEditing }) {
    const input = useRef(undefined);
    function onBlur(e) {
        setText(e.target.value);
        setEditing(false);
    }

    function blurOnEnter(e) {
        e.preventDefault()
        input.current.blur()
    }

    return (
        <form className={styles.form} onSubmit={blurOnEnter}>
        <input
            type={"text"}
            autoFocus={true}
            onBlur={onBlur}
            value={text}
            onChange={(e) => {
                setText(e.target.value);
            }}
            className={clsx(styles.a, styles.input)}
            ref={input}
        ></input>
        </form>
    );
}
