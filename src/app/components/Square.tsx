import React from 'react';

type SquareProps = { value: string | null; onClick: () => void };

function Square(props: SquareProps): JSX.Element {
  // const [value, setValue] = useState(null);
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

export default Square;
