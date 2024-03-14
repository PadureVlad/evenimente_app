import React, {useState, useEffect} from "react";
import {BrowserRouter, BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import EventList from "../EventList";
import EventDetails from "../EventDetails";
import event from '../../resource/events.json';

const Main = () => {
    // const [event, setEvent] = useState([]);
    // useEffect(() => {
    //     const loaderInterval = setTimeout(() => {
    //         fetch('../../resource/events.json')
    //             .then(response => response.json())
    //             .then(eventJSON => {
    //                 setEvent(eventJSON);
    //             });
    //     }, 1000);
    //     return () => clearTimeout(loaderInterval);
    // }, []);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<EventList events={event}/>}/>
                <Route path="/event/:eventId" element={<EventDetails events={event}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Main;