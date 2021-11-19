import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function KeyTest() {
  const [items, setItem] = useState([]);
  useEffect(() => {
    console.log(items);
  }, [items]);
  return (
    <div>
      <button
        onClick={() => {
          setItem([Math.random(), ...items]);
        }}
      >
        generate new
      </button>
      {items.map((item, index) => (
        <h5 key={"index"}>{item}</h5>
      ))}
    </div>
  );
}

export default KeyTest;
