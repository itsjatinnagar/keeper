import { useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import NotesList from "./components/NotesList";

export default function App() {
    const [notes, setNotes] = useState([]);

    const addNote = (note) => setNotes([...notes, note]);

    const deleteNote = (id) =>
        setNotes(notes.filter((_, index) => index !== id));

    return (
        <>
            <Header />
            <Form callback={addNote} />
            <NotesList notes={notes} callback={deleteNote} />
            <Footer />
        </>
    );
}
