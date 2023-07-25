import {useEffect, useState} from 'react'
import {TimeTable} from "./components/TimeTable/TimeTable.jsx";
import axios from "axios";
import {Container} from "./components/Container/Container.jsx";
import {baseUrl, newTable} from "./services/consts.js";
import {Header} from "./components/Header/Header.jsx";
import useToggle from "./services/useToggle.jsx";
import {parseData} from "./services/funcs.js";

function App() {
    const [plans, setPlans] = useState(newTable)
    const [isSettingOpen, changeOpen] = useToggle(false);
    const [url, setUrl] = useState(baseUrl);
    const [tableId, setTableId] = useState(1);

    useEffect(() => {
        axios.get(url+String(tableId)+"?_embed=events").then((res) => {
            setPlans(parseData(res.data.events));
        })
    }, []);

    return (
        <Container>
            <Header/>
            <TimeTable data={plans}/>
        </Container>
    )
}

export default App

// https://dribbble.com/shots/19575729-dulist-task-management-mobile-app