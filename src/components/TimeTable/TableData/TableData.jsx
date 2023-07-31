import { useState } from "react";
import { DisplayData } from "./DisplayData.jsx";
import { EditData } from "./EditData.jsx";

export function TableData({ el }) {
    const [isEditing, setEditing] = useState(false);
    const [text, setText] = useState(el? el["title"] : "");

    function onDelete() {
        setEditing(true);
        setText("");
    }

    // if(Math.random() >= 0.9){
    //     setEditing(true)
    // }

    return (
        <>
            {isEditing === false ? (
                <DisplayData
                    text={text}
                    onClick={setEditing}
                    onDelete={onDelete}
                />
            ) : (
                <EditData
                    text={text}
                    setText={setText}
                    setEditing={setEditing}
                    isEditing={isEditing}
                />
            )}
        </>
    );
}
