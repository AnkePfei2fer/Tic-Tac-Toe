import React, { useState } from 'react';

function Square(props): JSX.Element {
  // const [value, setValue] = useState(null);
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

export default Square;
