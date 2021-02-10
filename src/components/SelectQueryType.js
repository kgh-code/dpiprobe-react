import  React from 'react'

const SelectQueryType = (props) => {
  return(
    <select  className="select" value={props.queryType} onChange={props.changed}>
      <option value="">---</option>
      <option value="LTE">DPI Less Than Or Equal To</option>
      <option value="GTE">DPI Greater Than Or Equal To</option>
      <option value="BETWEEN">Between A Range Of DPI's</option>
    </select>
  )
};
export default SelectQueryType
