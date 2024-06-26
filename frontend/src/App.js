import "./App.css";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";
import { React, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Call from "./pages/call";

const baseUrl = "http://localhost:5000";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/call" element={<LobbyScreen />} />
        <Route exact path="/call/room/:roomId" element={<RoomPage />} /> */}
        <Route exact path="/call" element={<Call />} />
      </Routes>
    </div>
  );
}

export default App;
