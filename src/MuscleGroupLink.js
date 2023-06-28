import React from "react";
import { Link } from "react-router-dom";

function MuscleGroupLink({ muscleGroup }) {

    return(
        <div>
            <Link className="link-name" to={`/muscle-groups/${muscleGroup.id}`} >
                <h3>{muscleGroup.name}</h3>
                <img src={muscleGroup.image_url} alt={muscleGroup.name}/>
            </Link>
        </div>
    )
}

export default MuscleGroupLink;