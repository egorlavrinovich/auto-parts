const rules = {
  require: { required: true, message: "Введите значение" },
};

export const CARS_BRANDS = [
  {
    value: "audi",
    label: "Audi",
  },
  {
    value: "bmw",
    label: "BMW",
  },
  {
    value: "vw",
    label: "Volkswagen",
  },
  {
    value: "porshe",
    label: "Porsche",
  },
  {
    value: "opel",
    label: "Opel",
  },
  {
    value: "maybach",
    label: "Maybach",
  },
];

export const RECORD_FIELDS = [
  {
    key: "PartName",
    title: "Название запчасти",
    dataIndex: "partName",
    type: "textInput",
    rules: [rules.require],
  },
  {
    key: "CarBrand",
    title: "Марка авто",
    dataIndex: "carBrand",
    type: "select",
    selectData: CARS_BRANDS,
    rules: [rules.require],
  },
  {
    key: "Maker",
    title: "Производитель",
    dataIndex: "maker",
    type: "textInput",
    rules: [rules.require],
  },
  {
    key: "Sum",
    title: "Стоимость, руб",
    dataIndex: "sum",
    type: "numberInput",
    rules: [rules.require],
  },
  {
    key: "Available",
    title: "Наличие, шт",
    dataIndex: "available",
    type: "numberInput",
    rules: [rules.require],
  },
  {
    key: "Delivery",
    title: "Доставка, дней",
    dataIndex: "delivery",
    type: "numberInput",
    rules: [rules.require],
  },
];
