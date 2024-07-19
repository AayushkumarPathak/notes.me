
import React, { useContext, useEffect, useRef,useState } from "react";
import Navbar from "./Navbar";
import NoteContext from "../context/notes/NoteContext";
import NoteIteam from "./NoteIteam";
import AddNote from "./AddNote";
import { set } from "mongoose";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/user/AuthContext";
function MainContent({ showAddNote }) {
  const {user} = useAuth();
  const context = useContext(NoteContext);
  const { notes, getNotes, editNote } = context;
  let navigate = useNavigate();
  const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
  
  const userName = user ? capitalizeFirstLetter(user.id) : "Guest11";
  const uid = capitalizeFirstLetter(localStorage.getItem("userid"));
  const finalUsername = uid ? uid :"GuestNew";

  useEffect(() => {
    if(localStorage.getItem("token")){
      getNotes();
      
    }
    else{
      navigate("/");
    }
  }, []);
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: "" });
  
  const updateNote = (currNote) => {
    ref.current.click();
    // setNote(note);
    setNote({id:currNote._id, etitle: currNote.title, edescription: currNote.description, etag: currNote.tag});
  }
  

  const handleSubmit = (e) => {
   
    editNote(note.id, note.etitle, note.edescription, note.etag);
    // e.preventDefault();
    refClose.current.click();
   
    // setNote({ title: "", description: "", tag: "" });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  
 

  return (
    <>
    {/* Modal */}
    {/* <!-- Button trigger modal --> */}
<button ref={ref} type="button" className="btn btn-primary hidden" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit note</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        {/* form */}
      <form className="flex flex-wrap justify-between items-center gap-2" >
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="title" className="block mb-1 text-sm font-medium text-gray-900">Title</label>
          <input
            onChange={onChange}
            type="text"
            id="etitle"
            name="etitle"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter note title"
            value={note.etitle}
            required
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="description" className="block mb-1 text-sm font-medium text-gray-900">Description</label>
          <textarea
            onChange={onChange}
            id="edescription"
            name="edescription"
            rows="3"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter note description"
            value={note.edescription}
            required
          ></textarea>
        </div>
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="tag" className="block mb-1 text-sm font-medium text-gray-900">Tag</label>
          <input
            onChange={onChange}
            type="text"
            id="etag"
            name="etag"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter note tag"
            value={note.etag}
            required
          />
        </div>
        
      </form>
      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button disabled={note.etitle.length < 3 || note.edescription.length < 3} onClick={handleSubmit} type="button" className="btn btn-primary">save note</button>
      </div>
    </div>
  </div>
</div>



    {/*  */}
      <div id="content" className="h-full w-full bg-red-300 flex flex-col overflow-y-auto">
        <Navbar />
        <div className="mt-6 text-center">
          <div className="flex  justify-center">
            <h1>
              <span className="text-3xl font-normal">Hello, </span>
              <span className="text-3xl">{finalUsername}</span>
            </h1>
            <span className="text-3xl ml-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 512 512">
                <path fill="#ffd3b6" d="M238.4 255.5c-9.2-3.1-27.5-5-45.4 37.2c-2.9 6.9-7.1 12.6-8 7.3V154c0-10.2-8-18.4-18.2-18.4s-18.5 8.2-18.5 18.4v92.9c0 8.7-11.2 9.4-13.2 2.3v-111c0-10.2-8-18.4-18.2-18.4s-18.5 8.2-18.5 18.4v111.2c-1.4 6.8-11.4 6.5-12.2-.8v-97.1c0-10.2-8-18.4-18.2-18.4s-18.5 8.2-18.5 18.4v95.6c-.1.1-.1.4-.1.7c0 8.3-10.7 9.1-12.7 2.3v-68.5c0-10.2-8-18.4-18.2-18.4c-10.2.1-18.5 8.4-18.5 18.5v161.1c0 32.7 19.2 60.9 47 74V443c0 10.2 8.3 18.4 18.4 18.4h73.7c10.2 0 18.4-8.3 18.4-18.4v-18.6c12.2-1.4 22.9-7.8 29.8-17.3c.1-.1.2-.3.3-.4c.2-.3.4-.5.6-.8c5.6-6.4 34.9-78.1 58.5-126.6c3.8-9.5.9-20.7-8.3-23.8" />
                <path fill="#00beea" d="M273.2 44.5c-.5-.7-1.4-1.1-2.2-1.1h-30.9c-.9 0-1.7.4-2.2 1.1c-.5.7-.7 1.6-.5 2.5l15.4 55.5c.3 1.2 1.4 2.1 2.7 2.1c1.3 0 2.4-.8 2.7-2.1L273.6 47c.3-.9.1-1.8-.4-2.5m81.3 38.2l-21.8-21.8c-.6-.6-1.5-.9-2.4-.8c-.9.1-1.6.6-2.1 1.4l-28.3 50.2c-.6 1.1-.4 2.5.5 3.4c.5.5 1.3.8 2 .8c.5 0 .9-.1 1.4-.4L354 87.2c.8-.4 1.3-1.2 1.4-2.1c0-.9-.3-1.7-.9-2.4m-142.5 29l-28.3-50.2c-.4-.8-1.2-1.3-2.1-1.4c-.9-.1-1.7.2-2.4.8l-21.8 21.8c-.6.6-.9 1.5-.8 2.4c.1.9.6 1.6 1.4 2.1l50.2 28.3c.4.2.9.4 1.4.4c.8 0 1.5-.3 2-.8c.9-.9 1.1-2.3.5-3.4" />
                <path fill="#f2bc0e" d="M253.2 37.2c.3.9 1.1 1.5 2.1 1.5c8.6 0 15.7-7.1 15.7-15.7S263.9 7.2 255.3 7.2s-15.7 7.1-15.7 15.7c0 .9.2 1.8.5 2.7c.3.8.1 1.7-.4 2.4c-.5.7-1.4 1.1-2.2 1.1c-.3 0-.7-.1-1-.2c-2.1-.7-4.4-1.1-6.6-1.1c-11.6 0-21 9.4-21 21c0 11.6 9.4 21 21 21c.5 0 .9.2 1.3.4c.8.4 1.3 1.2 1.4 2.1c.1.9-.3 1.8-.9 2.4c-4.5 4.5-7 10.4-7 16.7c0 13 10.6 23.6 23.6 23.6c13 0 23.6-10.6 23.6-23.6c0-6.3-2.5-12.2-7-16.7c-.6-.6-1-1.5-.9-2.4c.1-.9.6-1.7 1.4-2.1c.4-.2.9-.4 1.3-.4c11.6 0 21-9.4 21-21c0-11.6-9.4-21-21-21c-2.2 0-4.4.4-6.6 1.1c-.9.3-1.9.1-2.6-.6c-.7-.6-1-1.6-.7-2.5" />
              </svg>
            </span>
          </div>
          <span className="text-gray-500 font-light">
           All your notes are here, in one place!
         </span>
        </div>
        
        <div className="flex justify-center ">
          {showAddNote && <AddNote/> }
        </div>
        {/* <div className="container px-4 bg-green-200">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 overflow-auto">
          {notes.map((note) => (
            <NoteIteam key={note._id} updateNote={updateNote} note={note} />
          ))}
        </div>
        </div> */}
        <div className="container px-4 ">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 overflow-auto">
    {notes.map((note,index) => (
      <NoteIteam key={note._id} updateNote={updateNote} note={note} index={index}  />
    ))}
  </div>
</div>

      </div>
    </>
  );
}

export default MainContent;

