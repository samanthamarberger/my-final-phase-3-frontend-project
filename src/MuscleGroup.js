import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Exercise from "./Exercise";
import ExerciseForm from "./ExerciseForm";

function MuscleGroup(props) {
    const [muscleGroup, setMuscleGroup] = useState({
        exercises: []
    });

    const [exerciseFormFlag, setExerciseFormFlag] = useState(false);

    const params = useParams();

    useEffect(() => {
        fetch(`http://localhost:9292/muscle_groups/${params.id}`)
        .then((r) => r.json())
        .then ((muscleGroup) => setMuscleGroup(muscleGroup))
    }, [])

    const exercises = muscleGroup.exercises.map((exercise) => <Exercise key={exercise.id} exercise={exercise} />)

    // function addExercise(exercise) {
    //     fetch(`http://localhost:9292/muscle_groups`,{
    //         method: "POST",
    //         header: {

    //         },
    //         body: json.stringify({
    //             name: exercise.name,
    //             muscle_group_id: params.id
    //         })
    //     })
    // }

    return (
        <div>
            <br />
            <h2>{muscleGroup.name}</h2>
            <hr/>
            <h3>Exercises:</h3>
            <br />
            {exercises}
            <br />
            <hr />
            <ExerciseForm mgId={params.id}/>
        </div>
    )
}

export default MuscleGroup;