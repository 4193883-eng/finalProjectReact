import Drawer from "react-modern-drawer";
import { useState } from "react";
import axios from "axios";

export function DrawerComponent({ open, onClose, initialUrl, setUrl }) {
    const [url, setInputUrl] = useState(String(initialUrl));
    const [message, setMessage] = useState("");

    function onSubmit(e){
        e.preventDefault()
        axios.get(`${url}/tables`).then(r => {
            setMessage("your url is functional")
            setUrl(url)
        }).catch((reason) => setMessage(`Error: ${reason}`))
    }

    return <Drawer open={open} direction={"right"} onClose={onClose}>
        <span>Settings</span>
        <form onSubmit={onSubmit}>
            <input type="text"
                   value={url}
                   onChange={(e) =>
                       setInputUrl(e.target.value)} />
            <input type="submit"
                   value={"Set URL"} />
        </form>
        <span>{message === "" ? "Set your API URL" : message}</span>
    </Drawer>;
}