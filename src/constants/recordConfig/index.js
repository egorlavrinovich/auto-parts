const rules = {
  require: { required: true, message: "Введите значение" },
};

export const CARS_BRANDS = [
  {
    value: "Audi",
    label: "Audi",
  },
  {
    value: "BMW",
    label: "BMW",
  },
  {
    value: "Volkswagen",
    label: "Volkswagen",
  },
  {
    value: "Porsche",
    label: "Porsche",
  },
  {
    value: "Opel",
    label: "Opel",
  },
  {
    value: "Maybach",
    label: "Maybach",
  },
];

export const RECORD_FIELDS = [
  {
    key: "PartName",
    title: "Название масла",
    dataIndex: "name",
    type: "textInput",
    rules: [rules.require],
  },
  {
    key: "Maker",
    title: "Цена",
    dataIndex: "price",
    type: "textInput",
    rules: [rules.require],
  },
  {
    key: "Image",
    title: "Фото",
    dataIndex: "image",
    type: "upload",
  },
];
