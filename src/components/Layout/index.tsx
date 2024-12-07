import React, { useContext } from "react";
import "./Layout.css";
import { LoaderContext } from "../../context/LoaderContext";
import Loader from "../Loader";
import Sidebar from "../Sidebar";
import TopBar from "../TopBar";
import NotificationProvider from "../../context/NotificationContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isLoading } = useContext(LoaderContext);
  return (
    <NotificationProvider>
      <div className="grid-container">
        <header className="top-bar">
          <TopBar />
        </header>
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <main className="content">
          {children}
          {isLoading && <Loader />}
        </main>
      </div>
    </NotificationProvider>
  );
};

export default Layout;
