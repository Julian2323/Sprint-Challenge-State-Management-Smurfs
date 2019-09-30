import React from "react";


const SmurfCard = ({ smurfdetails }) => {
  return (
    <div className="smurf-card ">
      <p>
        <h1>Name:</h1> {smurfdetails.name}
      </p>
      <p>
        <h1>Age:</h1> {smurfdetails.age}
      </p>
      <p>
        <h1>Height:</h1> {smurfdetails.height}
      </p>
    </div>
  );
};

export default SmurfCard;