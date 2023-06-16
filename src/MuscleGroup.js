import React, { useState, useEffect } from "react";
import Exercise from "./Exercise";

function MuscleGroup() {
    const [muscleGroup, setMuscleGroup] = useState({
        exercises: []
    });

    const [exerciseFormFlag, setExerciseFormFlag] = useState(false);

    return (
        <div>
            <h1>muscle group</h1>
        </div>
    )
}

export default MuscleGroup;