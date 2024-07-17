// import React, { useContext, useState } from "react";
// import NoteContext from "../context/notes/NoteContext";

// function AddNote() {
//   const context = useContext(NoteContext);
//   const { addNote } = context;
//   const [note, setNote] = useState({ title: "", description: "", tag: "" });

//   const handleSubmit = (e) => {

//   }
//   const onChange = (e) => {
//     setNote({...note,[e.target.name]: e.target.value,});

//   }
//   return (
//     <div className=" flex  bg-green-400 p-2 rounded-md w-96">
//       <form className="max-w-sm mx-auto">
//         <div className="mb-2">
//           <label
//             htmlFor="title"
//             className="block mb-2 text-sm font-medium text-gray-900 "
//           >
//             Title
//           </label>
//           <input
//           onChange={onChange}
//             type="text"
//             id="title"
//             name="title"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Enter note title"
//             required
//           />
//         </div>
//         <div className="mb-2">
//           <label
//             htmlFor="description"
//             className="block mb-2 text-sm font-medium text-gray-900 "
//           >
//             Description
//           </label>
//           <textarea
//           Onchange={onChange}
//             id="description"
//             name="description"
//             rows="3"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Enter note description"
//             required
//           ></textarea>
//         </div>
//         <div className="mb-2">
//           <label
//             htmlFor="tag"
//             className="block mb-2 text-sm font-medium text-gray-900 "
//           >
//             Tag
//           </label>
//           <input
//           Onchange={onChange}
//             type="text"
//             id="tag"
//             name="tag"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Enter note tag"
//             required
//           />
//         </div>
//         <div className="flex items-start mb-1"></div>
//         <button
//         onClick={handleSubmit}
//           type="submit"
//           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddNote;
import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

function AddNote() {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleSubmit = (e)=>{
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title: "", description: "", tag: ""})
}

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className=" p-4 rounded-md w-full max-w-3xl mx-auto">
      <form className="flex flex-wrap justify-between items-center gap-2" >
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="title" className="block mb-1 text-sm font-medium text-gray-900">Title</label>
          <input
            onChange={onChange}
            type="text"
            id="title"
            name="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter note title"
            value={note.title}
            required
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="description" className="block mb-1 text-sm font-medium text-gray-900">Description</label>
          <textarea
            onChange={onChange}
            id="description"
            name="description"
            rows="3"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter note description"
            value={note.description}
            required
          ></textarea>
        </div>
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="tag" className="block mb-1 text-sm font-medium text-gray-900">Tag</label>
          <input
            onChange={onChange}
            type="text"
            id="tag"
            name="tag"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter note tag"
            value={note.tag}
            required
          />
        </div>
        {/* <div className="flex items-start justify-center -mb-4"> */}
          <button>
          <a
          onClick={handleSubmit}
            type="submit"
            className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </a>
          </button>
        {/* </div> */}
      </form>
    </div>
  );
}

export default AddNote;
