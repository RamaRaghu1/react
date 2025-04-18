import React from 'react'
import { AiOutlineCheckCircle, AiOutlineClose, AiOutlineCloseCircle, AiOutlineInfoCircle, AiOutlineWarning } from "react-icons/ai";
import "./Notifications.css";
const iconStyles={marginRight:"10px"}
const icons={
  success:<AiOutlineCheckCircle style={iconStyles}/>,
  error:<AiOutlineCloseCircle style={iconStyles}/>,
  warning:<AiOutlineWarning style={iconStyles}/>,
  info:<AiOutlineInfoCircle style={iconStyles}/>
}
const Notification = ({type='info', message, onClose=()=>{}}) => {
  return (
    <div className={`notification ${type}`}>
      {/* icon */}
      {icons[type]}
      {/* message */}
      {message}
      {/* close button */}
      <AiOutlineClose color="white"
      className='closeBtn'
      onClick={()=>onClose()}
      />
    </div>
  )
}

export default Notification
