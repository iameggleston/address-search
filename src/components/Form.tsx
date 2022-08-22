import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

type Props = {
  GOOGLE_API_KEY: string;
}

const Form: React.FC<Props> = ({GOOGLE_API_KEY}) => {
  return (
    <>
      <form>
        <Input />
        <Button GOOGLE_API_KEY={GOOGLE_API_KEY} />
      </form>
    </>
  )
}

export default Form