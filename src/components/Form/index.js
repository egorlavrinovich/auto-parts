import { Form } from "antd";
import React, { useMemo } from "react";
import Select from "../Select";
import Input from "../Input";
import { Button } from "antd";

const FORM_ITEMS_MAP = (item, isOnlyRead) => ({
  textInput: <Input type="textInput" disabled={isOnlyRead} />,
  numberInput: <Input disabled={isOnlyRead} />,
  select: <Select data={item?.selectData} disabled={isOnlyRead} />,
});

const FormItemComponent = ({
  config,
  values = {},
  generateBtn,
  displayType,
  formLayout = "horizontal",
}) => {
  const [form] = Form.useForm();
  const isOnlyRead = displayType === "view";
  const isFilter = displayType === "filter";

  const onFinish = (value) => {
    console.log("Success:", value);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const generateContent = useMemo(() => {
    console.log(values);
    return config?.map((item) => (
      <Form.Item
        style={{ marginBottom: isFilter ? 12 : 18 }}
        key={item?.key}
        name={item?.dataIndex}
        label={item?.title}
        rules={displayType !== "filter" && item?.rules}
        initialValue={values[item?.dataIndex]}
      >
        {FORM_ITEMS_MAP(item, isOnlyRead)[item?.type]}
      </Form.Item>
    ));
  }, [config, values, isOnlyRead, displayType]);

  return (
    <Form
      form={form}
      name="basic"
      className="form"
      layout={formLayout}
      labelCol={{
        span: isFilter ? 12 : 9,
      }}
      wrapperCol={{
        span: isFilter ? 24 : 13,
      }}
      style={{
        maxWidth: 600,
        marginTop: isFilter ? 0 : 20,
        padding: 0,
      }}
      onFinish={onFinish}
      // onFinishFailed={failedValdation}
      autoComplete="off"
    >
      {generateContent}
      <div className="form_actions">{generateBtn(form)}</div>
    </Form>
  );
};
export default FormItemComponent;
