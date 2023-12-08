import React, { useState } from "react";
import { FilterOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";
import Svg from "../Svg";

const Filter = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="filter" onClick={showDrawer}>
        <FilterOutlined />
      </div>
      <Drawer
        title="Фильтр"
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        key={"right"}
        width={320}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default Filter;
