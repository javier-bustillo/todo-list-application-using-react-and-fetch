import React, { useState } from "react";
import AnyComponent from "./anyComponent.jsx";

const Home = () => {
  const [state, setState] = useState("");
  const [state1, setState1] = useState([]);

  const handleState = (e) => {
    setState(e.target.value);
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setState1(state);
    
  };
  console.log(setState1([...state1, state]));

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <input
          type="text"
          className="form-control"
          placeholder="Your task here"
          aria-label="Your task here"
          aria-describedby="basic-addon1"
          onChange={handleState}
        />
        <AnyComponent state={state} />
      </div>
    </form>
  );
};

export default Home;
