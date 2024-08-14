import Home from "../pages/Home";
import RSVPForm from "../pages/RSVPForm"
import EventDetails from "../pages/EventDetails";
import Login from "../pages/Login"
import EventAdd from "./EventAdd"
import About from "../pages/about";


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
    },
    {
      path: "/addevent",  
      element: <EventAdd/>,
    },
    {
      path: "/about",  
      element: <About/>,
    }

  ];
  
  export default routes;