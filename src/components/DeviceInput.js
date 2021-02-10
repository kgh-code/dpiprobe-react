import  React from 'react'

const DeviceInput = (props) => {
  return (
    <input  className="input" type="text" onChange={props.changed} value={props.deviceId} placeholder="Device ID"/>
  );
}

export default DeviceInput
