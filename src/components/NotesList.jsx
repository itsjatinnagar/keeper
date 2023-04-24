import Note from "./Note";
import "./NotesList.css";

export default function NotesList(props) {
    return (
        <main className="notes-list">
            {props.notes.map((note, index) => (
                <Note
                    key={index}
                    id={index}
                    {...note}
                    callback={props.callback}
                />
            ))}
        </main>
    );
}
