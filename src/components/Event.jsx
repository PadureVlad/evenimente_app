import React from "react";
import {Link} from "react-router-dom";

const Event = ({id, denumire, locatie, data, ora}) => {
    const style = {
        "width": "14rem"
    }
    return (
        <div className="mx-5 shadow p-3 mb-5 bg-body rounded p-5 bg-info mb-5">
            <div style={style}>
                <div className="card-body">
                    <Link to={`/event/${id}`}><h5 className="card-title mb-2">Denumire: {denumire}</h5></Link>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Locatie: {locatie}</h6>
                    <p className="card-text">Data: {data}</p>
                </div>
            </div>
        </div>

    );
}

export default Event;