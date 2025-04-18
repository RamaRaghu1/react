import { useState } from 'react'
import useNotification from './useNotifications'
import './App.css'
import Notification from './Notification'

function App() {
  const {NotificationComponent, triggerNotification}=useNotification("bottom-right")

  return (
   <div>
    Rama
    <button
    onClick={()=>
      triggerNotification({
        type:"success",
        message:"file sent successfully",
        duration:3000
      })
    }
    >Trigger Success</button>
   
    <button
    onClick={()=>
      triggerNotification({
        type:"error",
        message:"file sent failed",
        duration:3000
      })
    }
    >Trigger error</button>
    {NotificationComponent}
   </div>
  )
}

export default App
