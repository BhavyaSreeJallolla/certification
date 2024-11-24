import React, { useState, useEffect } from 'react';
import './EventPage.css';

function EventPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('http://localhost:5000/api/events');
      const data = await response.json();
      setEvents(data);
    };

    fetchEvents();
  }, []);

  return (
    <div className="events-container">
      <h2>Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <button>Update</button>
            <button className="delete">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventPage;
