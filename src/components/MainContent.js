// import React,{useContext, useEffect,useState} from "react";
// import Navbar from "./Navbar";
// import NoteContext from "../context/notes/NoteContext";
// import NoteIteam from "./NoteIteam";
// import AddNote from "./AddNote";

// function MainContent() {
//   const name = "Aayush";
//   const context = useContext(NoteContext);
//   const{notes,getNotes} = context;
//   // const [showAddNote, setShowAddNote] = useState(false);
//   useEffect(() => {
//     getNotes();
//   }, []);
//   return (
//     <>
//       <div id="content" className=" md:w-full bg-violet-400 pl-12  ">
//         <Navbar />
//         <div className=" mt-6 text-center">
//           <div className="flex">
//             <h1>
//               <span className="text-3xl font-normal">Hello, </span>
//               <span className="text-3xl">{name}</span>
//             </h1>
            
//             <span className="text-3xl ">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-10 w-10 ml-3 "
//                 viewBox="0 0 512 512"
//               >
//                 <path
//                   fill="#ffd3b6"
//                   d="M238.4 255.5c-9.2-3.1-27.5-5-45.4 37.2c-2.9 6.9-7.1 12.6-8 7.3V154c0-10.2-8-18.4-18.2-18.4s-18.5 8.2-18.5 18.4v92.9c0 8.7-11.2 9.4-13.2 2.3v-111c0-10.2-8-18.4-18.2-18.4s-18.5 8.2-18.5 18.4v111.2c-1.4 6.8-11.4 6.5-12.2-.8v-97.1c0-10.2-8-18.4-18.2-18.4s-18.5 8.2-18.5 18.4v95.6c-.1.1-.1.4-.1.7c0 8.3-10.7 9.1-12.7 2.3v-68.5c0-10.2-8-18.4-18.2-18.4c-10.2.1-18.5 8.4-18.5 18.5v161.1c0 32.7 19.2 60.9 47 74V443c0 10.2 8.3 18.4 18.4 18.4h73.7c10.2 0 18.4-8.3 18.4-18.4v-18.6c12.2-1.4 22.9-7.8 29.8-17.3c.1-.1.2-.3.3-.4c.2-.3.4-.5.6-.8c5.6-6.4 34.9-78.1 58.5-126.6c3.8-9.5.9-20.7-8.3-23.8"
//                 />
//                 <path
//                   fill="#00beea"
//                   d="M273.2 44.5c-.5-.7-1.4-1.1-2.2-1.1h-30.9c-.9 0-1.7.4-2.2 1.1c-.5.7-.7 1.6-.5 2.5l15.4 55.5c.3 1.2 1.4 2.1 2.7 2.1c1.3 0 2.4-.8 2.7-2.1L273.6 47c.3-.9.1-1.8-.4-2.5m81.3 38.2l-21.8-21.8c-.6-.6-1.5-.9-2.4-.8c-.9.1-1.6.6-2.1 1.4l-28.3 50.2c-.6 1.1-.4 2.5.5 3.4c.5.5 1.3.8 2 .8c.5 0 .9-.1 1.4-.4L354 87.2c.8-.4 1.3-1.2 1.4-2.1c0-.9-.3-1.7-.9-2.4m-142.5 29l-28.3-50.2c-.4-.8-1.2-1.3-2.1-1.4c-.9-.1-1.7.2-2.4.8l-21.8 21.8c-.6.6-.9 1.5-.8 2.4s.6 1.6 1.4 2.1l50.2 28.3c.4.2.9.4 1.4.4c.7 0 1.4-.3 2-.8c.8-.9 1-2.3.4-3.4"
//                 />
//                 <path
//                   fill="#ffd3b6"
//                   d="M493.4 163.3c-10.2 0-18.2 8.2-18.2 18.4v68.5c-2 6.8-12.7 6-12.7-2.3c0-.3 0-.5-.1-.7v-95.6c0-10.1-8.3-18.4-18.5-18.4s-18.2 8.2-18.2 18.4v97.1c-.7 7.3-10.8 7.5-12.2.8V138.2c0-10.1-8.3-18.4-18.5-18.4s-18.2 8.2-18.2 18.4v110.9c-2 7.1-13.2 6.4-13.2-2.3V154c0-10.2-8.3-18.4-18.5-18.4s-18.2 8.2-18.2 18.4v146.1c-1 5.3-5.1-.4-8-7.3c-17.8-42.2-36.2-40.3-45.4-37.2c-9.2 3.1-12.1 14.2-8.3 23.7c23.6 48.5 52.9 120.2 58.5 126.6c.2.3.4.5.6.8c.1.1.2.3.3.4c6.9 9.4 17.6 15.9 29.8 17.3V443c0 10.2 8.3 18.4 18.4 18.4h73.7c10.2 0 18.4-8.3 18.4-18.4v-26.2c27.8-13.1 47-41.3 47-74V181.7c0-10.1-8.3-18.4-18.5-18.4"
//                 />
//                 <path
//                   fill="#f2c7aa"
//                   d="M430.2 424.5h-14.9l.1.1h-57c-1.3 0-2.6-.1-3.9-.3v16.3c3.3 1.4 6.4 2.3 9.1 2.3h92.1c2.7 0 5.9-1.1 9.3-2.8v-23.3c-10.6 4.9-22.4 7.7-34.8 7.7m-276.6.1h-57l.1-.1h-15c-12.4 0-24.2-2.8-34.7-7.7v23.3c3.4 1.7 6.5 2.8 9.3 2.8h92.1c2.7 0 5.8-.9 9.1-2.3v-16.3c-1.3.2-2.6.3-3.9.3"
//                 />
//               </svg>
//             </span>
//           </div>
          
