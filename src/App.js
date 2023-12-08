import { Layout } from "antd";
import React from "react";
import "./App.css";
import Table from "./components/Table";
import Svg from "./components/Svg";
import { MOCK_DATA, TABLE_COLUMNS } from "./constants/tableConfig";
import Filter from "./components/Filter";
import { FilterOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout className="layout_container">
      <Header className="header">
        <Svg nameOfSvg="logo" />
        <div className="demo-logo">AUTO SKLAD</div>
        <Filter />
      </Header>
      <Content className="site-layout">
        <Table columns={TABLE_COLUMNS} data={MOCK_DATA} />
      </Content>
      <Footer className="footer">
        <Svg nameOfSvg="partCompanies" />
      </Footer>
    </Layout>
  );
};

export default App;
