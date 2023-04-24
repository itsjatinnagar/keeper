import { useState } from "react";

import "./Form.css";

export default function Form(props) {
    const [inputs, setInputs] = useState({ title: "", content: "" });

    const handleChange = (event) => {
        const { value, name } = event.target;
        setInputs((previousValue) => ({ ...previousValue, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        props.callback(inputs);

        setInputs({ title: "", content: "" });
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                    required
                    value={inputs.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    id="content"
                    name="content"
                    placeholder="Take a note..."
                    required
                    value={inputs.content}
                    onChange={handleChange}
                />
                <button>Add Note</button>
            </form>
        </div>
    );
}
