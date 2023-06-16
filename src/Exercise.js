import React from "react";

function Exercise({ exercise }){

return(
    <div>
        <br />
        <h3>{exercise.name}</h3>
        <img src={exercise.image_url}/>
        <h2>{exercise.how_to_do}</h2>
    </div>
)
}

export default Exercise;