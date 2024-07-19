import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoteState from "./context/notes/NotesState";

import AboutDev from "./pages/AboutDev";
function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/aboutdev" element={<AboutDev />} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
