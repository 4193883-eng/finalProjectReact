import { useEffect, useState } from "react";
import { TimeTable } from "./components/TimeTable/TimeTable.jsx";
import { Container } from "./components/Container/Container.jsx";
import { baseUrl, newTable } from "./services/consts.js";
import { Header } from "./components/Header/Header.jsx";
import { useToggle } from "./services/hooks.jsx";
import { changeData, createData, deleteEvent, fetchData, fetchTables, parseData } from "./services/funcs.js";
import { TableSelector } from "./components/TableSelector/TableSelector.jsx";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import styles from "./App.module.css";
import "react-modern-drawer/dist/index.css";
import { DrawerComponent } from "./components/Drawer/DrawerComponent.jsx";

function getLocalUrl(){
    const url = localStorage.getItem("url");
    if (!!url){
        return url;
    }else {
        return baseUrl;
    }
}

function App() {
    const [plans, setPlans] = useState([]);
    const [tables, setTables] = useState([]);
    const [isSettingOpen, toggleSettingOpen] = useToggle(false);
    const [url, setUrl] = useState(getLocalUrl);
    const [tableId, setTableId] = useState(1);
    const [isDataLoading, setDataLoading] = useState(true);
    const [isTablesLoading, setTablesLoading] = useState(true);

    useEffect(() => {
        getData();
    }, [tableId]);

    useEffect(() => {
        axios.defaults.baseURL = url;
        localStorage.setItem("url", url)
        getData();
    }, [url]);

    function getData(){
        setDataLoading(true);
        setTablesLoading(true);
        fetchData(tableId).then((res) => {
            setPlans(res.data["events"]);
            console.log(res.data["events"]);
            setDataLoading(false);
        });
        fetchTables().then((res) => {
            setTables(res.data);
            setTablesLoading(false)
        })
    }

    function onEdit(value, id) {
        changeData(value, id).then(() => {
            getData();
        });
    }

    function handleDelete(id) {
        deleteEvent(id).then(() => {
            getData();
        });
    }

    function onCreate(text, date) {
        createData(text, date, tableId).then(() => {
            // const noEmptyWSameDate = plans.filter((plan) => plan.date !== date)
            // setPlans([{title: text, date: date, tableId: tableId}, ...noEmptyWSameDate])
            getData();
        });
    }

    return (
        <>
            {(isTablesLoading && isDataLoading) ? <div className={styles.spin}><InfinitySpin /></div> :
                <>
                    <Container>
                        <Header toggleSettingOpen={toggleSettingOpen} />
                        <TableSelector currentTable={tableId}
                                       setCurrentTable={setTableId}
                                       signalRefresh={getData}
                                       tables={tables}
                        />
                        <TimeTable data={parseData(plans) }
                                   tables={tables}
                                   onEdit={onEdit}
                                   onDelete={handleDelete}
                                   onCreate={onCreate} />
                    </Container>
                    <DrawerComponent open={isSettingOpen} onClose={toggleSettingOpen} setUrl={setUrl} initialUrl={url}/>
                </>
            }
        </>

    );
}

export default App;

// https://dribbble.com/shots/19575729-dulist-task-management-mobile-app
