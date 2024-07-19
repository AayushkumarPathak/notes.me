import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

function NoteItem(props) {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote, index } = props;

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const colors = [
    "bg-yellow-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-orange-200",
    "bg-lime-200",
  ];
  const bgColor = colors[index % colors.length];

  return (
    <>
      <div className="row my-3">
        <a
          className={`block h-60 overflow-auto custom-scrollbar w-60 p-6 ${bgColor} border border-gray-200 rounded-lg shadow hover:bg-rose-200`}
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {note.title}
          </h5>
          <p className="-mt-2 text-gray-400 font-normal">{note.tag}</p>
          <p className="font-normal text-gray-700">{note.description}</p>
          <p className="text-gray-400 font-light">{formatDate(note.date)}</p>
          <div className=" -mb-5">
            <i
              className="fa-solid fa-trash mx-0 "
              onClick={() => {
                deleteNote(note._id);
              }}
            ></i>
            <i
              className="fa-regular fa-pen-to-square mx-2 "
              onClick={() => {
                updateNote(note);
              }}
            ></i>
          </div>
        </a>
      </div>
    </>
  );
}

export default NoteItem;
