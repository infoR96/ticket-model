import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  {TicketApp}  from './TicketApp';


const divRoot = document.querySelector('#root');
const root = ReactDOM.createRoot(divRoot);
root.render(
  <TicketApp/>
);


