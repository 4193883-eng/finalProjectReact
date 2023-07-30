import styles from "./TableData.module.css";
import { DeleteBtn } from "./DataEditBtns/DeleteBtn.jsx";
import { useRef } from "react";

export function EditData({ text, setText, setEditing, isEditing }) {
    const input = useRef();
    function onBlur(e) {
        setText(e.target.value);
        setEditing(false);
    }

    function blurOnEnter(e) {
        if (e.target.key === "Enter") {
            console.log(input);
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
        ></input>
    );
}
