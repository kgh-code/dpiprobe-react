import React from 'react';

const RunQueryButton = props => {
  return(
    <button class="button  has-background-link-light" onClick={props.clicked}>Get DPI Status {props.count}</button>
  )
};
export default RunQueryButton;
