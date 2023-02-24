import React, { useContext, useState } from 'react'
import {Button, Col,Row,Typography} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';
import { SocketContext } from '../context/SocketContext';


const {Text,Title}=Typography;
export const CrearTicket = () => {

  useHideMenu(true);

  const {socket}= useContext(SocketContext);
  const [ticket,setTicket]=useState({});
  const nuevoTicket = ()=>{
      socket.emit('solicitar-ticket',{"data":"msg"},(ticket)=>{
        setTicket(ticket);
      });
  }
  return (
    <>
    <Row>
      <Col span={14} offset={6} align='center'>
        <Title level={3}>
          Presione el boton para un nuevo ticket
        </Title>
        <Button type='primary'
            shape='round'
            icon={<DownloadOutlined/>}
            size='large'
            onClick={nuevoTicket}>

        </Button>
      </Col>
    </Row>
    <Row style={{marginTop:100}}>
      <Col span={14} offset={6} align='center' >
        <Text level={2}>
          Su numero
        </Text>
        <br/>
        <Text type='success' style={{fontSize:55}} level={2}>
            {ticket.numero}
        </Text>
      </Col>
    </Row>
    </>
  )
}
