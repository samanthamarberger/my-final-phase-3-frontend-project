import React, { useState, useEffect } from "react";
import MuscleGroupLink from "./MuscleGroupLink";
import MuscleGroupForm from "./MuscleGroupForm";


function MuscleGroups() {
   const [muscleGroups, setMuscleGroups] = useState([]);
   const [muscleGroupFormFlag, setMuscleGroupFormFlag] = useState(false);

   useEffect(() => {
    fetch('http://localhost:9292/muscle_groups')
    .then ((r) => r.json())
    .then ((musclegroups) => setMuscleGroups(musclegroups))
   }, [])

   function frontEndAddMuscleGroup(newMuscleGroup) {
    setMuscleGroups([...muscleGroups, newMuscleGroup])
   }

   function addMuscleGroup(newMuscleGroup) {
    fetch("http://localhost:9292/muscle_groups", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newMuscleGroup),
        })
        .then((r) => r.json())
        .then((muscleGroup) => frontEndAddMuscleGroup(muscleGroup))
   }

//    function deleteMuscleGroup(muscleId) {
//     fetch(`http://localhost:9292/muscle_groups/${muscleId}`, {
//             method: "DELETE",
//         })
//         .then((r) => r.json())
//         .then(() => frontEndDeleteMuscleGroup(muscleId));
//     }

//     function frontEndDeleteMuscleGroup(muscleId) {
//         const updatedMuscleGroups = muscleGroups.filter((muscleGroup) => muscleGroup.id !== muscleId);
//         setMuscleGroups([updatedMuscleGroups]);
//     }

   const muscleGroupsList = muscleGroups.map((muscleGroup) => <MuscleGroupLink key={muscleGroup.id} muscleGroup={muscleGroup}/>)
    return (
        <div>
            <ul>
                {muscleGroupsList}
            </ul>
            <MuscleGroupForm onAddMuscleGroup={addMuscleGroup}/>
        </div>
    )

}

export default MuscleGroups;