//         </div>
//         <span className="text-gray-500 font-light">
//           All your notes are here, in one place!
//         </span>
//         <div className="w-96 bg-red-300">
//         <AddNote/>
//         </div>
//         <div className=" mt-4  w-full p-2">
//             {/* change color to green to see box */}
          
//           <div className="  grid grid-cols-4 gap-x-0">
//             {/* 1st */}
            
//             {notes.map((note)=>{
//               return <NoteIteam key={note._id} note={note}/>
//             })}
//           </div>
         
//         </div>
        
//       </div>
//     </>
//   );
// }

// export default MainContent;
////////////////////////////////////////////
// import React, { useContext, useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import NoteContext from "../context/notes/NoteContext";
// import NoteIteam from "./NoteIteam";
// import AddNote from "./AddNote";

// function MainContent({showAddNote}) {
//   const name = "Aayush";
//   const context = useContext(NoteContext);
//   const { notes, getNotes } = context;

//   useEffect(() => {
//     getNotes();
//   }, []);

//   return (
//     <>
//       <div id="content" className="h-full md:w-full pl-12  flex flex-col">
//         <Navbar />
//         <div className="mt-6 text-center">
//           <div className="flex">
//             <h1>
//               <span className="text-3xl font-normal">Hello, </span>
//               <span className="text-3xl">{name}</span>
//             </h1>
//             <span className="text-3xl">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 ml-3" viewBox="0 0 512 512">
//                 <path fill="#ffd3b6" d="M238.4 255.5c-9.2-3.1-27.5-5-45.4 37.2c-2.9 6.9-7.1 12.6-8 7.3V154c0-10.2-8-18.4-18.2-18.4s-18.5 8.2-18.5 18.4v92.9c0 8.7-11.2 9.4-13.2 2.3v-111c0-10.2-8-18.4-18.2-18.4s-18.5 8.2-18.5 18.4v111.2c-1.4 6.8-11.4 6.5-12.2-.8v-97.1c0-10.2-8-18.4-18.2-18.4s-18.5 8.2-18.5 18.4v95.6c-.1.1-.1.4-.1.7c0 8.3-10.7 9.1-12.7 2.3v-68.5c0-10.2-8-18.4-18.2-18.4c-10.2.1-18.5 8.4-18.5 18.5v161.1c0 32.7 19.2 60.9 47 74V443c0 10.2 8.3 18.4 18.4 18.4h73.7c10.2 0 18.4-8.3 18.4-18.4v-18.6c12.2-1.4 22.9-7.8 29.8-17.3c.1-.1.2-.3.3-.4c.2-.3.4-.5.6-.8c5.6-6.4 34.9-78.1 58.5-126.6c3.8-9.5.9-20.7-8.3-23.8" />
//                 <path fill="#00beea" d="M273.2 44.5c-.5-.7-1.4-1.1-2.2-1.1h-30.9c-.9 0-1.7.4-2.2 1.1c-.5.7-.7 1.6-.5 2.5l15.4 55.5c.3 1.2 1.4 2.1 2.7 2.1c1.3 0 2.4-.8 2.7-2.1L273.6 47c.3-.9.1-1.8-.4-2.5m81.3 38.2l-21.8-21.8c-.6-.6-1.5-.9-2.4-.8c-.9.1-1.6.6-2.1 1.4l-28.3 50.2c-.6 1.1-.4 2.5.5 3.4c.5.5 1.3.8 2 .8c.5 0 .9-.1 1.4-.4L354 87.2c.8-.4 1.3-1.2 1.4-2.1c0-.9-.3-1.7-.9-2.4m-142.5 29l-28.3-50.2c-.4-.8-1.2-1.3-2.1-1.4c-.9-.1-1.7.2-2.4.8l-21.8 21.8c-.6.6-.9 1.5-.8 2.4c.1.9.6 1.6 1.4 2.1l50.2 28.3c.4.2.9.4 1.4.4c.8 0 1.5-.3 2-.8c.9-.9 1.1-2.3.5-3.4" />
//                 <path fill="#f2bc0e" d="M253.2 37.2c.3.9 1.1 1.5 2.1 1.5c8.6 0 15.7-7.1 15.7-15.7S263.9 7.2 255.3 7.2s-15.7 7.1-15.7 15.7c0 .9.2 1.8.5 2.7c.3.8.1 1.7-.4 2.4c-.5.7-1.4 1.1-2.2 1.1c-.3 0-.7-.1-1-.2c-2.1-.7-4.4-1.1-6.6-1.1c-11.6 0-21 9.4-21 21c0 11.6 9.4 21 21 21c.5 0 .9.2 1.3.4c.8.4 1.3 1.2 1.4 2.1c.1.9-.3 1.8-.9 2.4c-4.5 4.5-7 10.4-7 16.7c0 13 10.6 23.6 23.6 23.6c13 0 23.6-10.6 23.6-23.6c0-6.3-2.5-12.2-7-16.7c-.6-.6-1-1.5-.9-2.4c.1-.9.6-1.7 1.4-2.1c.4-.2.9-.4 1.3-.4c11.6 0 21-9.4 21-21c0-11.6-9.4-21-21-21c-2.2 0-4.4.4-6.6 1.1c-.9.3-1.9.1-2.6-.6c-.7-.6-1-1.6-.7-2.5" />
//               </svg>
//             </span>
//           </div>
//         </div>
//         {/* <AddNote/> */}
//         <div className="flex justify-center">
//         {showAddNote ? (
//           <AddNote />
//         ) : ( null
        
//         )}
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//             {notes.map((note) => {
//               return <NoteIteam key={note._id} note={note} />;
//             })}
//           </div>
//       </div>
//     </>
//   );
// }

// export default MainContent;
import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import NoteContext from "../context/notes/NoteContext";
import NoteIteam from "./NoteIteam";
import AddNote from "./AddNote";

function MainContent({ showAddNote }) {
  const name = "Aayush";
  const context = useContext(NoteContext);
  const { notes, getNotes } = context;

  useEffect(() => {
    getNotes();
  }, []);
  

  return (
    <>
      <div id="content" className="h-full w-full bg-red-300 flex flex-col overflow-y-auto">
        <Navbar />
        <div className="mt-6 text-center">
          <div className="flex  justify-center">
            <h1>
              <span className="text-3xl font-normal">Hello, </span>
              <span className="text-3xl">{name}</span>
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 overflow-auto">
          {notes.map((note) => (
            <NoteIteam key={note._id} note={note} />
          ))}
        </div>
      </div>
    </>
  );
}

export default MainContent;

