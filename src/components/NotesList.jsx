import React, { useState } from "react";

function NotesList(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function addNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleFormChange(event) {
    const { name, value } = event.target;

    setNote((oldNote) => {
      return {
        ...oldNote,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleFormChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          value={note.content}
          onChange={handleFormChange}
          rows="3"
        />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default NotesList;
