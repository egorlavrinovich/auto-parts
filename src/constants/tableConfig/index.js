import { DeleteFilled, EditFilled, EyeFilled } from "@ant-design/icons";
import { Popconfirm } from "antd";
import React from "react";

export const TABLE_COLUMNS = [
  {
    title: "Название запчасти",
    dataIndex: "partName",
  },
  {
    title: "Марка авто",
    dataIndex: "carBrand",
    sorter: {
      compare: (a, b) => a.carBrand - b.carBrand,
    },
  },
  {
    title: "Производитель",
    dataIndex: "maker",
    sorter: {
      compare: (a, b) => a.maker - b.maker,
    },
  },
  {
    title: "Стоимость, руб",
    dataIndex: "sum",
    sorter: {
      compare: (a, b) => a.sum - b.sum,
    },
  },
  {
    title: "Наличие, шт",
    dataIndex: "available",
    sorter: {
      compare: (a, b) => a.available - b.available,
    },
  },
  {
    title: "Доставка, дней",
    dataIndex: "delivery",
    sorter: {
      compare: (a, b) => a.maker - b.maker,
    },
  },
  {
    title: "Действие",
    key: "operation",
    render: (_, item) => (
      <div className="table_actions">
        <EyeFilled onClick={() => console.log(1)} />
        <EditFilled onClick={() => console.log(1)} />
        <Popconfirm
          title="Вы действительно хотите удалить запись?"
          okText="Да"
          cancelText="Отмена"
          onConfirm={() => console.log(item)}
        >
          <DeleteFilled style={{ color: "#b00000" }} />
        </Popconfirm>
      </div>
    ),
  },
];

export const MOCK_DATA = [
  {
    id: "1",
    partName: "Шрус",
    carBrand: "Audi",
    maker: 60,
    sum: 70,
    available: 70,
    delivery: 5,
  },
  {
    id: "2",
    partName: "Коленчатый вал",
    carBrand: "Mersecedes",
    maker: 66,
    sum: 89,
    available: 20,
    delivery: 2,
  },
  {
    id: "3",
    partName: "Парктроник",
    carBrand: "Opel",
    maker: 90,
    sum: 70,
    available: 30,
    delivery: 1,
  },
  {
    id: "4",
    partName: "Дверная ручка",
    carBrand: "Volvo",
    maker: 99,
    sum: 89,
    available: 0,
    delivery: "-",
  },
];
