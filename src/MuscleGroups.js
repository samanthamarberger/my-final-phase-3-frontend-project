import React, { useState, useEffect } from "react";


function MuscleGroups() {
   const [muscleGroups, setMuscleGroups] = useState([]);
   const [muscleGroupFormFlag, setMuscleGroupFormFlag] = useState(false);

   useEffect(() => {
    fetch('http://localhost:9292/muscle_groups')
    .then ((r) => r.json())
    .then ((musclegroups) => setMuscleGroups(musclegroups))
   }, [])
    return (
        <div>
            <h1> Hi </h1>
        </div>
    )

}

export default MuscleGroups;