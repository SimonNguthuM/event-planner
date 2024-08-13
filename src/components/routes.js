import Home from "../pages/Home";
import RSVPForm from "../pages/RSVPForm"

const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/events/:id/rsvp",
      element: <RSVPForm />,
    }
  ];
  
  export default routes;