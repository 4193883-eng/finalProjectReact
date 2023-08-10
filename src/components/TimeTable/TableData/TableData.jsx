import { useState } from "react";
import { DisplayData } from "./DisplayData.jsx";
import { EditData } from "./EditData.jsx";

export function TableData({ el, onEdit, onDelete, onCreate}) {
    const [isEditing, setEditing] = useState(false);

    function handleDelete() {
        setEditing(false);
        onDelete(el?.id)
    }

    function handleEdit(text, id){
        setEditing(false)
        onEdit(text, id)
    }

    function handleCreate(text, date){
        setEditing(false)
        onCreate(text,date)
    }



    return (
        <>
            {isEditing === false ? (
                <DisplayData
                    text={el?.title}
                    onClick={setEditing}
                    onDelete={handleDelete}
                />
            ) : (
                <EditData
                    text={el?.title}
                    id={el?.id}
                    onEdit={handleEdit}
                    isEditing={isEditing}
                    onDelete={handleDelete}
                    onCreate={handleCreate}
                    date={el?.date}
                />
            )}
        </>
    );
}
