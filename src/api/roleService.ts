import axios, { AxiosResponse } from "axios";
import { RoleData } from "../enum/role";

const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL as string;

interface Role {
  identifier: string;
  id: string;
  name: string;
  isCustom: boolean;
  roleIcon: number;
  permissions: {
    id: number;
    accessLevel: number;
  }[];
  usersAssigned: number;
}

export const getRoles = async (): Promise<Role[]> => {
  try {
    const response: AxiosResponse<Role[]> = await axios.get(
      `${API_BASE_URL}/Roles?identifier=yassine_essebbar`
    );
    return response.data;
  } catch (err) {
    console.error("Error fetching roles:", err);
    throw err;
  }
};

export const addRole = async (newRole: RoleData): Promise<Role> => {
  try {
    const response: AxiosResponse<Role> = await axios.post(
      `${API_BASE_URL}/AddRole?identifier=yassine_essebbar`,
      newRole
    );
    return response.data;
  } catch (err) {
    console.error("Error adding role:", err);
    throw err;
  }
};

export const deleteRole = async (id: string): Promise<string> => {
  try {
    await axios.delete(
      `${API_BASE_URL}/DeleteRole/${id}?identifier=yassine_essebbar`
    );
    return id;
  } catch (err) {
    console.error("Error deleting role:", err);
    throw err;
  }
};

export const getRoleById = async (id: string): Promise<Role> => {
  try {
    const response: AxiosResponse<Role> = await axios.get(
      `${API_BASE_URL}/Roles/${id}?identifier=yassine_essebbar`
    );
    return response.data;
  } catch (err) {
    console.error("Error fetching role:", err);
    throw err;
  }
};

export const updateRole = async (role: RoleData): Promise<void> => {
  try {
    await axios.put(
      `${API_BASE_URL}/UpdateRole?identifier=yassine_essebbar`,
      role
    );
  } catch (err) {
    console.error("Error updating role:", err);
    throw err;
  }
};
