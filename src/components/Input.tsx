import React from 'react'
import {useMapData} from "../MapDataProvider"

const Input: React.FC = () => {
  const {inputVal,handleSetVal} = useMapData();
  const onChangeVal = (event: React.ChangeEvent<HTMLInputElement>): void => {
    handleSetVal(event.target.value);
  };
  return (
    <input type="text" value={inputVal} onChange={event => onChangeVal(event)} id="address" />
  )
}

export default Input