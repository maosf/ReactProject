import React  from "react";
const FanCard = ({id})=>{


    return(
      <>
        <h3>Fan coil</h3>
        <p>
            the room {id} temperature is {id} C
        </p>
      </>

    );

}
export default FanCard;