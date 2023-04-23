import Note from "./Note";
import notes from "../notes";
import "./NotesList.css";

export default function NotesList() {
    return (
        <main className="notes-list">
            {notes.map((note) => (
                <Note {...note} />
            ))}
        </main>
    );
}
