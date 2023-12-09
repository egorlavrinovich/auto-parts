import React, { useState } from "react";
import { Modal as AntModal, Form, Button } from "antd";
import FormItemComponent from "../Form";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Modal = ({ openBtn, title, modalBtn }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (data) => {
    setIsModalOpen(false);
  };

  const generateModalBtn = () => {
    return modalBtn?.map((btn) => btn(handleOk));
  };

  return (
    <>
      <div onClick={showModal}>{openBtn}</div>
      <AntModal title={title} open={isModalOpen} onOk={handleOk} footer={null}>
        <Form
          name="basic"
          className="form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {generateModalBtn()}
        </Form>
      </AntModal>
    </>
  );
};

export default Modal;
