import React from "react";
import {useMapData} from "../MapDataProvider";
import searchAddress from "../function/searchAddress";

type Props = {
  GOOGLE_API_KEY: string;
}

const Button:React.FC<Props> = ({GOOGLE_API_KEY}) => {
  const {inputVal, mapData, handleSetPosition, handleSetVal} = useMapData();
  const submitVal = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    event.preventDefault();
    await searchAddress(inputVal, GOOGLE_API_KEY, handleSetPosition);
    handleSetVal("");
  }
  return (
    <button type="submit" onClick={event => submitVal(event)}>検索</button>
  )
}

export default Button