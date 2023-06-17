import React, { useState } from "react";

function ExerciseForm() {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [howTo, setHowTo] = useState("");
    const [muscleGroupId, setMuscleGroupId] = useState("");

    return(
        <form>
            <label>New Exercise: </label>
            <input type="text" name="Name"/>
            <input type="text" name="Image URL"/>
            <input type="text" name="How To Do"/>
            <input type="submit"/>
        </form>
    )
}

export default ExerciseForm;