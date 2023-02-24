import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Row, Col, Typography, Button, Divider } from 'antd'
import React, { useContext, useState } from 'react'
import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helper/getUsuarioStorage';
import { useNavigate } from 'react-router-dom';
import { SocketContext } from '../context/SocketContext';


const { Title, Text } = Typography;

export const Escritorio = () => {
  useHideMenu(false);
  const { socket } = useContext(SocketContext);
  const [usuario] = useState(getUsuarioStorage());
  const [ticket, setticket] = useState(null)
  const Navigate = useNavigate();

  const salir = () => {
    localStorage.clear();
    Navigate('/ingresar')
  }
  const siguienteTicket = () => {
    socket.emit('siguiente-ticket-pendiente', usuario, (ticket) => {
      setticket(ticket);
    });

  }
  if (!usuario.agente || !usuario.escritorio) {
    Navigate('/ingresar')
  }
  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{usuario.agente}</Title>
          <Text>Usted esta trabajando en el escritorio: </Text>
          <Text type="success">{usuario.escritorio}</Text>
        </Col>
        <Col>
          <Button danger onClick={salir}
            shape="round"
            type="link">
          <CloseCircleOutlined />
            Salir

          </Button>
        </Col>
      </Row>
      <Divider />
      {
        ticket && (
        <Row>
          <Col>
            <Text>Esta siendo atendido el ticket numero: </Text>
            <Text style={{ fontSize: 30 }}
              type="danger">{ticket.numero} </Text>
          </Col>
        </Row>)
      }

      <Row>
        <Col offset={18} span={6} align="right">
          <Button onClick={siguienteTicket}
            shape="round"
            type="primary"
          >
            <RightOutlined />
            Siguiente

          </Button>

        </Col>
      </Row>
    </>
  )
}
