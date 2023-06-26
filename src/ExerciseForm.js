import React, { useState } from "react";

function ExerciseForm({ mgId, onAddExercise }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [howTo, setHowTo] = useState("");
    const [muscleGroupId, setMuscleGroupId] = useState("");

    function handleId() {
        setMuscleGroupId(mgId);
    }

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
            muscle_group_id: muscleGroupId
        };
        onAddExercise(newExercise);
    }

    return(
        <div className="form">
            <form>
                <label>Add a new exercise</label>
                <label>
                    Name: 
                    <input type="text" name="Name" value={name}/>
                </label>
                <br />
                <label>
                    Image URL:
                    <input type="text" name="Image URL" value={image}/>
                </label>
                <br />
                <label>
                    How To Do:
                    <input type="text" name="How To Do" value={howTo}/>
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ExerciseForm;