import {
  DeleteFilled,
  EditFilled,
  EyeFilled,
  PlusOutlined,
} from "@ant-design/icons";
import { Popconfirm, Button } from "antd";
import React from "react";
import Modal from "../../components/Modal";
import { DEFAULT_MODAL_BTN } from "../modal";
import { RECORD_FIELDS } from "../recordConfig";

const { add, edit, cancel, ok } = DEFAULT_MODAL_BTN;

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
        <Modal
          title="Просмотр записи"
          fieldsConfig={RECORD_FIELDS}
          modalBtn={[ok]}
          openBtn={<EyeFilled />}
          currentValue={item}
          displayType="view"
        />
        <Modal
          title="Редактирование записи"
          fieldsConfig={RECORD_FIELDS}
          modalBtn={[cancel, edit]}
          openBtn={<EditFilled />}
          currentValue={item}
          displayType="edit"
        />
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

export const TABLE_HEADER_ACTIONS = [
  {
    component: (
      <Modal
        title="Добавление записи"
        modalBtn={[cancel, add]}
        fieldsConfig={RECORD_FIELDS}
        displayType="add"
        openBtn={
          <Button ghost type="primary" icon={<PlusOutlined />}>
            Добавить запись
          </Button>
        }
      />
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
