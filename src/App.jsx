import { useEffect, useState } from "react";
import { TimeTable } from "./components/TimeTable/TimeTable.jsx";
import axios from "axios";
import { Container } from "./components/Container/Container.jsx";
import { baseUrl, newTable } from "./services/consts.js";
import { Header } from "./components/Header/Header.jsx";
import { useToggle } from "./services/useToggle.jsx";
import {fetchData, fetchTables, parseData} from "./services/funcs.js";

function App() {
    const [plans, setPlans] = useState(newTable);
    const [tables, setTables] = useState([])
    const [isSettingOpen, changeOpen] = useToggle(false);
    const [url, setUrl] = useState(baseUrl);
    const [tableId, setTableId] = useState(0);

    useEffect(() => {
        getData();
    }, [tableId]);

    function getData() {
        fetchData(url, tableId).then((res) => {
            setPlans(parseData(res.data.events));
            console.log(res.data.events);
        });
        fetchTables(url).then((res) => {
            setTables(res.data)
        })
    }

    return (
        <Container>
            <Header />
            <TimeTable data={plans} tables={tables} tableId={tableId} setTableId={setTableId}/>
        </Container>
    );
}

export default App;

// https://dribbble.com/shots/19575729-dulist-task-management-mobile-app
