import { Layout } from "antd";
import React from "react";
import "./App.css";
import Filter from "./components/Filter";
import Svg from "./components/Svg";
import Table from "./components/Table";
import {
  TABLE_HEADER_ACTIONS,
  MOCK_DATA,
  TABLE_COLUMNS,
} from "./constants/tableConfig";

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
        <Table
          columns={TABLE_COLUMNS}
          data={MOCK_DATA}
          headerActions={TABLE_HEADER_ACTIONS}
        />
      </Content>
      <Footer className="footer">
        <Svg nameOfSvg="partCompanies" />
      </Footer>
    </Layout>
  );
};

export default App;
