import React from "react";
import Event from "./Event";

const EventList = ({events}) => {
    const eventsData = events.map( (event, index) => (
        <Event  key={index}
                id={event.id}
                denumire={event.denumire}
                locatie={event.locatie}
                data={event.data}
                ora={event.ora}/>
    ));
    return (
        <div>
            <h1 className="text-center fs-2 mb-4 mt-4">Listă de evenimente</h1>
            <div className="d-flex flex-wrap gap-5 justify-content-center">
                {eventsData}
            </div>
            <h3 className="text-center fs-4 mb-4">Toate drepturile rezervate.</h3>
        </div>
    );
}

export default EventList;