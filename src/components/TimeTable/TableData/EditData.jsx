import styles from "./TableData.module.css";
import { useRef } from "react";

export function EditData({ text, setText, setEditing, isEditing }) {
    const input = useRef(undefined);
    function onBlur(e) {
        setText(e.target.value);
        setEditing(false);
    }

    function blurOnEnter(e) {
        if (e.target.key === "Enter") {
            input.current.blur()
        }
    }

    return (
        <input
            type={"text"}
            autoFocus={true}
            onBlur={onBlur}
            value={text}
            onChange={(e) => {
                setText(e.target.value);
            }}
            className={styles.a}
            ref={input}
            onKeyDown={blurOnEnter}
        ></input>
    );
}
