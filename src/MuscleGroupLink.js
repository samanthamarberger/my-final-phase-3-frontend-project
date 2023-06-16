import React from "react";
import { Link } from "react-router-dom";

function MuscleGroupLink({ muscleGroup }) {

    return(
        <div>
            <Link to={`/muscle-groups/${muscleGroup.id}`} >
                <h3>{muscleGroup.name}</h3>
            </Link>
        </div>
    )
}

export default MuscleGroupLink;