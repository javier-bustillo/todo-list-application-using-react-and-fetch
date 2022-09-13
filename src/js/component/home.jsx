import React, { useState, useEffect } from "react";

const Home = () => {
  const [input, setInput] = useState(""); /* tareas */
  const [inputList, setInputList] = useState([]); /* lista tareas */

  const handleState = (e) => {
    setInput({ label: e.target.value, done: false });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    /* setea el valor de ...inputList con los valores de input */
    /* inputList lista de states */
    setInputList([...inputList, input]);
  };

  const handleButton = (index) => () =>
    setInputList((items) => items.filter((_, i) => i !== index));

  /*  const deleteTask = (index) => {
    let filter = taskList.filter((value, i) => index !== i);
    setTaskList(filter);
  }; */

  useEffect(() => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/javier-bustillo", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(inputList),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [inputList]);

  useEffect(() => {
    {
      fetch("https://assets.breatheco.de/apis/fake/todos/user/javier-bustillo")
        .then((response) => response.json())
        .then((data) => setInputList(data));
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="m-5 d-flex justify-content-center">Todo List</h1>
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
        <div className="container">
          <ul className="list-group my-5">
            {inputList.map(function (input, index) {
              return (
                <li key={index} className="list-group-item position-relative">
                  {input.label}

                  <button
                    type="button"
                    className="btn-close position-absolute top-50 end-0 translate-middle"
                    aria-label="Close"
                    onClick={handleButton(index)}
                  ></button>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="mt-3">{inputList.length} items left</p>
      </div>
    </form>
  );
};

export default Home;
