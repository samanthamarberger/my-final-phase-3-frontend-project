import React, { useState } from "react";

function ExerciseForm({ mgId, onAddExercise, setExerciseFormFlag }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [howTo, setHowTo] = useState("");

    function handleNameAdd(e) {
        setName(e.target.value);
    }

    function handleImageAdd(e) {
        setImage(e.target.value);
    }

    function handleHowToAdd(e) {
        setHowTo(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newExercise = {
            name: name,
            image_url: image,
            how_to_do: howTo,
            muscle_group_id: mgId
        };
        onAddExercise(newExercise);

        setName("");
        setImage("");
        setHowTo("");
        setExerciseFormFlag(false);
    }

    return(
        <div className="form">
            <form onSubmit={(e) => handleSubmit(e)} className="NewExercise">
                <label>Add a new exercise</label>
                <label>
                    Name: 
                    <input type="text" name="Name" value={name} onChange={handleNameAdd}/>
                </label>
                <br />
                <label>
                    Image URL:
                    <input type="text" name="Image URL" value={image} onChange={handleImageAdd}/>
                </label>
                <br />
                <label>
                    How To Do:
                    <textarea type="text" name="How To Do" value={howTo}
                         onChange={handleHowToAdd}/>
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ExerciseForm;