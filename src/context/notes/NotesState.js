import react, { useState } from "react";

import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:8000";
  const initialNotes = [];
  const [notes, setNotes] = useState(initialNotes);
  //add a note
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5NTVmZThjOGE4N2ZkZGRlMTk4OTg5In0sImlhdCI6MTcyMTA2NTQ0OH0.G4SOBqvnQLlODaFUijlJMdvOOFr7IkN-L-mP-0vhy2c",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  
  //delete a note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5NTVmZThjOGE4N2ZkZGRlMTk4OTg5In0sImlhdCI6MTcyMTA2NTQ0OH0.G4SOBqvnQLlODaFUijlJMdvOOFr7IkN-L-mP-0vhy2c"
      },
      body: JSON.stringify({title, description, tag})
    });

    const note = await response.json();
    setNotes(notes.concat(note))
  }

 
  const deleteNote = async (id) => {
    //api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5NTVmZThjOGE4N2ZkZGRlMTk4OTg5In0sImlhdCI6MTcyMTA2NTQ0OH0.G4SOBqvnQLlODaFUijlJMdvOOFr7IkN-L-mP-0vhy2c",
      },
      
    });
    const json = response.json();
    console.log("deletenote method: ",json);

    console.log("deleting the note with id: " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //edit a note
  const editNote = async (id, title, description, tag) => {
    //api call to edit
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5NTVmZThjOGE4N2ZkZGRlMTk4OTg5In0sImlhdCI6MTcyMTA2NTQ0OH0.G4SOBqvnQLlODaFUijlJMdvOOFr7IkN-L-mP-0vhy2c",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
        break;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
