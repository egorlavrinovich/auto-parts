import React, { useCallback, useMemo, useState } from "react";
import { FilterOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";
import { FILTER_BTN } from "../../constants/filter";
import FormItemComponent from "../Form";
import { RECORD_FIELDS } from "../../constants/recordConfig";

const { cancel, search } = FILTER_BTN;

const Filter = ({ fieldsConfig }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const generateFilterBtn = useCallback((form) => {
    return [cancel, search]?.map((item) => item(form));
  }, []);

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
        <FormItemComponent
          displayType="filter"
          formLayout="vertical"
          config={RECORD_FIELDS}
          generateBtn={generateFilterBtn}
        />
      </Drawer>
    </>
  );
};
export default Filter;
