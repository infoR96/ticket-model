import React,{useContext} from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import {CrearTicket} from './CrearTicket'
import {Escritorio} from './Escritorio'
import {Ingresar} from './Ingresar'
import {Cola} from './Cola'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { UiContext } from '../context/UiContext';
const { Header, Sider, Content } = Layout;
export const RouterPages = () => {

    const {ocultarMenu} =useContext(UiContext)
  return (
    <Router>
    
    <Layout style={{height:'100vh'}}>
    <Sider   breakpoint='md' collapsedWidth="0" hidden={ocultarMenu}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: <Link to="/">Ingresar</Link>
          },
          {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: <Link to="/crearTicket">Crear Ticket</Link>,
          },
          {
            key: '3',
            icon: <VideoCameraOutlined />,
            label: <Link to="/cola">Ver Cola</Link>,
          },
        ]}
      />
    </Sider>
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }}>
      </Header>
      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
       <Routes>
        <Route path="/ingresar" element={<Ingresar />} />
        <Route path="/escritorio" element={<Escritorio />} />
        <Route path="/crearTicket" element={<CrearTicket />} />
        <Route path="/cola" element={<Cola/>} />
        <Route
        path="*"
        element={ <nav><h3>Estas en una ruta desconocida, Regresar:</h3><Link to="/ingresar">QUIERO INGRESAR</Link></nav> }
    />
      </Routes>
      </Content>
    </Layout>
  </Layout>
  </Router>
  )
}
