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

    function frontEndAddExercise(exercise) {
        setMuscleGroup({
            exercises: [...muscleGroup.exercises, exercise]
        })
    }

    function addExercise(newExercise) {
        fetch("http://localhost:9292/exercises", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newExercise),
        })
        .then((r) => r.json())
        .then((exercise) => frontEndAddExercise(exercise))
    }

    function editExercise(howTo, exerciseId) {
        fetch(`http://localhost:9292/exercises/${exerciseId}`, {
            method: "PATCH",
            body: JSON.stringify({
                how_to_do: howTo
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((r) => r.json())
        .then((updatedExercise) => frontEndEditExercise(updatedExercise, exerciseId));
    }

    function frontEndEditExercise(updatedExercise, exerciseId) {
        setMuscleGroup(prevMuscleGroup => {
          const updatedExercises = prevMuscleGroup.exercises.map(exercise => {
            if (exercise.id === exerciseId) {
              return { ...updatedExercise };
            }
            return exercise;
          });
      
          return { ...prevMuscleGroup, exercises: updatedExercises };
        });
      }

      function deleteExercise(exercise) {
        fetch(`http://localhost:9292/exercises/${exercise.id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => frontEndDeleteExercise(exercise.id));
    }

    function frontEndDeleteExercise(exerciseId) {
        const updatedExercises = muscleGroup.exercises.filter((exercise) => exercise.id !== exerciseId);
        setMuscleGroup({
            exercises: [...updatedExercises]
        });
    }

    const exercises = muscleGroup.exercises.map((exercise) => 
        (<Exercise key={exercise.id} exercise={exercise} onEditExercise={editExercise} onDeleteExercise={deleteExercise}/>))

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