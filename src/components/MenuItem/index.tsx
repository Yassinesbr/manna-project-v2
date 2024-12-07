import { Link } from "react-router-dom";
import { bulletIcon } from "../../assets/index";

interface MenuItemProps {
  path: string;
  icon: string;
  isActive: boolean;
  showExpandBullet: boolean;
  showShrinkBullet: boolean;
  onClick: () => void;
  onAnimationEnd: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  path,
  icon,
  isActive,
  showExpandBullet,
  showShrinkBullet,
  onClick,
  onAnimationEnd,
}) => (
  <div className={`sidebar__menu-item-container${isActive ? " active" : ""}`}>
    {(showExpandBullet || showShrinkBullet) && (
      <img
        src={bulletIcon}
        alt="selection bullet"
        className={`sidebar__bullet ${
          showExpandBullet ? "bullet-expand" : ""
        } ${showShrinkBullet ? "bullet-shrink" : ""}`}
        onAnimationEnd={onAnimationEnd}
      />
    )}
    <Link
      to={path}
      className={`sidebar__menu-item${isActive ? " active" : ""}`}
      onClick={onClick}
    >
      <div
        className={`sidebar__menu-icon-wrapper${isActive ? " selected" : ""}`}
      >
        <img src={icon} alt="icon" className="sidebar__menu-icon" />
      </div>
    </Link>
  </div>
);

export default MenuItem;
