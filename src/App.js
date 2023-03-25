import React, { useState } from "react";

function ClickCounter(props) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
      <button onClick={handleClick}> Click
        {props.label}: {count}
      </button>
  );
}

export default ClickCounter;
