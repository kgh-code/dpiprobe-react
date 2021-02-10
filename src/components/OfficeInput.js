import  React from 'react'

const OfficeInput = (props) => {
  return (
    <input  className="input" type="text" onChange={props.changed} value={props.officeId} placeholder="Office Number"/>
  );
}

export default OfficeInput
