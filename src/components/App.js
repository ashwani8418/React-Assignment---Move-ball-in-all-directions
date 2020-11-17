import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  const reset = () => {
    setRenderBall(false),
    setX(0),
    setY(0),
    setBallPosition({
      left: "0px",
      top: "0px",
    })
  };

  const start= () =>{setRenderBall(true);};

  const renderChoice = () => {
    return renderBall ? (
      <div className="ball" style={{
        position: 'absolute',
        left: ballPosition.left,
        top: ballPosition.top
      }}></div>)
      :(<button onClick={start} className="start"> Start</button>);
  };

  const posiXY =(newX, newY) =>{
    setX(newX);
    setY(newY);
    setBallPosition({
      left: newx+'px',
      top: newY+'px',
    });
  }
  useEffect(()=> {
    const keyprsd =(evt) =>{
      console.log(" Key is pressed",renderBall, x, y);
      if(renderBall) {
        if(evt.keyCode === 37)
        {
          posiXY(x-5, y);
        }
        else if(evt.keyCode === 38)
        {
          posiXY(x, y-5);
        }
        else if(evt.keyCode === 39)
        {
          posiXY(x+5, y);
        }
        else if(evt.keyCode === 40)
        {
          posiXY(x, y+5);
        }
      }
    };
    document.addEventListener("keydown", keyprsd);

    //cleanup of function

    return ()=> document.removeEventListener("keydown", keyprsd);
  });

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()} 
    </div>
  );
};

export default App;
