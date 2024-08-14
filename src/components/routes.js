import Home from "../pages/Home";
import RSVPForm from "../pages/RSVPForm"
import EventDetails from "../pages/EventDetails";
import Login from "../pages/Login"


const routes = [
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/events/:id/rsvp",
      element: <RSVPForm />,
    },
    {
      path: "/events/:id",  
      element: <EventDetails />,
    },
    {
      path: "/login",  
      element: <Login />,
    }
  ];
  
  export default routes;