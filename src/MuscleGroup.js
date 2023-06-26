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


    function addExercise(newExercise) {
        fetch("http://localhost:9292/exercises", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newExercise),
        })
        .then((r) => r.json())
        .then((exercise) => console.log(exercise))
    }

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
            <ExerciseForm mgId={params.id} onAddExercise={addExercise}/>
        </div>
    )
}

export default MuscleGroup;