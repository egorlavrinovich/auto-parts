import { Table as AntTable } from "antd";
import React from "react";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const Table = ({ columns, data }) => (
  <AntTable
    className="main_table"
    columns={columns}
    dataSource={data}
    onChange={onChange}
    size="middle"
    scroll={{
      x: 100,
    }}
  />
);

export default Table;
