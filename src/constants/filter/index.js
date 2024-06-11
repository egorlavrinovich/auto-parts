import {Button} from "antd";

export const FILTER_BTN = {
  search: (form) => (
    <Button type="primary" htmlType="search">
      Применить
    </Button>
  ),
  cancel: (form) => (
    <Button type="default" htmlType="cancel" onClick={() => form.resetFields()}>
      Сброс
    </Button>
  ),
};

export const FILTER_CONFIG = [
  {
    key: "PartName",
    title: "Название масла",
    dataIndex: "name",
    type: "textInput",
  },
  {
    key: "Maker",
    title: "Цена",
    dataIndex: "price",
    type: "textInput",
  },
];
