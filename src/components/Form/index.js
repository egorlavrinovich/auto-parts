import { Form } from "antd";
import React, { useContext, useMemo } from "react";
import { FetchService } from "../../API";
import { FetchContext } from "../../App";
import Input from "../Input";
import Select from "../Select";

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
  const { fetchData, getData } = useContext(FetchContext);
  const isOnlyRead = displayType === "view";
  const isFilter = displayType === "filter";
  const isAdd = displayType === "add";
  const isEdit = displayType === "edit";

  const onFinish = async (value) => {
    if (isAdd)
      fetchData(() => FetchService.addRecord(value).then(() => getData()));
    if (isEdit)
      fetchData(() =>
        FetchService.editRecord(values?.id, value).then(() => getData())
      );
    if (isFilter) {
      const filterOption = Object.fromEntries(
        Object.entries(value).filter(([_, value]) => value)
      );
      fetchData(() => getData(filterOption));
    }
  };

  const generateContent = useMemo(() => {
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
  }, [config, values, isOnlyRead, displayType, isFilter]);

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
      autoComplete="off"
    >
      {generateContent}
      <div className="form_actions">{generateBtn(form)}</div>
    </Form>
  );
};
export default FormItemComponent;
