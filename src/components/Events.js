import React, { useState, useEffect, } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Events = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/events')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  const handleViewClick = (eventId) => {
    navigate(`/events/${eventId}`);
  };

  return (
    <div className='event-list'>
      <h1>Event-Planner Elite</h1>
      <h2>Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h2>{event.name}</h2>
            <button onClick={() => handleViewClick(event.id)}>View</button> 
            <Link to={`/events/${event.id}/rsvp`}>RSVP</Link> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;