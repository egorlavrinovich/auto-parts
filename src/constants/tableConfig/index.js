import {DeleteFilled, EditFilled,} from "@ant-design/icons";
import {Button, Flex, Image, Tag} from "antd";
import React from "react";
import Confirm from "../../components/Confirm";
import Modal from "../../components/Modal";
import {DEFAULT_MODAL_BTN} from "../modal";
import {RECORD_FIELDS} from "../recordConfig";

const {add, edit, cancel, ok} = DEFAULT_MODAL_BTN;

export const TABLE_COLUMNS = [
    {
        title: "Название масла",
        dataIndex: "name",
        sorter: {
            compare: (a, b) => a?.name.localeCompare(b?.name),
        },
    },
    {
        title: "Цена",
        dataIndex: "price",
        sorter: {
            compare: (a, b) => a?.price.localeCompare(b?.price),
        },
    },
    {
        title: "Описание",
        dataIndex: "description",
        render: (record) => <Flex gap="4px 0" wrap>{record?.map((item) => <Tag color='geekblue'>{item}</Tag>)}</Flex>
    },
    {
        title: "Фото",
        dataIndex: "image",
        render: (record) => <Image style={{height: '100px', minWidth: '80px'}} src={record}/>
    },
    {
        title: "Действие",
        key: "operation",
        render: (_, item) => (
            <div className="table_actions">
                <Modal
                    title="Редактирование записи"
                    fieldsConfig={RECORD_FIELDS}
                    modalBtn={[cancel, edit]}
                    openBtn={<EditFilled style={{cursor: "pointer"}}/>}
                    currentValue={item}
                    displayType="edit"
                />
                <Confirm
                    title="Вы действительно хотите удалить запись?"
                    okText="Да"
                    cancelText="Отмена"
                    currentItem={item}
                >
                    <DeleteFilled style={{color: "#b00000"}}/>
                </Confirm>
            </div>
        ),
    },
];

export const TABLE_HEADER_ACTIONS = (loadData, fetchData) => ([
    {
        component: (
            <Button type='primary' onClick={() => fetchData(loadData)}>Получить актуальные данные</Button>
        ),
    },
]);
