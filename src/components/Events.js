import React, { useState, useEffect } from 'react';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/events')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h2>{event.name}</h2>
            <button>View</button>            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;