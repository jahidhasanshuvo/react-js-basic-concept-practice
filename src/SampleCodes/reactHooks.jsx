import React from "react";
import { useState, useEffect, useLayoutEffect } from "react";

const ChildElem = (props) => {
  useEffect(() => {
    console.log("child mounted");
  }, []);
  return <button onClick={props.func}>child elem</button>;
};

const ReactHooks = () => {
  const [state, setState] = useState({});
  const stateChange = () => {
    console.log("state changer funciton on btn click", state);
    setState({ ...state, name: Math.random() });
  };
  const anotherFunciton = () => {
    console.log("another function", state);
    return Math.random();
  };
  useLayoutEffect(() => {
    console.log("uselayout effect call");
  }, []);
  useEffect(() => {
    console.log(
      "use effect with empty Array only renders when initial render of component"
    );
  }, []);
  useEffect(() => {
    console.log("use effect with param");
  }, [state.name]);
  useEffect(() => {
    console.log("use effect without 2nd param render every time");
  });

  // how to handle await function in useeffect
  useEffect(() => {
    console.log("Before async Call..............async test inside useeffect. ");

    (async (cb) => {
      await new Promise((resolve) =>
        setTimeout(() => resolve("promise resolved"), 4000)
      );
      cb();
      console.log(
        "after await we call everything here, if we don't want to pass callback"
      );
    })(afterCallback);
    function afterCallback() {
      console.log(
        "After async Call..............async test inside useeffect. "
      );
    }
  }, []);
  return (
    <div>
      <p>Teast react Hooks</p>
      <p>Changes: {state.name}</p>
      <ChildElem func={anotherFunciton} />
      <button onClick={stateChange}>Change state</button>
    </div>
  );
};

export default ReactHooks;
