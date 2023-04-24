import "./Note.css";

export default function Note(props) {
    return (
        <div className="note-card">
            <div className="card-header">{props.title}</div>
            <div className="card-content">{props.content}</div>
            <button onClick={() => props.callback(props.id)}>Delete</button>
        </div>
    );
}
