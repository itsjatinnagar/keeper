import "./Note.css";

export default function Note(props) {
    return (
        <div className="note-card">
            <div className="card-header">{props.title}</div>
            <div className="card-content">{props.content}</div>
        </div>
    );
}
