import React, { useState } from "react";

// using state I want to crete a function that will allow me to change the how to section.
// I will have conditional reasoning where if edit is on, the how to becomes input and,
// if it is not on it will just remain a paragraph. When the edit is on the button will 
// become save and once the save button is pushed the new update will be sent to the server. 

function Exercise({ exercise, onEditExercise, onDeleteExercise }){

    const [tempHowTo, setTempHowTo] = useState(exercise.how_to_do);
    const [editButton, setEditButton] = useState(false);

    function getButton() {
        if(editButton) {
            return null
        }
        else {
            return (
                <button className="editButton" 
                    onClick={() => setEditButton(!editButton)}>
                        🖊️ Edit
                 </button>)
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        onEditExercise(tempHowTo, exercise.id);
        setEditButton(false);
    }

    function editHowTo() {
        if(editButton) {
            return (
                <form onSubmit={handleSubmit}>
                    <textarea 
                        style={{ height: '100px', width: '300px' }}
                        type="text" 
                        value={tempHowTo}
                        onChange={(e) => setTempHowTo(e.target.value)}
                    />
                    <button type="submit">Save</button>
                </form>
            )
        }
        else {
            return <p>{exercise.how_to_do}</p>
        }
    }

return(
    <div>
        <br />
        <h3>{exercise.name}</h3>
        <img src={exercise.image_url}/>
        {editHowTo()}
        {getButton()}
        <button className="deleteButton" onClick={() => onDeleteExercise(exercise)}>🗑️</button>
        <hr/>
    </div>
)
}

export default Exercise;