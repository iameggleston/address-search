import React from 'react'

type Props = {
  val: string;
  onChangeVal: (event: React.ChangeEvent) => void;
}

const Input: React.FC<Props> = ({val, onChangeVal}) => {
  return (
    <input type="text" value={val} onChange={event => onChangeVal(event)} id="address" />
  )
}

export default Input