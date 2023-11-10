import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import NotesList from "./NotesList";

function App() {
  const [noteList, setNoteList] = useState(notes);

  function addNote(newNote) {
    setNoteList((oldNotes) => {
      return [...oldNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNoteList((oldNotes) => {
      return oldNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <NotesList onAdd={addNote} />
      {noteList.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      {/* <dl>{notes.map(Note)}</dl> */}
      <Footer />
    </div>
  );
}

export default App;
