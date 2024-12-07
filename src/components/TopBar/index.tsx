import logout from "../../assets/logout.svg";
import Typography from "../Typography";
import "./TopBar.css";

const TopBar: React.FC = () => {
  return (
    <div className="top-bar-infos">
      <Typography variant="caption" className="color-gray-3">
        Yassine Essebbar
      </Typography>
      <img src={logout} alt="logout" className="logout-button" />
    </div>
  );
};

export default TopBar;
