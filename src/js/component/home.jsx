import React, { useState } from "react";

const Home = () => {
  const [input, setInput] = useState(""); /* tareas */
  const [inputList, setInputList] = useState([]); /* lista tareas */

  const handleState = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    /* setea el valor de ...inputList con los valores de input */ 
    /* inputList lista de states */ 
    setInputList([...inputList, input]);
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
        {/* representa de manera gráfica los datos con los valores de inputList */}
        <div className="container bg-secondary">
          <ul className="list-group">
            {inputList.map(function (currentValue, index) {
              return (
                <li key={index} className="list-group-item">
                  {currentValue}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </form>
  );
};

export default Home;
