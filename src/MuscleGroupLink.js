import React from "react";
import { Link } from "react-router-dom";

function MuscleGroupLink({ muscleGroup, onDeleteMuscleGroup }) {

    return(
        <div>
            <Link to={`/muscle-groups/${muscleGroup.id}`} >
                <h3>{muscleGroup.name}</h3>
                <img src={muscleGroup.image_url}/>
                {/* <button className="deleteButton" onClick={onDeleteMuscleGroup(muscleGroup.id)}>🗑️</button> */}
            </Link>
        </div>
    )
}

export default MuscleGroupLink;