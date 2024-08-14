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
  }

  const handleAddEventClick = () => {
    navigate("/addevent"); 
  }

  return (
    <div className='event-list'>
      <h1>Event-Planner Elite</h1>
      <header className='header'>
        <h2>Events</h2>
        <button className='add-event-button' onClick={handleAddEventClick}>Add an Event</button>
      </header>
      <ul className='list'>
        {events.map(event => (
          <li key={event.id}>
            <h2>{event.name}</h2>
            <button className= "view-btn" onClick={() => handleViewClick(event.id)}>View</button> 
            <Link to={`/events/${event.id}/rsvp`}>RSVP</Link> 
            <button className='delete-btn'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;