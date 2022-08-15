import React from 'react';

type Props = {
  submitVal: (event: React.FormEvent) => void;
}

const Button:React.FC<Props> = ({submitVal}) => {
  return (
    <button type="submit" onClick={submitVal}>検索</button>
  )
}

export default Button