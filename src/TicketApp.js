import React from 'react'
import { SocketProvider } from './context/SocketContext'
import { UiProvider } from './context/UiContext'

import { RouterPages } from './pages/RouterPages'


export const TicketApp = () => {

    return (
        <SocketProvider>
     <UiProvider>
        <RouterPages/>
     </UiProvider>
     </SocketProvider>

    )
}
