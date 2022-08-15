import React, { useState } from 'react'
import Input from "./Input"
import axios from "axios";
import Button from "./Button";

const initialData: string = "";

// API叩いた後に所得できるデータの型
type GoogleGeocodingResponse = {
// results:
// status:
}

const Form = () => {
  const [inputVal, setVal] = useState(initialData);
  const onChangeVal = (event: any) => {
    setVal(event.target.value);
  };
  const GOOGLE_API_KEY = 'AIzaSyDInQCXkbZlVrsQkNo0szP9zvYKyJtHMD0';
  const searchAddress = () => {
    axios.get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        inputVal,
      )}&key=${GOOGLE_API_KEY}`
    )
      .then(response => {
        // 入力値を元に座標の取得が出来なかった場合
      })
      .catch(err => {
        alert(err.message);
        console.log(err);
      });
  }
  const submitVal = async (): Promise<void> => {
    await searchAddress();
    setVal("");
  }
  return (
    <form>
      <Input val={inputVal} onChangeVal={onChangeVal} />
      <Button submitVal={submitVal} />
    </form>
  )
}

export default Form