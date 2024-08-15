import React, { useState, useEffect } from 'react';
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

  const handleDeleteClick = (eventId) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      fetch(`http://localhost:3000/events/${eventId}`, {
        method: 'DELETE',
      })
        .then(() => {
          setEvents(events.filter(event => event.id !== eventId));
        })
        .catch(error => console.error('Error deleting event:', error));
    }
  }

  return (
    <div className='event-list'>
      <h1 className='hh1'>Event Manager Pro</h1>
      <header className='header'>
        <h2 className='hh2'>Events</h2>
        <button className='add-event-button' onClick={handleAddEventClick}>Add an Event</button>
      </header>
      <ul className='list'>
        {events.map(event => (
          <li key={event.id} className='event-item'>
            <div className='event-details'>
              <h3 className='event-name'>{event.name}</h3>
              <div className='event-actions'>
                <button className="view-btn" onClick={() => handleViewClick(event.id)}>View</button> 
                <Link to={`/events/${event.id}/rsvp`} className='rsvp-btn'>RSVP</Link> 
              </div>
            </div>
            <button
              className='delete-btn'
              onClick={() => handleDeleteClick(event.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;