import { FC } from "react";
import "./Notification.css";

interface NotificationProps {
  message: string;
  type: "success" | "updating" | "error";
}

const Notification: FC<NotificationProps> = ({ message, type }) => {
  return <div className={`notification ${type}`}>{message}</div>;
};

export default Notification;
