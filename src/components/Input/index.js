import React from "react";
import { Input as AntInput, InputNumber, Typography } from "antd";

const Input = ({ type, defaultValue = "", ...rest }) => {
  return (
    <>
      {type === "textInput" ? (
        <AntInput defaultValue={defaultValue} {...rest} />
      ) : (
        <InputNumber {...rest} />
      )}
    </>
  );
};
export default Input;
