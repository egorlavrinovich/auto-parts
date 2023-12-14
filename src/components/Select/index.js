import { Select as AntSelect } from "antd";
import React from "react";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const Select = ({ defaultValue, data, ...rest }) => (
  <AntSelect
    defaultValue={defaultValue}
    onChange={handleChange}
    options={data}
    {...rest}
  />
);
export default Select;
