import { useState } from "react"
import Notification from "./Notification"

const useNotification = (position = "bottom-right") => {
    const [notification, setNotification] = useState(null)
    let timer;
    const triggerNotification = (notificationProps) => {
        clearTimeout(timer);
        setNotification(notificationProps)
        timer = setTimeout(() => {
            setNotification(null);
        }, notificationProps.duration)
    }

    const NotificationComponent = notification ? (
        <div className={`${position}`}>
            <Notification {...notification} />
        </div>
    ) : null;
    return { NotificationComponent, triggerNotification }
}

export default useNotification