import React from "react";
import { Select as AntSelect, Space } from "antd";
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

// [
//     {
//       value: 'jack',
//       label: 'Jack',
//     },
//     {
//       value: 'lucy',
//       label: 'Lucy',
//     },
//     {
//       value: 'Yiminghe',
//       label: 'yiminghe',
//     },
//     {
//       value: 'disabled',
//       label: 'Disabled',
//       disabled: true,
//     },
//   ]
