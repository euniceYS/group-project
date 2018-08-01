import React from 'react';
const TextArea = props => {
  return (
    <label>
      {props.label}
      <textarea
        name={props.name}
        value={props.value}
        onChange={props.handlerFunction}
      />
    </label>
  );
};

export default TextArea;
