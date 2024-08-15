import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useParams, useNavigate } from 'react-router-dom';

const RSVPForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState('yes');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRsvp = { name, email, response };

    fetch(`http://localhost:3000/events/${id}`)
      .then(response => response.json())
      .then(event => {
        const updatedRsvps = [...event.rsvps, newRsvp];

        return fetch(`http://localhost:3000/events/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ rsvps: updatedRsvps })
        });
      })
      .then(response => response.json())
      .then(() => {
        alert('RSVP submitted successfully!');
        navigate(`/events/${id}`);
      })
      .catch(error => {
        console.error('Error submitting RSVP:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Navbar />
      <h2>RSVP for Event</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Will you attend?
        <select value={response} onChange={(e) => setResponse(e.target.value)}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
      <br />
      <button className="Sub" type="submit">Submit RSVP</button>
    </form>
  );
};

export default RSVPForm;