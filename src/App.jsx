import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    setTask((prev) => [...prev, { title, details }]);
    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    setTask((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row overflow-hidden">
      {/* Form Section */}
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-5 w-full lg:w-1/2 p-6 sm:p-10"
      >
        <h1 className="text-3xl sm:text-4xl font-bold">Add Notes</h1>

        <input
          type="text"
          placeholder="Title"
          className="px-4 py-2 w-full bg-white text-black font-medium border rounded-md outline-none focus:ring-2 focus:ring-gray-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write Details Here"
          className="px-4 py-2 w-full bg-white text-black font-medium h-32 border rounded-md outline-none focus:ring-2 focus:ring-gray-400"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button
          disabled={!title.trim()}
          className="disabled:opacity-50 disabled:cursor-not-allowed bg-gray-300 hover:bg-gray-200 active:bg-gray-400 active:scale-95 text-black font-semibold w-full py-2 rounded-md transition"
        >
          Add Note
        </button>
      </form>

      {/* Notes Section */}
      <div className="w-full lg:w-1/2 lg:border-l border-gray-700 p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold">Recent Notes</h1>

        <div className="mt-6 grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 h-[78vh] overflow-auto pb-10">
          {task.length === 0 && (
            <p className="text-sm text-gray-400">No notes yet.</p>
          )}

          {task.map((elem, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between h-52 w-full bg-cover bg-center rounded-xl text-black p-4"
              style={{
                backgroundImage:
                  "url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')",
              }}
            >
              <div>
                <h3 className="text-lg font-bold leading-tight line-clamp-2">
                  {elem.title}
                </h3>
                <p className="text-xs mt-3 text-gray-700 leading-tight line-clamp-4">
                  {elem.details}
                </p>
              </div>

              <button
                onClick={() => deleteNote(idx)}
                className="text-white font-bold text-xs bg-red-500 py-1 rounded-md active:scale-95"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
