import react, { useEffect, useState } from "react";
import API from "../features/api";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [notesData, setNotesData] = useState();
  const [editPopup, setEditPopup] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editId, setEditId] = useState(null);

 

  const handleDelete = async (id) => {
    try {
      const response = await API.delete(`/notes/${id}`);
      console.log("note is deleted ", response.data);
      setNotesData((prev) => prev.filter((note) => note._id !== id));
    } catch (error) {
      console.log("err in handle delete", error);
    }
  };

  const handleEdit = (note) => {
    setEditId(note._id);
    setEditTitle(note.title);
    setEditContent(note.content);
    setEditPopup(true);
  };

  const handleUpdate = async () => {
    try {
      const response = await API.put(`/notes/${editId}`, {
        title: editTitle,
        content: editContent,
      });

      // Update UI without refetch
      setNotesData((prev) =>
        prev.map((note) =>
          note._id === editId
            ? { ...note, title: editTitle, content: editContent }
            : note
        )
      );

      setEditPopup(false);
    } catch (error) {
      console.log("err in update", error);
    }
  };

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true);
        const res = await API.get("/notes");
        console.log(res.data.notes);
        setNotesData(res.data.notes);
      } catch (error) {
        console.log("error in fetchNotes", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);
  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className="flex gap-4 bg-gray-600 p-4">
          {notesData?.map((note, index) => (
            <div
              key={index}
              className="relative w-1/6 bg-white p-6 rounded shadow"
            >
              <button
                onClick={() => handleDelete(note._id)}
                className="absolute top-2 right-2 text-red-500 font-bold"
              >
                Delete
              </button>

              <button
                onClick={() => handleEdit(note)}
                className="absolute top-2 left-2 text-blue-500"
              >
                ✏️
              </button>

              <h1 className="font-bold text-lg mt-6">{note.title}</h1>
              <p className="text-sm text-gray-700">{note.content}</p>
            </div>
          ))}
        </div>
      )}















 <div>
    {editPopup && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-5 rounded shadow w-1/3">
          <h2 className="font-bold text-lg mb-2">Edit Note</h2>
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full border p-2 mb-2"
          />
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="w-full border p-2 mb-3"
          />

          <div className="flex justify-end gap-2">
            <button
              onClick={() => setEditPopup(false)}
              className="px-3 py-1 bg-gray-400 text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdate}
              className="px-3 py-1 bg-blue-500 text-white"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    )}
  </div>;




    </div>
    
  );
};

export default Home;
