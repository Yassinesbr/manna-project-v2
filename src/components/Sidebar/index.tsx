import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import mannaLogo from "../../assets/manna-logo.svg";
import bulletSvg from "../../assets/bullet.svg";
import {
  articleIcon,
  speedIcon,
  lockIcon,
  groupIcon,
  domaineIcon,
  autoAwesomeIcon,
  integrationIcon,
  settingIcon,
} from "../../assets/index";
import { rolesRoute } from "../../App";

interface MenuItem {
  path: string;
  icon: string;
}

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [prevActiveIndex, setPrevActiveIndex] = useState<number | null>(null);

  const menuItems: MenuItem[] = [
    { path: "/page2", icon: speedIcon },
    { path: "/page3", icon: lockIcon },
    { path: rolesRoute, icon: groupIcon },
    { path: "/page4", icon: domaineIcon },
    { path: "/page5", icon: autoAwesomeIcon },
    { path: "/page6", icon: articleIcon },
    { path: "/page7", icon: integrationIcon },
    { path: "/page8", icon: settingIcon },
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    const currentIndex = menuItems.findIndex((item) =>
      currentPath.startsWith(item.path)
    );
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [location.pathname]);

  const handleClick = (index: number) => {
    if (index === activeIndex) return;
    setPrevActiveIndex(activeIndex);
    setActiveIndex(index);
  };

  const handleAnimationEnd = (index: number) => {
    if (prevActiveIndex === index) {
      setPrevActiveIndex(null);
    }
  };

  return (
    <aside className="aside">
      <Link to="/" className="sidebar__logo">
        <img src={mannaLogo} alt="logo" />
      </Link>
      <div className="sidebar__menu">
        {menuItems.map((item, index) => {
          const isItemActive = location.pathname.startsWith(item.path);
          const showExpandBullet =
            index === activeIndex && activeIndex !== prevActiveIndex;
          const showShrinkBullet =
            index === prevActiveIndex && prevActiveIndex !== activeIndex;

          return (
            <div
              key={index}
              className={`sidebar__menu-item-container${
                isItemActive ? " active" : ""
              }`}
            >
              {(showExpandBullet || showShrinkBullet) && (
                <img
                  src={bulletSvg}
                  alt="selection bullet"
                  className={`sidebar__bullet ${
                    showExpandBullet ? "bullet-expand" : ""
                  } ${showShrinkBullet ? "bullet-shrink" : ""}`}
                  onAnimationEnd={() => handleAnimationEnd(index)}
                />
              )}
              <Link
                to={item.path}
                className={`sidebar__menu-item${isItemActive ? " active" : ""}`}
                onClick={() => handleClick(index)}
              >
                <div
                  className={`sidebar__menu-icon-wrapper${
                    isItemActive ? " selected" : ""
                  }`}
                >
                  <img
                    src={item.icon}
                    alt="icon"
                    className="sidebar__menu-icon"
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
