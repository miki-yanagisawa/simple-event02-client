import { Link } from "react-router-dom";

export function EventList({ event }) {
  return (    
    <Link
      key={event.id}
      className="card"
      to={`/events/${event.id}`}
    >
      <div className="card_head">
        <div className="num">
          <span>No.</span>
          <span>{event.id}</span>
        </div>
        <div className="date">
          <span>{event.date}</span>
        </div>{/* date */}
        <div className="title">
            <h2><span>{event.name}</span></h2>
        </div>
        <div className="place">
          <p><span>{event.place}</span></p>
        </div>{/* place */}
        <div className="tour">
          <p><span>{event.tour}</span></p>
        </div>{/* place */}
      </div>
    </Link>
  );
}


export function EventDetail({ event }) {
  return (
    <div className="card">
      <div className="card_head">
        <div className="date">
          <span>{event.date}</span>
        </div>{/* date */}
        <div className="title">
            <h2><span>{event.name}</span></h2>
        </div>
        <div className="place">
          <p><span>{event.place}</span></p>
        </div>{/* place */}
      </div>
      <div className="card_detail">
        <div className="num">
          <span>No.</span>
          <span>{event.id}</span>
        </div>
        <div className="time">
          <dl>
            <dt>open</dt>
            <dd>{event.timeOpen}</dd>
          </dl>
          <dl>
            <dt>start</dt>
            <dd>{event.timeStart}</dd>
          </dl>
        </div>{/* time */}
      </div>
    </div>
  );
}
