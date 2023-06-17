import React, { useState } from "react";

function ExerciseForm() {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [howTo, setHowTo] = useState("");
    const [muscleGroupId, setMuscleGroupId] = useState("");

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