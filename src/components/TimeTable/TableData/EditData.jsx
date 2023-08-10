import styles from "./TableData.module.css";
import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";

export function EditData({ text, onEdit, id, onDelete, onCreate, date, type, className, parentClass }) {
    const input = useRef(undefined);

    const [value, setValue] = useState(String(text));

    useEffect(() => {
        if (text === null) {
            setValue("");
        }
    }, []);

    function onBlur() {
        if (type === "add"){
            onCreate(value)
            return;
        }

        if (text === null) {
            onCreate(value, date);
        } else if (value !== "") {
            onEdit(value, id)
        } else {
            console.log(onDelete);
            onDelete(id);
        }
    }

    function blurOnEnter(e) {
        e.preventDefault();
        input.current.blur();
    }

    return (
        <form className={clsx(styles.form, parentClass)} onSubmit={blurOnEnter}>
            <input
                type={"text"}
                autoFocus={true}
                onBlur={onBlur}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                className={clsx(styles.a, styles.input, className)}
                ref={input}
            ></input>
        </form>
    );
}
