import React, { createContext, useState, FC } from "react";
import Notification from "../components/Notification";
import { NotificationType } from "../enum/notificationType";

interface NotificationContextProps {
  showNotification: (message: string, type: NotificationType) => void;
}

export const NotificationContext = createContext<NotificationContextProps>({
  showNotification: () => {},
});

interface NotificationProviderProps {
  children: React.ReactNode;
}

const NotificationProvider: FC<NotificationProviderProps> = ({ children }) => {
  const [notification, setNotification] = useState<{
    message: string;
    type: NotificationType;
  } | null>(null);

  const showNotification = (message: string, type: NotificationType) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {notification && (
        <Notification message={notification.message} type={notification.type} />
      )}
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
