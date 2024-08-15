import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const AddEventForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    description: '',
    location: ''
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(() => navigate('/'))
    .catch(error => console.error('Error adding event:', error))
  }

  return (
    <>
      <Navbar />
      <div className='adder'>
        <form onSubmit={handleSubmit}>
          <h2>Add New Event</h2>
          <input
            name="name"
            placeholder="Event Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            name="date"
            type="date" 
            placeholder="Event Date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <textarea className='textarea'
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <button type="submit">Add Event</button>
        </form>
      </div>
    </>
  )
}

export default AddEventForm