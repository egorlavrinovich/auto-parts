import React, { useContext, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import { FetchContext } from "../../App";
import Image from "../Image";

const UPLOAD_PATH = `${process.env.REACT_APP_API_URL}/file`;

const App = ({ name = "image", form, disabled, src }) => {
  const { fetchData, loading } = useContext(FetchContext);
  const [fileId, setFileId] = useState();

  const onChange = (info) =>
    fetchData(
      () =>
        new Promise((res, rej) => {
          if (info.file.status === "done") {
            const resultSrc = `${process.env.REACT_APP_API_URL}/${info?.file?.response}`;
            message.success(
              `Загрузка файла: ${info.file.name} произошла успешно`
            );
            form.setFieldsValue({ image: resultSrc });
            res(setFileId(resultSrc));
          } else if (info.file.status === "error") {
            rej(
              message.error(
                `Произошла ошибка при загрузке файла: ${info.file.name}`
              )
            );
          }
        })
    );

  return (
    <>
      <Image src={fileId || src} />
      <Upload name={name} action={UPLOAD_PATH} onChange={onChange}>
        <Button
          loading={loading}
          disabled={loading || disabled}
          icon={<UploadOutlined />}
        >
          Загрузить
        </Button>
      </Upload>
    </>
  );
};
export default App;

{
  /* <>
      <Image src={fileId || src} />
      <AntUpload
        name={name}
        className="ant-upload-wrapper"
        onChange={onChange}
        customRequest={uploadFile}
      >
        <Button
          loading={loading}
          disabled={loading || disabled}
          icon={<UploadOutlined />}
        >
          Загрузить
        </Button>
      </AntUpload>
    </> */
}
