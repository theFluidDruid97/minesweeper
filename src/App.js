import { useState } from "react";
import "./App.css";

const App = () => {
  const handleClick = (e) => {
    console.log(e.target.value);
    e.target.setAttribute("clicked", "true");
    e.target.value = "💣";
  };
  let height = 10;
  let width = 10;
  let grid = [];
  for (let j = 0; j < height; j++) {
    grid.push([]);
    for (let i = 0; i < width; i++) {
      grid[j].push({
        clicked: false,
        value: "",
      });
    }
  }
  return (
    <div className="App">
      {grid.map((row, idx) => (
        <p key={idx} value={idx} className="row">
          {row.map((cell, idx2) => (
            <button
              className="cell"
              key={idx2}
              value={cell.value}
              clicked={cell.clicked.toString()}
              onClick={(e) => handleClick(e)}
            >
              {cell.value}
            </button>
          ))}
        </p>
      ))}
    </div>
  );
};

export default App;
