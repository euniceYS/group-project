import React from 'react';

const DropDownInput = props => {
  return (
    <label>
      {props.label}
      <select name={props.name} value={props.value || ''} onChange={props.handlerFunction}>
        <option value='default'>- select -</option>
        <option value='5'>5</option>
        <option value='4'>4</option>
        <option value='3'>3</option>
        <option value='2'>2</option>
        <option value='1'>1</option>
      </select>
    </label>
  );
};

export default DropDownInput;
