import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Events from "./screens/Events";
import EventDetails from "./screens/EventDetails";
import CreateEvent from "./screens/CreateEvent";
import NotFound from "./screens/NotFound";
import EventsLayout from "./screens/EventsLayout";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/Events">Events</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Events" element={<EventsLayout />}>
          <Route index element={<Events />} />
          <Route path=":id" element={<EventDetails />} />
          <Route path="new" element={<CreateEvent />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
