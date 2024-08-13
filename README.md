Event Management System
Concept: Build an app to manage and RSVP to events.
Components:
EventList - Displays a list of upcoming events.
EventDetail - Shows details of a selected event.
AddEventForm - Form to add a new event.
RSVPForm - Form to RSVP to an event.
Navbar - Navigation for different routes.
Delete - Deleting an event.
Update - Updating an event
Log in (Authentification)
Routes:
/ - Home
/events - List of events
/events/:id - Event details
/add-event - Form to add a new event
/rsvp/:id - Form to RSVP to an event
API Integration:
Use json-server to handle GET and POST requests for events and RSVPs.