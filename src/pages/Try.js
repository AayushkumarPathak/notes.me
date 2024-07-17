import React,{useContext, useEffect} from 'react'
import NoteContext from "../context/notes/NoteContext";
function Try() {
    const context = useContext(NoteContext);
    const{notes,setNotes} = context;
    
  return (
    <div className='container'>
      This is testing page.
      {notes.map((note)=>{
        return note.title;
      })}
    </div>
  )
}

export default Try
