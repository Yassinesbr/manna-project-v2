import TextField from "../../components/TextField";
import "./AddRole.css";
import roleIcons from "../../enum/roleIcon";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { rolesRoute } from "../../App";
import useAddRole from "../../hooks/useAddRole";
import { useEffect } from "react";
import RoleIconsSelector from "../../components/RoleIconsSelector";
import PermissionsList from "../../components/PermissionsList";
import { arrow } from "../../assets";

const AddRole: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    value,
    setValue,
    selectedIcon,
    setSelectedIcon,
    permissions,
    setPermissions,
    handleSwitchChange,
    handleSave,
  } = useAddRole();

  const title = id ? "Edit Role" : "Add Custom Role";

  useEffect(() => {
    if (location.state && location.state.permissions) {
      setPermissions(location.state.permissions);
    }
  }, [location.state, setPermissions]);

  return (
    <div className="add-role-container">
      <div className="heading-container-infos">
        <Typography variant="heading1" className="color-black">
          {title}
        </Typography>
        <div
          className="color-gray-2"
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          onClick={() => navigate(rolesRoute)}
        >
          <img src={arrow} alt="backIcon" className="backIcon" />
          <Typography variant="body2" className="color-gray-2">
            Back
          </Typography>
        </div>
      </div>
      <div className="header-container">
        <Typography variant="body2" className="color-gray-2">
          Configure general information and permissions below. Don’t forget to
          save the Custom Role.
        </Typography>
        <TextField
          label="Custom Role Name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Input Custom Role Name"
        />
      </div>

      <RoleIconsSelector
        roleIcons={roleIcons}
        selectedIcon={selectedIcon}
        onIconSelect={setSelectedIcon}
      />

      <Typography variant="subheading1" className="color-black" gutterBottom>
        Permissions
      </Typography>

      <PermissionsList
        permissions={permissions}
        onSwitchChange={handleSwitchChange}
      />

      <div className="button-container">
        <Button
          label="Cancel"
          variant="secondary"
          onClick={() => navigate(rolesRoute)}
        />
        <Button
          label={id ? "Update Role" : "Save Changes"}
          variant="primary"
          onClick={handleSave}
        />
      </div>
    </div>
  );
};

export default AddRole;
