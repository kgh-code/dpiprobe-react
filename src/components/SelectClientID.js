import  React from 'react'

const SelectClientID = (props) => {
  return(
    <select  className="select" value={props.value} onChange={props.changed}>
      <option value="0">0 Tesla</option>
      <option value="1">1 Netfix</option>
      <option value="2">2 Jimbos Corner Market</option>
      <option value="3">3 World Of Stuff</option>
      <option value="4">4 WagaMama</option>
      <option value="5">5 Cool Breeze</option>
      <option value="6">6 Forza Punto</option>
      <option value="7">7 The Works</option>
      <option value="8">8 Anything Else</option>
      <option value="9">9 Microsoft Inc</option>
    </select>
  )
};
export default SelectClientID
