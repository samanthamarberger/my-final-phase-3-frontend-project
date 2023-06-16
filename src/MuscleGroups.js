import React, { useState, useEffect } from "react";
import MuscleGroupLink from "./MuscleGroupLink";


function MuscleGroups() {
   const [muscleGroups, setMuscleGroups] = useState([]);
   const [muscleGroupFormFlag, setMuscleGroupFormFlag] = useState(false);

   useEffect(() => {
    fetch('http://localhost:9292/muscle_groups')
    .then ((r) => r.json())
    .then ((musclegroups) => setMuscleGroups(musclegroups))
   }, [])

   const muscleGroupsList = muscleGroups.map((muscleGroup) => <MuscleGroupLink key={muscleGroup.id} muscleGroup={muscleGroup} />)
    return (
        <div>
            <ul>
                {muscleGroupsList}
            </ul>
        </div>
    )

}

export default MuscleGroups;