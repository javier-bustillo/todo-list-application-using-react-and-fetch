import React, { useState } from "react";
import AnyComponent from "./anyComponent.jsx";

const Home = () => {
  const [state, setState] = useState("");

  function handleState(e) {
    setState(e.target.value);
  }

  function handleSubmit() {}

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
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Home;
