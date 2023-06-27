import React, { useState } from "react";

function MuscleGroupForm({ onAddMuscleGroup }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    function handleNameAdd(e) {
        setName(e.target.value);
    }

    function handleImageAdd(e) {
        setImage(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newMuscleGroup = {
            name: name,
            image_url: image,
            exercises: []
        };
        onAddMuscleGroup(newMuscleGroup); 

        setName("");
        setImage("");
    }

    return(
        <div className="form">
            <form onSubmit={(e) => handleSubmit(e)} className="NewMuscleGroup">
                <label>Add a new muscle group</label>
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
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default MuscleGroupForm;