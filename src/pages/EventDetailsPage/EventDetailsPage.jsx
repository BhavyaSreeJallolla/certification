import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EventDetailsPage.css';

function EventDetailsPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await fetch(`http://localhost:5000/api/events/${eventId}`);
      const data = await response.json();
      setEvent(data);
    };

    fetchEvent();
  }, [eventId]);

  if (!event) return <p>Loading...</p>;

  return (
    <div className="event-details-container">
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>{event.date}</p>
      <button>Update</button>
      <button className="delete">Delete</button>
    </div>
  );
}

export default EventDetailsPage;
