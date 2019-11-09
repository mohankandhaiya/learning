import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Navbar from "./components/Navbar";

const { Header, Content, Sider } = Layout;

function App() {
  return (
      <Layout>
          <Header className="layout-header">
              <Navbar />
          </Header>
          <Layout>
              <Sider theme="light" >
                  {/*<Sidebar />*/}
              </Sider>
              <Content>
                  {/*<CardLayout />*/}
              </Content>
          </Layout>
      </Layout>
  );
}

export default App;
