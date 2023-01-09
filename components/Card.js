import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="pa2 ma2 br3 dib bg-light-pink grow shadow-5">
      <img alt="robot" src={`https://robohash.org/${id}test?200x200`} />

      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
