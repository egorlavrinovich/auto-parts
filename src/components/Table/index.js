import { Table as AntTable } from "antd";
import React, { useCallback } from "react";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const Table = ({ columns, data, headerActions }) => {
  const generateHeaderActions = useCallback(() => {
    return headerActions?.map((item) => item?.component);
  }, [headerActions]);

  return (
    <AntTable
      title={() => generateHeaderActions(headerActions)}
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
};

export default Table;
