import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NoteState from './context/notes/NotesState';
import Try from './pages/Try';
import Alerts from './components/Alerts';
import AddNote from './components/AddNote';
function App() {
  return (
    <>
    <NoteState>
    <BrowserRouter>
    
      <div>
        {/* <Alerts message="This is a message" /> */}
      <Routes>
        <Route path="/test" element={<Try />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/addNote' element={<AddNote/>} />
      </Routes>
      </div>
    </BrowserRouter>
    </NoteState>
    </>
  );
}

export default App;
