import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  const { id } = useParams(); 
  const [event, setEvent] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch(`http://localhost:3000/events/${id}`)
      .then(response => response.json())
      .then(data => {
        setEvent(data); 
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching event details:', error);
        setLoading(false); 
      });
  }, [id]); 

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!event) {
    return <div>No event found.</div>; 
  }

  const rsvps = event.rsvps || []; 

  return (
    <div>
      <Navbar />
      <div className="content">
        <h1>{event.name}</h1>
        <p>Date: {event.date}</p>
        <p>Description: {event.description}</p>
        <p>Location: {event.location}</p>
        <h2>RSVPs:</h2>
        <ul>
          {rsvps.length > 0 ? (
            rsvps.map((rsvp, index) => (
              <li key={index}>
                {rsvp.name} ({rsvp.email}) - {rsvp.response === 'yes' ? 'Attending' : 'Not Attending'}
              </li>
            ))
          ) : (
            <li>No RSVPs yet.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default EventDetails;