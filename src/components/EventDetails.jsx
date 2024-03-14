import React from "react";
import {Link, useParams} from "react-router-dom";

const EventDetails = ({events}) => {
    const { eventId } = useParams();
    const event = events.find(e => e.id === parseInt(eventId, 10));
    const style = {
        "width": "14rem"
    }
    if (!event) {
        return <div>Evenimentul nu a fost găsit</div>;
    }
    return (
        <div>
            <h2 className="text-center fs-2 mb-4 mt-4">Detalii eveniment</h2>
            <div className="mx-5 shadow p-3 mb-5 bg-body rounded p-5 bg-info mb-5">
                <div>
                    <div className="card-body">
                        <h5 className="text-lg-end mb-2">{eventId}</h5>
                        <h5 className="card-title mb-2">Denumire: {event.denumire}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Locatie: {event.locatie}</h6>
                        <p className="card-text mb-0">Data: {event.data}</p>
                        <p className="card-text">Ora: {event.ora}</p>
                        <Link to={`/`}><h5 className="text-lg-end">Înapoi</h5></Link>
                    </div>
                </div>
            </div>

            <h3 className="text-center fs-4 mb-4">Toate drepturile rezervate.</h3>
        </div>
    );
}

export default EventDetails;