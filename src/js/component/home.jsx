import React, { useState } from "react";
import AnyComponent from "./anyComponent.jsx";

const Home = () => {
  const [state, setState] = useState("");
  const newArr = [];

  const handleState = (e) => {
    setState(e.target.value);
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    newArr.push(state);
    const newArr2 = newArr.map((item) =>{return item})

    console.log(newArr2);
  };

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
